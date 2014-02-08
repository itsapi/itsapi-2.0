exports.view = function (req, res, next) {
    pid = req.params.pid;
    console.log('Routing to post:', pid);
    res.render('post', {
        post_id: pid,
        posts: 'A post...'
    });
}
