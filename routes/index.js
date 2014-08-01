var db = require('../db').db;
var uuid = require('node-uuid');
var game = require('./games');
var observer = require('./observer');
var names = [ '小苹果🍎', '路人甲', '路飞', '钢铁侠', '绿巨人', '蛇精猫', '小狐', '牛郎', '织女', '方便面', '必胜客', '马拉松'];
var count = 0;

module.exports = function(app) {
    
    app.get('/join', function (req, res) {
        var uid = uuid.v4();
        db.sadd('2048:users', uid, function () {
            db.set('2048:users:' + uid, names[count++%names.length]);
        });
        res.redirect('2048.html?uid=' + uid);
    });
    game(app);
    observer(app);
};