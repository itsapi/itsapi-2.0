var templates = require('./templates');
var htmlutils = require('./htmlutils');

function result (cb) {
    templates.template(
        {'post_title': 'A post',
         'post': htmlutils.wrap('Here is a post...', 'p')
        },
        'post.html',
        cb
    );
}

exports.result = result;
