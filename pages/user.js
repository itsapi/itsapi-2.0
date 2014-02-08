exports.view = function (req, res) {
    username = req.params.user;

    console.log('Routing to user:', username);

    res.render('user', {});
}
