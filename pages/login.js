function check () {
    return false;
}

exports.index = function (req, res) {
    if (check()) {
        require('./feed').load(req, res);
    } else {
        res.render('login', {});
    }
}