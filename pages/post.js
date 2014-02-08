exports.view = function (req, res) {
    pid = req.params.pid;
    console.log('Routing to post:', pid);
    res.render('post', {
        title: 'Post: ' + pid
    });
}
