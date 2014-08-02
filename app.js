var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var server = http.Server(app);
var io = require('socket.io')(server);
var router = require('./lib/router');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', require('./lib/io'));
router(app, io);

server.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});