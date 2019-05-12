var express = require('express');
var app = express();
var fs = require("fs"); //อ่านไฟล์ user.json

app.get('/getuser', function (req, res){

    fs.readFile(__dirname + "/" + "user.json", "utf-8", function( err, data){
    console.log ( data ); // ข้อมูลของ user ใน user.json ทุกคน
    res.end( data ); 
    });
});

var server = app.listen(8081, function (){
    var host = server.address().address
    var port = server.address().port
    console.log("Application Run At http://%s:%s",host,port)
});