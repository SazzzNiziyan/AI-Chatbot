<div align="center">

# 🚀 **AI Chatbot System**
### Real-Time • AI-Powered • Scalable • Modular

<img src="https://dummyimage.com/1200x280/000/ffffff&text=AI+Chatbot+System+Banner" width="100%" style="border-radius:10px;"/>

A clean and production-ready backend for building intelligent chat systems.

</div>

----

## 🌟 **Overview**

This project is a complete AI-driven chat platform built using Node.js, Express, MongoDB, JWT authentication, and Socket.io for real-time communication.
It handles user login, message history, secure sessions, and AI responses with a modular and scalable architecture.

---

## 🚀 **Core Features**

- ⚡ **Real-time chat** with instant message updates
- 🤖 **AI-powered responses** through a dedicated service layer
- 🔐 **JWT-based authentication**
- 💬 **Message & conversation history stored in MongoDB**
- 🧩 **Clean MVC architecture**
- 🔗 **REST API + WebSockets hybrid system**
- 📦 **Easy to extend and production-friendly**

---

## 🧠 **Tech Stack (with purpose)**

### **Node.js**
Handles backend logic and server runtime.

### **Express.js**
Manages routes, middleware, and APIs.

### **MongoDB + Mongoose**
Stores users, chats, and messages using Schema-based models.

### **Socket.io**
Provides real-time, two-way communication for live chat.

### **JWT (JSON Web Token)**
Secures authentication and protects routes.

### **AI Service**
`ai.service.js` communicates with external AI APIs (OpenAI, Gemini, etc.) to generate responses.

### **Controllers**
Separate logic:
- Authentication (login, signup)
- Chat operations and messaging

### **Routes**
Organized API endpoints:
- `/auth`
- `/chat`

### **Socket Server**
Handles WebSocket connections and message broadcasting.

---

## 📁 **Project Structure**

```text
AI-Chatbot/
│
├── src/
│   ├── controllers/      # Business logic (Auth, Chat)
│   ├── db/               # Database connection logic
│   ├── middlewares/      # Auth verification & error handling
│   ├── models/           # Mongoose schemas (User, Message)
│   ├── routes/           # API endpoint definitions
│   ├── service/          # External AI integration logic
│   ├── sockets/          # Socket.io event handlers
│   └── app.js            # Express app setup
│
├── .env                  # Environment variables
├── server.js             # Entry point
└── package.json          # Dependencies and scripts
```
### **🛠️ Setup Guide**

Install dependencies:
```Bash
npm install
```

Run the server:
```Bash
npm start
```

Create a .env file with:
```Ini, TOML
MONGO_URI=
JWT_SECRET=
AI_API_KEY=
PORT=5000
```

### **🧩 API Endpoints**
Auth
```
Method      |        Route         |     Description
___________________________________________________________
            |                      |
POST        |       /auth/signup   |      Create a new user
POST        |       /auth/login    |      Login & get token
```

### **Chat**
```
Method      |        Route          |    Description
____________________________________________________________________
            |                       | 
POST        |      /chat/send       |    Send message & get AI reply
GET         |      /chat/history    |     Get full conversation
```

### **🚀 How it Works (Quick Flow)**
User logs in → JWT is created → Token is used for chat access →Message is saved in database → AI service generates reply →Socket.io pushes messages instantly →History is stored for retrieval.

### **🧠 Future Upgrades**
- Multi-agent AI conversations
- Voice modeImage generation
- React/Next.js frontend
- Admin dashboard
- Conversation analytics


### **❤️ Contributing**
Contributions are welcome.For major updates, open an issue to discuss changes first.

### **🪪 License**
MIT License.

<div align="center">Made with ⚡ passion + ☕ caffeine</div>
