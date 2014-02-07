mysql = require('../mysql');
templates = require('../templates');

function result (cb) {
    mysql.query('SELECT * FROM users', function (err, rows, fields) {
        if (err) {
            cb(err.toString());
        } else {
			html = JSON.stringify(rows);
            templates.template(html, 'default.html', cb);
        }
    });
}

exports.result = result;
