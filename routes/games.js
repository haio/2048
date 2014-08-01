'use strict';
var redis = require('redis'),
    client = redis.createClient(8359, '10.16.33.62');
client.auth('1dvcunas65:17e79703035b9cd3115ac29f8827c90d81619255');

module.exports = function(app) {

    app.post('/emoji', function(req, res) {
      var mo = req.body.mo || '^^';
      if ( !req.body.uid )
        return res.send({result:false});
      var message = {
        uid : req.body.uid,
        mo : req.body.mo
      }
      client.lpush('test', JSON.stringify(message));
      console.log(message);
      return res.send({result:true});
    })
};
