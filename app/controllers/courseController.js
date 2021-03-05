//add course

var dbFile = require("../config/db.config");

//fs module performs file operation in local computer
var fs = require("fs");
const { Console, error, exception } = require("console");

//dummy data added

// dbFile.conn.connect(function(err) {
//     if (err) {
//         throw err;
//     } else {
//         console.log("Connected to MySql.");
//         var document = {
//             file: fs.readFileSync("H:\\TATA Consultancy Services Ltd\\TCS Digital Internship\\Learning Management Project\\LMP-Project\\Learning-Management-Project-Nodejs-server\\asset\\ProjectDetails.txt")
//         };

//         // var sql = `INSERT INTO COURSE(COURSE_ID, COURSE_CODE, COURSE_NAME, DOCUMENT_UPLOAD) VALUES(1,101,'Node.js',?)`;
//         var courses = [
//             [2, 102, 'Javascript', document.file],
//             [3, 103, 'AngularJS', document.file],
//             [4, 104, 'Java', document.file],
//             [5, 105, 'Python', document.file],
//         ];
//         var sql = "INSERT INTO COURSE(COURSE_ID, COURSE_CODE, COURSE_NAME, DOCUMENT_UPLOAD) VALUES ?";
//         dbFile.conn.query(sql, [courses], function(err, result) {
//             if (err) {
//                 throw err;
//             } else {
//                 console.log(result);
//                 console.log("Record Inserted");
//             }
//         });
//         dbFile.conn.end();
//     }
// });


//add course to db (working code)
module.exports.addCourse = function addCourse(course, callback) {
    //calling the function to connect to db

    dbFile.conn.connect(function (err) {
        if (err) {
            // throw err;
            callback(err);
        } else {
            console.log("Connected to MySql DB");
            var sql = `INSERT INTO COURSE(COURSE_ID,COURSE_CODE,COURSE_NAME,DOCUMENT_UPLOAD) VALUES(${course.course_id},${course.course_code},"${course.course_name}",${course.document_upload})`;
            console.log(sql);
            dbFile.conn.query(sql, function (err, result) {
                if (err) {
                    // throw err;
                    callback(err);
                } else {
                    console.log(result);
                    callback(true)
                }
            });
        }
    });
}


//getAllCourses (Working code)
module.exports.getCourse = function getCourse(callback) {

    //calling the function to connect to db
    dbFile.conn.connect(function (err) {
        if (err) {
            callback(err);
        } else {
            var sql = "SELECT COURSE_CODE,COURSE_NAME FROM COURSE";
            dbFile.conn.query(sql, function (err, result) {
                if (err) {
                    callback(err);
                } else {
                    // console.log(result);
                    var course = [];
                    var c = {};
                    for (var i = 0; i < result.length; ++i) {
                        c = {
                            courseId: result[i].COURSE_CODE,
                            courseName: result[i].COURSE_NAME
                        }
                        course[i] = c;
                    }
                    callback(course);
                }
            });
        }
    });
}

// get all course details(working code)
module.exports.getAllCourseDetails = function getAllCourseDetails(callback) {
    //calling the function to connect to db

    dbFile.conn.connect(function (err) {
        if (err) {
            callback(err);
        } else {
            console.log("Connected to MySql DB");
            var sql = "SELECT * FROM COURSE";
            console.log(sql);
            dbFile.conn.query(sql, function (err, result) {
                if (err) {
                    callback(err);
                } else {
                    console.log("Courses fetched");
                    var courses = [];
                    var course = {};
                    for (let i = 0; i < result.length; ++i) {
                        course = {
                            courseId: result[i].COURSE_ID,
                            courseCode: result[i].COURSE_CODE,
                            courseName: result[i].COURSE_NAME,
                            documentUpload: result[i].DOCUMENT_UPLOAD,
                            creationDate: result[i].CREATION_DATE
                        };
                        courses[i] = course;
                        // console.log(courses[i]);
                    }
                    callback(courses);
                }
            });
        }
    });
}


//delete course by id
module.exports.deleteCourseById = function deleteCourseById(courseId, callback) {

     //calling the function to connect to db
    dbFile.conn.connect(function (err) {
        if (err) {
            callback(err);
        } else {
            console.log("Connected to MySql DB");
            var sql1 = `DELETE FROM USERCOURSES WHERE COURSE_ID=${courseId}`;
            dbFile.conn.query(sql1, function (err, result) {
                if (err) {
                    callback(err);
                } else {
                    console.log("UserCourses Table: ", result.affectedRows);
                }
            });
            var sql = `DELETE FROM COURSE WHERE COURSE_ID=${courseId}`;
            console.log(sql);
            dbFile.conn.query(sql, function (err, result) {
                if (err) {
                    callback(err);
                } else {
                    callback(result.affectedRows);
                }
            });
        }
    });
}


//edit title of course
module.exports.updateCourseTitle = function updateCourseTitle(courseId, courseName, callback) {

    //calling the function to connect to db
   dbFile.conn.connect(function (err) {
       if (err) {
           callback(err);
       } else {
           console.log("Connected to MySql DB");
           var sql = `UPDATE COURSE SET COURSE_NAME="${courseName}" WHERE COURSE_ID=${courseId}`;
           console.log(sql);
           dbFile.conn.query(sql, function (err, result) {
               if (err) {
                   callback(err);
               } else {
                   callback(result.affectedRows);
               }
           });
       }
   });
}