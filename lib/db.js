var redis = require('redis');
var db = redis.createClient(6379, 'localhost');
exports.db = db;

exports.addOnline = function(req, res, next) {
    var ua = req.headers['user-agent'];
    db.zadd('online', Date.now(), ua, next);
};

exports.scoreOnline = function(req, res, next) {
    var min = 60 * 1000;
    var ago = Date.now() - min;
    db.zrevrangebyscore('online', '+inf', ago, function(err, users){
        if (err) return next(err);
        req.online = users;
        next();
    });
}; 

exports.storePlayer = function(req, res, next) {

}

exports.storeUser = function(req, res, next) {
    
}