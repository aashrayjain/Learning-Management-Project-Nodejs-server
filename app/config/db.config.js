// mysql module doesn't support here because of priviliges. Used mysql2 instead.
var mysql = require("mysql2"); // mysql2 is an api for connecting with db without downgrading your mysql db
var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "7389330515"
});

conn.connect(function(err){
    if (err) {
        throw err;
    } else {
        console.log("Connected to MySql");
    }
});