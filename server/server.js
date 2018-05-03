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
require("./models/User.js"); // Creates a Mongoose model class for user data.


require("./services/passport.js"); // Adds our OAuth handling information.

app.use(passport.initialize());
app.use(passport.session());


require("./routes/authRoutes")(app); // Invoke our routes function, handing it the express object as an argument.

mongoose.connect(keys.mongoURI); // Connect to our mongoose database.


// Initialize App.
app.use(express.static(publicPath));
app.listen(port, () => console.log(`Listening on port ${port}`));