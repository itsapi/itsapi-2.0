var templates = require('./templates');
var htmlutils = require('./htmlutils');

function result (cb) {
    console.log('Routing to a post')

    templates.template(
        {'post_title': 'A post',
         'post': htmlutils.wrap('Here is a post...', 'p')
        },
        'post.html',
        cb
    );
}

exports.result = result;
