// mysql module doesn't support here because of priviliges. Used mysql2 instead.
// mysql2 is an api for connecting with db without downgrading your mysql db


var mysql = require("mysql2");


module.exports.conn = mysql.createConnection({  // conn is variable
    host: "localhost",
    user: "root",
    password: "1234", // Change as per your mysql db
    database: "learning_management_db"
});