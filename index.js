// var server = require('./server');
// var router = require('./router');

var express = require('express');
var http = require('http');
var app = express();
var port = 6002;

var loggedIn = require('./login').check();

function cb (req, res, out, content_type) {
    if (content_type == undefined) content_type = 'text/html'

    res.writeHead(200, {'Content-Type': content_type});
    res.end(out);
}

app.get('*', function (req, res, next) {
    console.log('Request for ' + req.url + ' received');
    next();
})
app.get('/', function (req, res) {
    if (loggedIn) {
        require('./feed').result(req, res, cb);
    } else {
        require('./login').result(req, res, cb);
    }
});
app.get('/post', function (req, res) {
    require('./post').result(req, res, cb);
});
app.get('/css', function (req, res) {
    require('./file').result(req, res, cb, req.url);
});
app.get('/js', function (req, res) {
    require('./file').result(req, res, cb, req.url);
});
app.get('/fonts', function (req, res) {
    require('./file').result(req, res, cb, req.url);
});
app.get('*', function (req, res) {
    require('./user').result(req, res, cb, req.url);
});

app.listen(port)
console.log('Server started on port', port);
