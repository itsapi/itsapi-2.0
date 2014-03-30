var mysql = require('mysql');

exports.query = function (req, res, cb, sql) {
    mysql.createConnection({
        user: "user",
        password: "pass",
        database: "db"
    })
    .query(req, res, cb, sql);
};
