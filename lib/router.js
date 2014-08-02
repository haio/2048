'use strict';

var uuid = require('node-uuid');
var db = require('./db').db;

module.exports = function (app, io) {
    app.post('/observe', function(req, res) {
        var alias = req.body.alias || '匿名';
        if ( !req.body.comment )
            return res.send({result:false});
         var message = {
            alias : alias,
            comment : req.body.comment
        }
        io.emit('comment', message);
        return res.send({result:true});
    });

    app.get('/join', function (req, res) {
        var uid = uuid.v4();
        var username = names[count++%names.length];
        db.sadd('2048:users', uid, function () {
            db.set('2048:users:' + uid, username);
        });
        res.redirect('2048.html?uid=' + uid + '&username=' + username);
    });
}