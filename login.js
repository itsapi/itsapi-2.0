var templates = require('./templates');
var htmlutils = require('./htmlutils');

function check () {
    return true;
}

function result (cb) {
    templates.template(
        {},
        'login.html',
        cb
    );
}

exports.result = result;
exports.check = check;
