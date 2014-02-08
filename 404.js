var templates = require('./templates');
var htmlutils = require('./htmlutils');

function result (req, res, cb) {
	templates.template(
        req, res, cb,
		{'title': '404',
		 'content': htmlutils.wrap('Unable to locate the requested page', 'p')
		},
		'default.html'
	);
}

exports.result = result;
