var uuid = require('node-uuid');
var redis = require('redis'),
    client = redis.createClient(8359, '10.16.33.62');
client.auth('1dvb50r4ws:83dd349f751edb7a43147824592bcea95fc651f3');

module.exports = function(app) {
    

    app.post('/observe', function(req, res) {
      //var observer_id = 'observer' + uuid.v1();
      var alias = req.body.alias || '匿名';
      if ( !req.body.comment )
        return res.send({result:false});
      var message = {
        alias : alias,
        comment : req.body.comment
      }
      client.lpush('test', JSON.stringify(message));
      console.log(message);
      return res.send({result:true});
    })
};
