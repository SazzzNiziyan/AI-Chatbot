const { Server } = require("socket.io");
const cookie = require("cookie");
const userModal = require("../model/user.model")
const jwt = require("jsonwebtoken");

function initSocketServer(httpServer) {

    const io = new Server(httpServer, {});

    io.use(async(socket, next) => {

        const cookies = cookie.parse(socket.handshake.headers?.cookie || "");

        if (!cookies.token) {
            next(new Error("Authentication error: No token provided"))
        }

        try {

            const decoded = jwt.verify(cookies.token, process.env.JWT_SECRET);

            const user = await userModel.findById(decoded.id);

            socket.user = user;
            next()

        } catch (err){
            next( new Error("Authentication error: Invalid token"));
        }
    })

    io.on("connection", (socket) => {
        console.log("New Socket connection:", socket.id);
    })

    // socket.on("disconnect", () => {
    //     console.log("A user disconnected")
    // });


}

module.exports = initSocketServer;