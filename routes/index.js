
/*
 * GET home page.
 */

exports.index = function(req, res){

    var r = require('ua-parser').parse(req.headers['user-agent']);

    if (r.os.family !== 'iOS')
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