var express = require('express');
var app = express();
var childProcess = require('child_process');









app.get('/', function (req, res) {
    res.send('Pacoca Node Server v1.0');
  });
  



  //START BOT PROCESS

function runScript(scriptPath, callback) {

    // keep track of whether callback has been invoked to prevent multiple invocations
    var invoked = false;

    var process = childProcess.fork(scriptPath);

    // listen for errors as they may prevent the exit event from firing
    process.on('error', function (err) {
        if (invoked) return;
        invoked = true;
        callback(err);
    });

    // execute the callback once the process has finished running
    process.on('exit', function (code) {
        if (invoked) return;
        invoked = true;
        var err = code === 0 ? null : new Error('exit code ' + code);
        callback(err);
    });

}

// Now we can run a script and invoke a callback when complete, e.g.
runScript('bot/bot.js', function (err) {
    if (err) throw err;
    console.log('finished running some-script.js');
});

//FINISH CALLING THE BOT








   
var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('Umbler listening on port %s', port);
});




function DAM(){
console.log("wowowowo")
}

