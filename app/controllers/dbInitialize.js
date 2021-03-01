// creating a database named Learning Management DB

var dbFile = require("../config/db.config");

// Db created for the first time only

// dbFile.conn.connect(function(err) {
//     if (err) {
//         throw err;
//     } else {
//         console.log("Connected to MySql");
//         dbFile.conn.query("CREATE DATABASE LEARNING_MANAGEMENT_DB", function(err, result) {
//             if (err) {
//                 throw err;
//             } else {
//                 console.log(result);
//                 console.log("Database created.");
//             }
//         });
//          dbFile.conn.end();
//     }
// });

//Table Created

// dbFile.conn.connect(function(err) {
//     if (err) {
//         throw err;
//     } else {
//         console.log("Connected to MySql");
//         // var sql = "CREATE TABLE COURSE(COURSE_ID INT NOT NULL, COURSE_CODE INT NOT NULL,COURSE_NAME VARCHAR(255) NOT NULL, DOCUMENT_UPLOAD BLOB, CONSTRAINT PK_COURSE PRIMARY KEY (COURSE_ID))";
//         var sql = "CREATE TABLE USER(USER_ID INT NOT NULL, USERNAME VARCHAR(255) NOT NULL, CREATION_DATE DATE, COURSE_ID INT, PRIMARY KEY (USER_ID), CONSTRAINT FK_CourseUser FOREIGN KEY (COURSE_ID) REFERENCES COURSE(COURSE_ID))";
//         dbFile.conn.query(sql, function(err, result) {
//             if (err) {
//                 throw err;
//             } else {
//                 console.log(result);
//                 console.log("Table created.");
//             }
//         });
//          dbFile.conn.end();
//     }
// });


