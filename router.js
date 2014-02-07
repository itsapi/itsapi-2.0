function route (path, cb) {
    switch (path) {
        case '/':
            require('./pages/index').result(cb);
            break;

        case '/users':
            require('./pages/users').result(cb);
            break;

        default:
            require('./pages/404').result(cb);
    }
    return;
}

exports.route = route;