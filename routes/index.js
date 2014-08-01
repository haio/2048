var db = require('../db').db;
var uuid = require('node-uuid');
var game = require('./games');
var observer = require('./observer');


module.exports = function(app) {
    
    app.get('/join', function (req, res) {
        var uid = uuid.v4();
        db.sadd('2048:users', uid);
        res.redirect('2048.html?uid=' + uid);
    });
    game(app);
    observer(app);
};