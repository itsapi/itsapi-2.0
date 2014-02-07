var fs = require("fs");

function template (data, template, cb) {
	fs.readFile('./templates/'+template, 'utf-8', function (err, html) {
		cb(
			html.replace(/{([^}]+)}/g, function (match) {

				match = match.substring(1, match.length-1);

				if (data[match] != undefined) {
					return data[match];
				} else {
					return '{'+match+'}';
				}
			})
		);
	});
}

exports.template = template;
