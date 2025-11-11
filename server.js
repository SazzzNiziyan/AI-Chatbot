require("dotenv").config();
const app = require("./src/app");
const connectDB = require("./src/db/db")
const initSocketServer = require("./src/sockets/socket.server")
const httpServer = require('http').createServer(app);
// const generateResponse = require("./src/service/ai.service")


//   socket.on("ai-message", async (data) =>{
    
//     console.log("received AI-Message")
//     const response = await generateResponse(data.prompt);
//     console.log("AI Response:", response);
//     socket.emit("ai-message-response",{response})
//   })

// });

connectDB() 
initSocketServer(httpServer)


httpServer.listen(3000, () => {
  console.log("Server is runnig on port number 3000");
});
