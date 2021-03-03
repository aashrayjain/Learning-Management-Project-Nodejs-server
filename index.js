//Express is used for Rest Api and its method
const express = require("express");

//body-parser provides us to parse the json data to the client or vice versa
const bodyParser = require("body-parser");

//
const cors = require("cors");

//app is the express object. app is responsible to handle get/put/post/delete request
const app = express();

var corsOptions = {
    origin: "http://localhost:4200"
};

var dbFile = require("./app/config/db.config");
var courseController = require("./app/controllers/courseController");
var userController = require('./app/controllers/userController');

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

//post request to add course
app.post('/addCourses', function (req, res) {
    console.log("Post hit");
    console.log(req.body)
    var course = {
        course_id: req.body.courseId,
        course_code: req.body.courseCode,
        course_name: req.body.courseName,
        // document_upload: req.body.document
        document_upload: null
    };
    console.log(course);
    // res.send(course);

    //calling function to add courses to db
    courseController.addCourse(course);
    res.send("Course added successfully.");
});

//get request to fetch all courses from db
app.get('/getAllCourses', function (req, res) {
    var courses = courseController.getAllCourses()
    console.log(courses)
    res.send(courses);
});

//put request for updating the course of user
app.put('/updateUserCourse/:user_id/:course_id', function (req, res) {
    // console.log(req.params.user_id + " " + req.params.course_id);
    var user_id = req.params.user_id;
    var course_id = req.params.course_id;
    userController.updateUserCourse(user_id, course_id);
    res.send("User courses updated");
});


//set port and listen for all request
const PORT = process.env.PORT || 8080;
app.listen(PORT, function() {
    console.log(`Server is running on port ${PORT}`);
});
