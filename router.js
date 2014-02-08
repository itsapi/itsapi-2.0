function route (root, path, cb) {
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
            require('./file').result(root, path, cb);
            break;

        default:
            require('./user').result(path, cb);
    }
    return;
}

exports.route = route;