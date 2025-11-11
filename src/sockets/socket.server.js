const { Server } = require("socket.io");

function initSocketServer(httpServer) {

    const io = new Server(httpServer, { /* options */ });

    io.on("connection", (socket) => {
        console.log("New Socket connection:", socket.id);
    })

    // socket.on("disconnect", () => {
    //     console.log("A user disconnected")
    // });


}

module.exports = initSocketServer;