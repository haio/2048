'use strict';

var redis = require('redis');
var client = require('./db').client;
var db = require('./db').db;

module.exports = function (socket) {
    console.log('New client connected!');
    socket.on('move', move);
    socket.on('login', login);

    function move (action) {
        if (!socket.uid) return;
        action.uid = socket.uid;
        client.lpush('sohu', JSON.stringify(action));
    }

    function login (uid) {
        db.sismember('2048:users', uid, function (err, exsits) {
            if (err || !exsits) return socket.disconnect();
            socket.uid = uid;
        });
    }
}