
/*
 * GET home page.
 */

exports.index = function(req, res){
    //res.cookie('arble', 'ehehreh', { maxAge: 900000 });

    if (req.cookies.udid)
    {
        res.redirect('/enrollment');
    }
    else
    {
        res.render('index', { title: 'WhatIsMyUDID'});
    }

};