
/*
 * GET home page.
 */

exports.index = function(req, res){

    var ua = require('useragent');
	var domain = 'udid.fyi';
    if (!ua.is(req.headers['user-agent']).mobile_safari)
    {
        res.render('index-notios', { title: domain});
    }
    else
    {
        if (req.cookies.newudid)
        {
            res.redirect('/enrollment');
        }
        else
        {
            res.render('index', { title: domain});
        }
    }

};
