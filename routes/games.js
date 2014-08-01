var redis = require('redis'),
    client = redis.createClient(8359, '10.16.33.62');
client.auth('1duvtlet0j:cf090196754d78b7090854a916426092728a1e30');

module.exports = function(app) {

    app.post('/score', function(req, res){
        console.log(req.body)
        // client.lpush('sohu', JSON.stringify(req.body.state));
        //console.log(JSON.stringify(req.body.sate));
        return res.send('recieved');
    })
};