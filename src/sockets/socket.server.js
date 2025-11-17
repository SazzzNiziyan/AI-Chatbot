const { Server } = require("socket.io");
const cookie = require("cookie");
const jwt = require("jsonwebtoken");
const userModel = require("../model/user.model")
const aiServices = require("../service/ai.service")
const messageModel = require("../model/message.model")
const {createMemory , queryMemory} = require("../service/vector.service")


function initSocketServer(httpServer) {

    const io = new Server(httpServer, {});

    io.use(async (socket, next) => {

        const cookies = cookie.parse(socket.handshake.headers?.cookie || "");

        if (!cookies.token) {
            next(new Error("Authentication error: No token provided"))
        }

        try {

            const decoded = jwt.verify(cookies.token, process.env.JWT_SECRET);

            const user = await userModel.findById(decoded.id);

            socket.user = user;
            next()

        } catch (err) {
            next(new Error("Authentication error: Invalid token"));
        }
    })

    io.on("connection", (socket) => {

        socket.on("ai-message", async (messagePayload) => {


            await messageModel.create({
                chat: messagePayload.chat,
                user: socket.user._id,
                content: messagePayload.content,
                role: "user"
            })


            const vectors = await aiServices.generateVector(messagePayload.content)

            await createMemory({
                vectors,
                messageId: "73847834",
                metadata:{
                    chat: messagePayload.chat,
                    user: socket.user._id
                }
            })

            const chatHistory = (await messageModel.find({
                chat: messagePayload.chat
            }).sort({ createdAt: -1 }).limit(40).lean()).reverse()


            const response = await aiServices.generateResponse(chatHistory.map(item => {
                return {
                    role: item.role,
                    parts: [{ text: item.content}]
                }
            }))

            await messageModel.create({
                chat: messagePayload.chat,
                user: socket.user._id,
                content: response,
                role: "model"
            })

            const responseVectors = await aiServices.generateVector(response)

            await createMemory({
                vectors: responseVectors,
                messageId: "73847835",
                metadata:{
                    chat: messagePayload.chat,
                    user: socket.user._id
                }
            })
            socket.emit('ai-message', {
                content: response,
                chat: messagePayload.chat
            })
        })
    })

    // socket.on("disconnect", () => {
    //     console.log("A user disconnected")
    // });


}

module.exports = initSocketServer;