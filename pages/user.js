exports.view = function (req, res, next) {
    username = req.params.user;
    console.log('Routing to user:', username);
    res.render('user', {
        username: username,
        posts: 'Some posts...'
    });
}
