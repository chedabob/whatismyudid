
/*
 * GET mobile config
 */
 var fs = require("fs");


exports.scep = function(req, res){
    var url = require('url');
    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;

    if (query.operation === "GetCACert")
    {
        fs.readFile("keychain.crt", 'utf-8', function (error, data) {
            res.send(data );
        });
    }
};

exports.enroll = function(req, res){

    res.set('Content-Type', 'application/x-apple-aspen-config');
    fs.readFile("stage2.mobileconfig", 'utf-8', function (error, data) {
        res.send(data );
    });
};