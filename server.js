var http = require('http');
var url = require('url');
var port = 6002;

function start (route) {
    http.createServer(function (req, res) {

        var path = url.parse(req.url).pathname;
        path = path.replace(/^\/+/, '/'); // Replace duplicate slashes
        if (path != '/') path = path.replace(/\/+$/, ''); // Remove trailing slash

        if (path != '/favicon.ico') {
            console.log('Request for ' + path + ' received');

            route(path, function (out, content_type) {
                if (content_type == undefined) content_type = 'text/html'

                res.writeHead(200, {'Content-Type': content_type});
                res.end(out);
            });
        }
    }).listen(port);
    console.log('Server started on port', port);
}

exports.start = start;
