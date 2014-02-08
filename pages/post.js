exports.view = function (req, res, next) {
    pid = req.params.pid;
    console.log('Routing to post:', pid);
    res.render('post', {
        pid: pid,
        posts: 'A post...'
    });
}
