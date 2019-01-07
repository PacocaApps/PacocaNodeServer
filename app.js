var express = require('express');
var app = express();
var exec = require('child_process').exec;
var webSocketServer = require('websocket').server;
var http = require('http');

app.get('/', function (req, res) {
    res.send('Pacoca Node Server v1.21');
  });
  


 //START BOT
  var botchild = exec('node bot/bot.js');
  botchild.stdout.on('data', function(data) {
      console.log('stdout: ' + data);
  });
  botchild.stderr.on('data', function(data) {
      console.log('stdout: ' + data);
  });
  botchild.on('close', function(code) {
      console.log('closing code: ' + code);
  });
//END BOT


//START CONTROL MASTER NIGGA SERVER


var controlServerchild = exec('node controlServer/server.js');

controlServerchild.stdout.on('data', function(data) {
    console.log('stdout: ' + data);
});
controlServerchild.stderr.on('data', function(data) {
    console.log('stdout: ' + data);
});
controlServerchild.on('close', function(code) {
    console.log('closing code: ' + code);
});



//END CONTROL MASTER NIGGA SERVER


//START ENCRYPTED WEB CHAT

// var chat = exec('node chat/chatserver.js');

// chat.stdout.on('data', function(data) {
//     console.log('stdout: ' + data);
// });
// chat.stderr.on('data', function(data) {
//     console.log('stdout: ' + data);
// });
// chat.on('close', function(code) {
//     console.log('closing code: ' + code);
// });


//END ENCRYPTED WEB CHAT

console.log("APP FUCKING LOADED")













var port = process.env.PORT || 3000;
// app.listen(port, function () {
//     console.log('Umbler listening on port %s', port);
// });










//TRY LOAD SERVER IN APP



var server = http.createServer(function(request, response) {
    // Not important for us. We're writing WebSocket server,
    // not HTTP server
  });


  server.listen(port, function() {
  
  var host = server.address().address;
  
    console.log((new Date()) + " Server is on: "+host+ " and listening on port "
        + webSocketsServerPort);
  });


