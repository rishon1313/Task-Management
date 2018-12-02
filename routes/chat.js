var express = require('express');
var router = express.Router();
var http = require('http').Server(router);
var bodyParser = require('body-parser');
var io = require('socket.io')(http);
var Client = require('node-rest-client').Client;
var querystring = require('querystring');
var beep = require('beepbeep');
var port = process.env.PORT || 3000;
var profanity = require('profanity-censor');

messageList=[];
router.use( bodyParser.json() );       // to support JSON-encoded bodies
router.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));
router.get('/chat', function(req, res){
    new Client().get("http:// 10.182.109.161:3000", function (data, response) {
        console.log(data+"!!!");
      //  console.log(typeof data);
     //   console.log(response+"@@@@");
    //    console.log(typeof response);
   //     console.log(JSON.stringify(data));
  //      console.log(querystring.stringify(response) + "$$$");

    });
    res.render('chat');
});

io.on('connection', function(socket){
    var mess=".";
    socket.on('chat message', function(msg){
        console.log("Message sent");
        beep(1);
        mess=msg;
        var clientIP = socket.request.connection.remoteAddress;
        console.log(clientIP);
        var uniqueId = clientIP.substring(18,20);
        //create Map Variable with IP/Username, display based on username
        console.log(clientIP + " " + mess);
        messageList.push(mess);
        io.emit('chat message', "Anonymous "+" : " +" " +profanity.filter(mess));

    });

});
/*

http.listen(port, function(){
    console.log('listening on *:' + port);
});*/
module.exports = router;