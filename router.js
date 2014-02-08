function route (path, cb) {
    switch (path) {
        case '/':
            if (false) {
                require('./feed').result(cb)
            } else {
                require('./login').result(cb)
            }
            break;

        case '/post':
            require('./post').result(cb);
            break;

        default:
            require('./user').result(path, cb);
    }
    return;
}

exports.route = route;