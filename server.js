require("dotenv").config();
const app = require("./src/app");
const connectDB = require("./src/db/db")
// const { createServer } = require("http");
// const { Server } = require("socket.io");
// const generateResponse = require("./src/service/ai.service")

// const httpServer = createServer(app);
// const io = new Server(httpServer, { /* options */ });

// io.on("connection", (socket) => {
//   console.log("User connected");

//   socket.on("disconnect", () => {
//     console.log("A user disconnected")
//   });
  
//   socket.on("ai-message", async (data) =>{
    
//     console.log("received AI-Message")
//     const response = await generateResponse(data.prompt);
//     console.log("AI Response:", response);
//     socket.emit("ai-message-response",{response})
//   })

// });

connectDB() 
app.listen(3000, () => {
  console.log("Server is runnig on port number 3000");
});
// httpServer.listen(3000, () => {
//   console.log("Server is runnig on port number 3000");
// });
