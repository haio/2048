function Tunnel () {
    this.setup();
}

Tunnel.prototype.setup = function () {
    var self = this;
    var socket = this.socket  = io();
    socket.on('connect', function () {
        console.log('Hey, you are connecting now!');
    });
    socket.on('start game', function () {})
}

Tunnel.prototype.move = function (actoin) {
    console.log('Client moveing', actoin);
    this.socket.emit('move', actoin);
}