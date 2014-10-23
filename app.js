var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var router = express.Router();

router.get('/', function (req, res) {
  res.status(200).send('howdy');
});

io.on('connection', function (socket) {
  console.log('sock connected\n');
});

app.use(router);

http.listen(3000, function(){
  console.log('listening on *:3000');
});

