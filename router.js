function route (path, cb) {
    switch (path) {
        case '/':
            if (true) {
                require('./feed').result(cb)
            } else {
                require('./login').result(cb)
            }
            break;

        case '/post':
            require('./post').result(cb);
            break;

        default:
            require('./user').result(cb);
    }
    return;
}

exports.route = route;