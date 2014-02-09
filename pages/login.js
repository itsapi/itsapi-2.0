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

function postData(req, next) {
    var fullBody = '';
    req.on('data', function(chunk) {
        fullBody += chunk.toString();
    });

    req.on('end', function () {
        var data = querystring.parse(fullBody);
        next(data)
    });
}

function login(req, res, next) {
    console.log('Routing to log in');

    postData(req, function(data) {
        console.log(data)

        if (check(data)) {
            index(req, res, next);
        } else {
            console.log('Error logging in');
            res.render('login', {});
        }

    });
}

function signup(req, res, next) {
    console.log('Routing to sign up')

    postData(req, function (data) {
        console.log(data)

        // Validation...

        res.render('login', {});

    });
}

exports.index = index;
exports.login = login;
exports.signup = signup;