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

app.use(express.favicon());

app.get('*', function (req, res, next) {
    console.log('Request for', req.url, 'received');
    next();
})
.get('/', function (req, res) {
    if (loggedIn) {
        require('./feed').result(req, res, cb);
    } else {
        require('./login').result(req, res, cb);
    }
})
.get('/post/:pid', function (req, res) {
    require('./post').result(req, res, cb);
})
.get('/(css|js|fonts)/:file', function (req, res) {
    require('./file').result(req, res, cb);
})
.get('/:user', function (req, res) {
    require('./user').result(req, res, cb);
});

app.listen(port);
console.log('Server started on port', port);
