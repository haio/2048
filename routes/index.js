var db = require('../db').client;
var uuid = require('node-uuid');

module.exports = function(app) {
    
    app.get('/join', function (req, res) {
        var uid = uuid.v4();
        db.sadd('2048:users', uid);
        res.redirect('2048.html?uid=' + uuid.v4());
    });
};