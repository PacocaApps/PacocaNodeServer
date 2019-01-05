var express = require('express');
var app = express();
var exec = require('child_process').exec;


app.get('/', function (req, res) {
    res.send('Pacoca Node Server v1.0');
  });
  


 
  var child = exec('node bot/bot.js');
  child.stdout.on('data', function(data) {
      console.log('stdout: ' + data);
  });
  child.stderr.on('data', function(data) {
      console.log('stdout: ' + data);
  });
  child.on('close', function(code) {
      console.log('closing code: ' + code);
  });


console.log("APP FUCKING LOADED")











   
var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('Umbler listening on port %s', port);
});





