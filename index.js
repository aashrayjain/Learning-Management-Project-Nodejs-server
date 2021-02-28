//Express is used for Rest Api and its method
const express = require("express");

//body-parser provides us to parse the json data to the client or vice versa
const bodyParser = require("body-parser");

//
const cors = require("cors");

//app is the express object. app is responsible to handle get/put/post/delete request
const app = express();

var corsOptions = {
    origin: "http://localhost:8080"
};

//app.use() tell the express object to use these dependencies
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({extended: true}));

//routes for application

app.get("/", function(req, res) {
    res.json({
        message: "Welcome to server side Node.js"
    });
});


//set port and listen for all request
const PORT = process.env.PORT || 8080;
app.listen(PORT, function() {
    console.log("Server is running on port ${PORT}.")
});
