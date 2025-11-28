const express = require("express")
const cookieParser = require('cookie-parser')
const cors = require('cors')
const path = require('path')

/* routes */
const authRoutes = require('./routes/auth.routes');
const chatRoutes = require("./routes/chat.routes");

const app = express();

/*using Middleware */
app.use(express.json())
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
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


app.get("*name", (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});
module.exports = app;