var express = require('express');
var app = express();
var fs = require("fs"); //อ่านไฟล์ user.json


var server = app.listen(8081, function (){
    var host = server.address().address
    var port = server.address().port
    console.log("Application Run At http://%s:%s",host,port)
});