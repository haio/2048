var redis = require('redis');
var db = redis.createClient(6379, 'localhost');
var client = redis.createClient(8359, '10.16.33.62');
client.auth('1duvtlet0j:cf090196754d78b7090854a916426092728a1e30');

exports.db = db;
exports.client = client;

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