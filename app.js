var express = require('express');
var app = express();
const { execFile } = require('child_process');




const child = execFile('bot/bot.js', ['--version'], (error, stdout, stderr) => {
  if (error) {
    throw error;
  }
  console.log(stdout);
});



console.log("APP FUCKING LOADED")



app.get('/', function (req, res) {
    res.send('Pacoca Node Server v1.0');
  });
  









   
var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('Umbler listening on port %s', port);
});





