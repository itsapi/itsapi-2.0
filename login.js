var templates = require('./templates');
var htmlutils = require('./htmlutils');

function result (cb) {
    templates.template(
        {},
        'login.html',
        cb
    );
}

exports.result = result;
