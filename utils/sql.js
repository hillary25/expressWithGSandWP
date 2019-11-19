const config = require("../config");
const sql = require('mysql');

// Like PDO connection in Pan's class
const connect = sql.createConnection({
    host: config.host,
    port: config.port,
    user: config.uname,
    password: config.pword,
    database: config.dbase
})

module.exports = connect;