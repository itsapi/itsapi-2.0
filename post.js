var templates = require('./templates');
var htmlutils = require('./htmlutils');

function result (req, res, cb) {
    console.log('Routing to post:', req.params.pid);

    templates.template(
        req, res, cb,
        {'post_title': 'A post',
         'post': htmlutils.wrap('Here is a post...', 'p')
        },
        'post.html'
    );
}

exports.result = result;
