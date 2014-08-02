var db = require('../db').db;
var uuid = require('node-uuid');
var game = require('./games');
var observer = require('./observer');
var names = [ '小苹果🍎', '路人甲', '天青色', '等烟雨', '路飞', '钢铁侠', '绿巨人', '蛇精猫', '小狐', '牛郎', '织女', '方便面', '必胜客', '马拉松'];
var count = 0;

module.exports = function(app) {
    
    app.get('/join', function (req, res) {
        var uid = uuid.v4();
        var username = names[count++%names.length];
        db.sadd('2048:users', uid, function () {
            db.set('2048:users:' + uid, username);
        });
        res.redirect('2048.html?uid=' + uid + '&username=' + username);
    });
    game(app);
    observer(app);
};