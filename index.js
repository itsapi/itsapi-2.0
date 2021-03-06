// Modules

var express = require('express'),
    app = express(),
    login = require('./pages/login'),
    post = require('./pages/post'),
    user = require('./pages/user'),
    error = require('./pages/error');

var everyauth = require('everyauth')
// Config

var port = 6002;

app.set('view engine', 'jade')
   .set('views', __dirname + '/views');
app.locals.pretty = true;

app.use(express.static(__dirname + '/public'))
   .use(express.favicon())
   .use(express.json())
   .use(express.urlencoded())
   .use(express.cookieParser())
   .use(express.session({secret: 'whodunnit'}))
   .use(everyauth.middleware())

app.all('*', function (req, res, next) {
    console.log('Request for', req.url, 'received');
    next();
});

// Routing

app.get('/post/:pid', post.view)
   .get('/:user', user.view);

// Errors

app.use(error.code_500)
   .use(error.code_404);

app.listen(port);
console.log('Server started on port', port);
