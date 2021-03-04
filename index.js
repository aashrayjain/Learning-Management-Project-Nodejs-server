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

//app.use() tell the express object to use these dependencies
app.use(cors(corsOptions));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

var dbFile = require("./app/config/db.config");
var courseController = require("./app/controllers/courseController");
var userController = require('./app/controllers/userController');

//routes for application

//post request to add course (working code)
app.post('/addCourses', function (req, res) {
    // console.log("Post hit");
    // console.log(req.body)
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
    courseController.addCourse(course, function (response) {
        if (response === true) {
            res.json({
                message: true
            });
        } else {
            res.json({
                err: response
            });
        }
    });
});

//getAllCourse (working code)
app.get('/getAllCourse', function (req, res) {
    console.log("Get all Courses hit")
    courseController.getCourse(function (course) {
        res.json({ course: course });
    });
});

//getAllUser (working code)
app.get('/getAllUser', function (req, res) {
    userController.getUser(function (user) {
        res.json({ user: user });
    });
});


//get request to fetch all courses from db (working code)
app.get('/getAllCourses', function (req, res) {
    var courses = courseController.getAllCourses()
    console.log(courses)
    res.send(courses);
});

//put request for updating the course of user (working code)
app.put('/updateUserCourse/:user_id/:course_code', function (req, res) {
    // console.log(req.params.user_id + " " + req.params.course_id);
    console.log("Put request Hit");
    var userCourse = {
        user_id: req.body.userId,
        username: req.body.userName,
        course_code: req.body.courseCode,
        course_name: req.body.courseName
    };
    // console.log(userCourse);
    userController.updateUserCourse(userCourse, userCourse.user_id, userCourse.course_code, function (response) {
        res.json(response);
    });

});


//get request
app.get('/', function (req, res) {
    res.json({
        message: "Welcome to server side Node.js"
    });
    console.log('You hit the server with get request.')
    // console.log(req)
});

//set port and listen for all request
const PORT = process.env.PORT || 8080;
app.listen(PORT, function () {
    console.log(`Server is running on port ${PORT}`);
});
