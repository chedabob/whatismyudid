
/*
 * GET mobile config
 */

exports.enrollment = function(req, res){
    res.set('Content-Type', 'text/html');
    var url = require('url');
    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;

    res.render('udid', { udid: query.udid });

}
exports.enroll = function(req, res){

    var match = req.rawBody.match(/[a-f\d]{40}/);

    res.redirect(301,'/enrollment?udid=' + match[0]);
};