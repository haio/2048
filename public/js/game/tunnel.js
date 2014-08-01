function Tunnel () {
    this.setup();
}

Tunnel.prototype.setup = function () {
    var self = this;
    var uid = window.location.href.match(/.+uid=(.+)/)[1];
    var socket = this.socket  = io();
    this.uid = uid;
    socket.emit('login', uid);
    socket.on('connect', function () {
        console.log('Hey, you are connecting now!');
    });
    socket.on('start game', function () {})
}

Tunnel.prototype.move = function (action) {
    action.uid = this.uid;
    this.socket.emit('move', action);
    console.log('Client moveing', action);
}