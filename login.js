var templates = require('./templates');
var htmlutils = require('./htmlutils');

function check () {
    return false;
}

function result (req, res, cb) {
    templates.template(
        req, res, cb,
        {},
        'login.html'
    );
}

exports.result = result;
exports.check = check;
