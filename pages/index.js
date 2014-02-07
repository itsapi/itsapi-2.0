var templates = require('../templates');
var htmlutils = require('../htmlutils');

function result (cb) {
	templates.template(
		{'title': 'Home',
		 'heading': 'Home',
		 'content': htmlutils.wrap('Welcome to my little test', 'p')
		},
		'default.html', 
		cb
	);
}

exports.result = result;
