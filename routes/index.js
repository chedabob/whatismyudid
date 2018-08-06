
/*
 * GET home page.
 */

exports.index = function(req, res){

    var ua = require('useragent')
    if (ua.is(req.headers['user-agent']).mobile_safari)
    {
        res.render('index-notios', { title: 'WhatIsMyUDID.us'});
    }
    else
    {
        if (req.cookies.udid)
        {
            res.redirect('/enrollment');
        }
        else
        {
            res.render('index', { title: 'WhatIsMyUDID.us'});
        }
    }

};
