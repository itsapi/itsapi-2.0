exports.load = function (req, res, next) {
    console.log('Routing to feed')
    res.render('feed', {});
}
