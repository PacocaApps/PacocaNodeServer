
var exec = require('child_process').exec;
var webSocketServer = require('websocket').server;
var http = require('http');

//  START BOT
  var botchild = exec('node bot/bot.js');
  botchild.stdout.on('data', function(data) {
      console.log('stdout: ' + data);
  });
  botchild.stderr.on('data', function(data) {
      console.log('stdout: ' + data);
  });
  botchild.on('close', function(code) {
      console.log('closing BOT code: ' + code);
  });
// END BOT


// START CONTROL MASTER NIGGA SERVER


// var controlServerchild = exec('node controlServer/server.js');

// controlServerchild.stdout.on('data', function(data) {
//     console.log('stdout: ' + data);
// });
// controlServerchild.stderr.on('data', function(data) {
//     console.log('stdout: ' + data);
// });
// controlServerchild.on('close', function(code) {
//     console.log('closing code: ' + code);
// });



// END CONTROL MASTER NIGGA SERVER


// START ENCRYPTED WEB CHAT

var chat = exec('node chat/chatserver.js');

chat.stdout.on('data', function(data) {
    console.log('stdout: ' + data);
});
chat.stderr.on('data', function(data) {
    console.log('stdout: ' + data);
});
chat.on('close', function(code) {
    console.log('closing code: ' + code);
});


// END ENCRYPTED WEB CHAT

console.log("V:1.0")








const server4 = http.createServer();
server4.on('request', (request, response) => {
    response.write('hnpth3vb');
    const { method, url } = request;
});












response.setHeader("Access-Control-Allow-Origin", "*");
res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');