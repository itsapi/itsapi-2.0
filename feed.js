var templates = require('./templates');
var htmlutils = require('./htmlutils');

function result (cb) {
    templates.template(
        {'title': 'Your Feed',
         'heading': 'Your Feed',
         'posts': htmlutils.wrap('Here are some posts...', 'p')
        },
        'feed.html',
        cb
    );
}

exports.result = result;
