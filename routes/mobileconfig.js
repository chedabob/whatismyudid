
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
        res.cookie('newudid',query.udid, { maxAge: 7 * 24 * 60 * 60 * 1000});     // Store for 1 week
        res.redirect('/enrollment');
    }
    else
    {
	var cookie = req.cookies.newudid;
        if (cookie){
            res.render('udid', { udid: cookie, title: 'udid.fyi'});
	}
        else {   // No cookie, redirect back to home page
            res.redirect('/');
	}
    }
}
exports.enroll = function(req, res){

    var match = req.rawBody.match(/(0000[\d]{4}-00[A-Fa-f\d]+)|([a-fA-F\d]{40})/);

    res.redirect(301,'/enrollment?udid=' + match[0]);
};
