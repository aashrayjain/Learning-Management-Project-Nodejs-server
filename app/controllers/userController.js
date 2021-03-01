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
//         var users = [
//             [1, "Aashray Jain", "2021-03-01", 4],
//             [2, "Rinkesh", "2020-02-10", 5],
//             [3, "Rachana", "2021-03-15", 3],
//             [4, "Abhay", "2021-03-26", 1]
//         ];
//         var sql = "INSERT INTO USER(USER_ID, USERNAME, CREATION_DATE, COURSE_ID) VALUES ?";
//         dbFile.conn.query(sql, [users], function(err, result) {
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

