exports.code_404  = function (err, req, res) {
    console.error(err.stack);
    res.render('error', {
        error: '404',
        description: 'Page not found'
    });
}

exports.code_500 = function (err, req, res) {
    console.error(err.stack);
    res.render('error', {
        error: '500',
        description: 'An error occured'
    });
};
