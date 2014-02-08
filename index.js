// Modules

var express = require('express'),
    app = express(),
    login = require('./pages/login'),
    post = require('./pages/post'),
    user = require('./pages/user'),
    error = require('./pages/error');

// Config

var port = 6002;

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(express.favicon());

app.all('*', function (req, res, next) {
    console.log('Request for', req.url, 'received');
    next();
});

// Routing

app.get('/', login.index);
app.get('/post/:pid', post.view);
app.get('/:user', user.view);

// Errors

app.use(error.code_500);
app.use(error.code_404);

app.listen(port);
console.log('Server started on port', port);
