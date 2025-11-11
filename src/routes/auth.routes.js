const express = require('express');
const authControllers = require("../controlleres/auth.controllers");
const roter = express.Router();

router.post("/register", authControllers.registerUser)







module.exports = router;