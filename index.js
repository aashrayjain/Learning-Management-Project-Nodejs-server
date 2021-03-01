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

var dbFile = require("./app/config/db.config");
var courseController = require("./app/controllers/courseController");

// // db connection
// dbFile.conn.connect(function(err){
//     if (err) {
//         throw err;
//     } else {
//         console.log("Connected to MySql");
//         dbFile.conn.end();
//         console.log('Connection Closed');
//     }
// });

//app.use() tell the express object to use these dependencies
app.use(cors(corsOptions));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

// parse application/json
app.use(bodyParser.json());


//routes for application
//get request
app.get('/', function(req, res) {
    res.json({
        message: "Welcome to server side Node.js"
    });
    console.log('You hit the server with get request.')
    // console.log(req)
});

app.post('/addCourses', function (req, res) {
    // res.send('Post request received');
    // console.log(req)
    var course = {
        course_id: req.body.course_id,
        course_code: req.body.course_code,
        course_name: req.body.course_name,
        document_upload: req.body.document_upload
    };
    // console.log(req.body);
    // res.send(course);

    //calling function to add courses to db
    courseController.addCourse(course);
    res.send("Course added successfully.");
});



//set port and listen for all request
const PORT = process.env.PORT || 8080;
app.listen(PORT, function() {
    console.log(`Server is running on port ${PORT}`);
});
