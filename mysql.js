var mysql = require('mysql');

function query (sql, cb) {
    mysql.createConnection({ 
        user: "{itsapi-2.0_mysqlUser}",
        password: "{itsapi-2.0_mysqlPass}",
        database: "{itsapi-2.0_db}"
    })
    .query(sql, cb);
};

exports.query = query;