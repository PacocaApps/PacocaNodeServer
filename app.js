var express = require('express');
var app = express();
const { execFile } = require('child_process');


app.get('/', function (req, res) {
    res.send('Pacoca Node Server v1.0');
  });
  



const child = execFile('bot/bot.js')//, ['--version'], (error, stdout, stderr) => {
//   if (error) {
//     throw error;
//   }
//   console.log(stdout);
// });



console.log("APP FUCKING LOADED")











   
var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('Umbler listening on port %s', port);
});





