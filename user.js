var templates = require('./templates');
var htmlutils = require('./htmlutils');

function result (cb) {
    templates.template(
        {'username': 'Username',
         'posts': htmlutils.wrap('Here are some posts...', 'p')
        },
        'user.html',
        cb
    );
}

exports.result = result;
