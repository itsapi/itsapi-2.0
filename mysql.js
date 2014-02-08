var mysql = require('mysql');

exports.query = function (req, res, cb, sql) {
    mysql.createConnection({ 
        user: "{itsapi-2.0_mysqlUser}",
        password: "{itsapi-2.0_mysqlPass}",
        database: "{itsapi-2.0_db}"
    })
    .query(req, res, cb, sql);
};
