exports.view = function (req, res) {
    console.log('Routing to post:', req.params.pid);
    res.render('post', {});
}
