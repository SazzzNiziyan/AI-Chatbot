const app = require("./src/app");
const { createServer } = require("http");
const { Server } = require("socket.io");

const httpServer = createServer(app);
const io = new Server(httpServer, { /* options */ });

io.on("connection", (socket) => {
  console.log("User connected");

  socket.on("disconnect", () => {
    console.log("A user disconnected")
  });
  
  socket.on("message",() =>{
    console.log("Message received")
  })

});


httpServer.listen(3000, () => {
  console.log("Server is runnig on port number 3000");
});
