var templates = require('./templates');
var htmlutils = require('./htmlutils');

function result (path, cb) {
    username = path.slice(1) // TODO: Needs doing properly, temporary hack.

    templates.template(
        {'username': username,
         'posts': htmlutils.wrap('Here are some posts...', 'p')
        },
        'user.html',
        cb
    );
}

exports.result = result;
