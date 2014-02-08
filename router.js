function route (path, cb) {
    var loggedIn = require('./login').check();
    switch (path.split('/')[1]) {
        case '':
            if (false) {
                require('./feed').result(cb);
            } else {
                require('./login').result(cb);
            }
            break;

        case 'post':
            require('./post').result(cb);
            break;

        case 'css':
        case 'js':
            require('./file').result(path, cb);
            break;

        default:
            require('./user').result(path, cb);
    }
    return;
}

exports.route = route;
