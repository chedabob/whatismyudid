
/*
 * GET mobile config
 */

exports.enrollment = function(req, res){
    res.set('Content-Type', 'text/html');
    var url = require('url');
    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;

    var tudid = query.udid;
    if (tudid) // If it's in the query, store it and redirect (so the user doesn't see the UDID being sent in the URL)
    {
        res.cookie('udid',query.udid, { maxAge: 900000});
        res.redirect('/enrollment');
    }
    else
    {
        res.render('udid', { udid: req.cookies.udid});
    }
}
exports.enroll = function(req, res){

    var match = req.rawBody.match(/[a-f\d]{40}/);

    res.redirect(301,'/enrollment?udid=' + match[0]);
};