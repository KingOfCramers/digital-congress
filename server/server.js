// Express
const path = require("path");
const express = require("express");
const app = express();
const publicPath = path.join(__dirname, "..", "public");
const port = (process.env.PORT || 8080);

// Mongoose
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys.js"); // Get the mongoDB


// Initialize App.
app.use(express.static(publicPath));
app.get('/login', function(req,res){
    res.send("SEND INTO O-AUTH FLOW");
})
app.listen(port, () => console.log(`Listening on port ${port}`));