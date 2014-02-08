var mysql = require('mysql');

function query (req, res, cb, sql) {
    mysql.createConnection({ 
        user: "{itsapi-2.0_mysqlUser}",
        password: "{itsapi-2.0_mysqlPass}",
        database: "{itsapi-2.0_db}"
    })
    .query(req, res, cb, sql);
};

exports.query = query;
