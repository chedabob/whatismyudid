
/*
 * GET mobile config
 */
 var fs = require("fs");
exports.file = function(req, res){
    res.set('Content-Type', 'application/x-apple-aspen-config');
    fs.readFile("conf.mobileconfig", 'utf-8', function (error, data) {
        res.send(data );
    });
};

exports.enroll = function(req, res){
    console.log(req.rawBody);
    res.redirect('https://www.whatismyudid.us/enrollment');
};

exports.scep = function(req, res){
    console.log(req.rawBody);
    res.send("erp");
};

exports.enrollment = function(req, res){

    res.set('Content-Type', 'application/x-apple-aspen-config');
    fs.readFile("stage2.mobileconfig", 'utf-8', function (error, data) {
        res.send(data );
    });
    console.log("Enrollment");
};