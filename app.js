var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var redis = require('redis');
var db = redis.createClient(6379, 'localhost');
//var db = redis.createClient(8359, '10.16.33.62');
//client.auth('1duvtlet0j:cf090196754d78b7090854a916426092728a1e30');

var routes = require('./routes');

var app = express();
var server = http.Server(app);
var io = require('socket.io')(server);

exports.db = db;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

routes(app);

io.on('connection', require('./io'));

server.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});
