const express = require("express")
const cookieParser = require('cookie-parser')
const cors = require('cors')

/* routes */
const authRoutes = require('./routes/auth.routes');
const chatRoutes = require("./routes/chat.routes");

const app = express();

/*using Middleware */
app.use(express.json())
app.use(cookieParser());
// Enable CORS for frontend with credentials (cookies)
app.use(
	cors({
		origin: process.env.FRONTEND_URL || true,
		credentials: true,
	})
)


// Using Routes
app.use('/api/auth', authRoutes);
app.use('/api/chat', chatRoutes);
module.exports = app;