var templates = require('../templates');
var htmlutils = require('../htmlutils');

function result (cb) {
	templates.template(
		{'title': '404',
		 'heading': 'Error: 404',
		 'content': htmlutils.wrap('Unable to locate the requested page', 'p')
		},
		'default.html', 
		cb
	);
}

exports.result = result;
