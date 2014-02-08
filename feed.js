var templates = require('./templates');
var htmlutils = require('./htmlutils');

function result (req, res, cb) {
    console.log('Routing to feed')
    templates.template(
        req, res, cb,
        {'title': 'Your Feed',
         'heading': 'Your Feed',
         'posts': htmlutils.wrap('Here are some posts...', 'p')
        },
        'feed.html'
    );
}

exports.result = result;
