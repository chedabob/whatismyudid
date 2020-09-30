
/*
 * GET home page.
 */

exports.index = function(req, res){

    var ua = require('useragent');
    if (ua.is(req.headers['user-agent']).mobile_safari)
    {
        if (req.cookies.newudid)
        {
            res.redirect('/enrollment');
        }
        else
        {
            res.render('index');
        }
    }
    else
    {
        res.render('index-notios');
    }

};
