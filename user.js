var templates = require('./templates');
var htmlutils = require('./htmlutils');

function result (req, res, cb, path) {
    username = path.slice(1) // TODO: Needs doing properly, temporary hack.

    console.log('Routing to user: ' + username)

    templates.template(
        req, res, cb,
        {'username': username,
         'posts': htmlutils.wrap('Here are some posts...', 'p')
        },
        'user.html'
    );
}

exports.result = result;
