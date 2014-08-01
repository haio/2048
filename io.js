'use strict';

var redis = require('redis');
var client = require('./db').client;

module.exports = function (socket) {
    console.log('New client connected!');
    socket.on('move', move);
}

function move (action) {
    client.lpush('sohu', JSON.stringify(action.gameState));
}

function login (uid) {

}