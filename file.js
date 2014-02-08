var fs = require('fs')
var file_path = require('path')

function result (path, cb) {
    path = '.' + path
    fs.readFile(path, function(err, file) {
        if(err) {
            require('./404.js').result(cb)
        } else {
            content_type = file_path.extname(path).substring(1);
            if (content_type == 'js') content_type = 'javascript';

            content_type = 'text/' + content_type
            console.log('Routing to: ' + path + ' - ' + content_type)
            cb(file, content_type);
        }
    });
}

exports.result = result
