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

//getAllUser (working code)
module.exports.getUser = function getUser(callback) {

    //calling the function to connect to db
    dbFile.conn.connect(function (err) {
        if (err) {
            callback(err);
        } else {
            var sql = "SELECT USER_ID,USERNAME FROM USER ";
            dbFile.conn.query(sql, function (err, result) {
                if (err) {
                    callback(err);
                } else {
                    // console.log(result);
                    var user = [];
                    var u = {};
                    for (var i = 0; i < result.length; ++i) {
                        u = {
                            userId: result[i].USER_ID,
                            userName: result[i].USERNAME
                        }
                        user[i] = u;
                    }
                    callback(user);
                }
            });
        }
    });
}


//update user course in user table   (working code)
module.exports.updateUserCourse = function updateUserCourse(userCourse, user_id, course_code, callback) {
    //calling the function to connect to db
    dbFile.conn.connect(function (err) {
        if (err) {
            callback(err);
        } else {
            console.log("Connected to MySql DB");
            // var sql = `UPDATE USER SET COURSE_ID=${course_id} WHERE USER_ID=${user_id}`;
            var sql = `SELECT COURSE_ID FROM USERCOURSES WHERE USER_ID=${user_id} AND COURSE_CODE=${course_code}`;
            // console.log(sql);
            dbFile.conn.query(sql, function (err, result) {
                if (err) {
                    callback(err);
                } else {
                    //course already assigned
                    if (result.length == 1) {
                        callback({ message: "Course already assigned." });
                    } else {
                        sql = `SELECT COURSE_ID FROM COURSE WHERE COURSE_CODE=${course_code}`;
                        sql1 = `INSERT INTO USERCOURSES(USER_ID,USERNAME,COURSE_ID,COURSE_CODE) VALUES(${user_id},"${userCourse.username}",(${sql}),${course_code})`;
                        console.log(sql1);
                        dbFile.conn.query(sql1, function (err, rows) {
                            if (err) {
                                callback(err);
                            } else {
                                callback({ message: "Course assigned successfully." });
                            }
                        });
                    }
                }
            });
        }
    });
}


// get all user details(working code)
module.exports.getAllUserDetails = function getAllUserDetails(callback) {
    //calling the function to connect to db

    dbFile.conn.connect(function (err) {
        if (err) {
            callback(err);
        } else {
            console.log("Connected to MySql DB");
            var sql = "SELECT * FROM USER";
            console.log(sql);
            dbFile.conn.query(sql, function (err, result) {
                if (err) {
                    callback(err);
                } else {
                    console.log("Users fetched");
                    var users = [];
                    var user = {};
                    for (let i = 0; i < result.length; ++i) {
                        user = {
                            userId: result[i].USER_ID,
                            userName: result[i].USERNAME,
                            creationDate: result[i].CREATION_DATE,
                            userType: result[i].USER_TYPE
                        };
                        users[i] = user;
                    }
                    callback(users);
                }
            });
        }
    });
}

//add user to db (working code)
module.exports.addNewUser = function addNewUser(user, callback) {
    //calling the function to connect to db

    dbFile.conn.connect(function (err) {
        if (err) {
            callback(err);
        } else {
            console.log("Connected to MySql DB");
            var sql = `INSERT INTO USER(USER_ID,USERNAME,CREATION_DATE,PASSWORD,USER_TYPE) VALUES(${user.userId},"${user.userName}","${user.creationDate}","${user.password}","${user.userType}")`;
            console.log(sql);
            dbFile.conn.query(sql, function (err, result) {
                if (err) {
                    callback(err);
                } else {
                    console.log(result);
                    callback(true)
                }
            });
        }
    });
}


//delete user by id
module.exports.deleteUserById = function deleteUserById(userId, callback) {

    //calling the function to connect to db
    dbFile.conn.connect(function (err) {
        if (err) {
            callback(err);
        } else {
            console.log("Connected to MySql DB");
            var sql1 = `DELETE FROM USERCOURSES WHERE USER_ID=${userId}`;
            dbFile.conn.query(sql1, function (err, result) {
                if (err) {
                    callback(err);
                } else {
                    console.log("UserCourses Table: ", result.affectedRows);
                }
            });
            var sql = `DELETE FROM USER WHERE USER_ID=${userId}`;
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


module.exports.getUserById = function getUserById(userId, callback) {

    //calling the function to connect to db
    dbFile.conn.connect(function (err) {
        if (err) {
            callback(err);
        } else {
            var sql = `SELECT USER_ID,USERNAME FROM USER WHERE USER_ID=${userId}`;
            dbFile.conn.query(sql, function (err, result) {
                if (err) {
                    callback(err);
                } else {
                    // console.log(result);
                    var user = [];
                    var u = {};
                    for (var i = 0; i < result.length; ++i) {
                        u = {
                            userId: result[i].USER_ID,
                            userName: result[i].USERNAME
                        }
                        user[i] = u;
                    }
                    callback(user);
                }
            });
        }
    });
}

//edit user table
module.exports.updateUser = function updateUser(user, callback) {

    //calling the function to connect to db
    dbFile.conn.connect(function (err) {
        if (err) {
            callback(err);
        } else {
            console.log("Connected to MySql DB");
            var sql1 = `UPDATE USERCOURSES SET USERNAME="${user.userName}" WHERE USER_ID=${user.userId}`;
            console.log(sql1)
            dbFile.conn.query(sql1, function (err, res) {
                if (err) {
                    callback(err);
                } else {
                    console.log("Row affected", res.affectedRows);
                }
            });
            var sql = `UPDATE USER SET USERNAME="${user.userName}",CREATION_DATE="${user.creationDate}",PASSWORD="${user.password}",USER_TYPE="${user.userType}" WHERE USER_ID=${user.userId}`;
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