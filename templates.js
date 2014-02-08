var fs = require("fs");

function template (req, res, cb, data, template) {
	fs.readFile('./templates/'+template, 'utf-8', function (err, html) {
		cb(
			req, res,
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
