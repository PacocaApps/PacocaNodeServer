var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var clients = {}; 

app.get('/', function(req, res){
  res.send('server is running');
});

io.on("connection", function (client) {  
    client.on("join", function(name){
    	console.log("Joined: " + name);
        clients[client.id] = name;
        client.emit("update", "You have connected to the server.");
        client.broadcast.emit("update", name + " has joined the server.")
    });

    client.on("send", function(msg){
        console.log("Message: " + msg);
       var smsg = msg.search(/server/i)        
 
       if(smsg === 0){
          var command = msg.slice(7)
          var findpar = command.search(".start")
          var findpar2 = command.search(".stop")
        var input = command.slice(findpar+5,findpar2)
          if(command === "alert"){
              console.log("SERVER FORCED UPDATE COMMAND BY STREAM LINE")
          client.broadcast.emit("update", input)     
          
          }


       }



        client.broadcast.emit("chat", clients[client.id], msg);
    });

    client.on("disconnect", function(){
    	console.log("Disconnect");
        io.emit("update", clients[client.id] + " has left the server.");
        delete clients[client.id];
    });
});


http.listen(21094, function(){
  console.log('listening on port 21094');
});