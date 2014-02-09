var util = require('util'),
    querystring = require('querystring');

function check (data) {
    return false;
}

function index(req, res, next) {
    console.log('Routing to index');

    if (check()) {
        require('./feed').load(req, res);
    } else {
        res.render('login', {});
    }
}

function login(req, res, next) {
    console.log('Routing to log in');

    var fullBody = '';
    req.on('data', function(chunk) {
        fullBody += chunk.toString();
    });

    req.on('end', function() {

        var data = querystring.parse(fullBody);
        console.log(data)

        if (check(data)) {
            index(req, res, next);
        } else {
            console.log('Error logging in');
            res.render('login', {});
        }
    });
}

exports.index = index;
exports.login = login;