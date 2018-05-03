const path = require("path");
const express = require("express");
const app = express();
const publicPath = path.join(__dirname, "..", "public");
const port = process.ENV.port || 3000;

app.use(express.static(publicPath));
app.get('/login', function(req,res){
    res.send("SEND INTO O-AUTH FLOW");
})
app.listen(port, () => console.log(`Listening on port ${port}`));