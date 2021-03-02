//add course

var dbFile = require("../config/db.config");

//fs module performs file operation in local computer
var fs = require("fs");

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


//add course to db
module.exports.addCourse = function addCourse(course) {
    //calling the function to connect to db
    dbFile.conn.connect(function (err) {
        if (err) {
            throw err;
        } else {
            console.log("Connected to MySql DB");
            var sql = `INSERT INTO COURSE(COURSE_ID,COURSE_CODE,COURSE_NAME,DOCUMENT_UPLOAD) VALUES(${course.course_id},${course.course_code},"${course.course_name}",${course.document_upload})`;
            console.log(sql);
            dbFile.conn.query(sql, function (err, result) {
                if (err) {
                    throw err;
                } else {
                    console.log(result);
                }
            });
        }
    });
    console.log("Connection closed");
}


module.exports.getAllCourses = function getAllCourses(callback) {
    
}