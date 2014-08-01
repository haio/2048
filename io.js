'use strict';

var redis = require('redis');
var client = redis.createClient(8359, '10.16.33.62');
client.auth('1duvtlet0j:cf090196754d78b7090854a916426092728a1e30');

module.exports = function (socket) {
    console.log('New client connected!');
    socket.on('move', move);
}

function move (action) {
    client.lpush('sohu', JSON.stringify(action.gameState));
}