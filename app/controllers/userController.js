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

//getAllUser
module.exports.getUser = function getUser(callback) {

    //calling the function to connect to db
    dbFile.conn.connect(function(err) {
        if (err) {
            callback(err);
        } else {
            var sql = "SELECT USER_ID,USERNAME FROM USER";
            dbFile.conn.query(sql, function (err, result) {
                if (err) {
                    callback(err);
                } else {
                    // console.log(result);
                    var user = [];
                    var u = {};
                    for (var i = 0; i < result.length; ++i) {
                        u = {
                            userId : result[i].USER_ID,
                            userName : result[i].USERNAME
                        }
                        user[i] = u;
                    }
                    callback(user);
                }
            });
        }
    });
}


//update user course in user table
module.exports.updateUserCourse = function updateUserCourse(user_id, course_id) {
    //calling the function to connect to db
    dbFile.conn.connect(function(err) {
        if (err) {
            throw err;
        } else {
            console.log("Connected to MySql DB");
            var sql = `UPDATE USER SET COURSE_ID=${course_id} WHERE USER_ID=${user_id}`;
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
}
