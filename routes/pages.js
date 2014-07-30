
var db = require('./db.js');

module.exports = function(app) {

    app.get('/', db.addOnline);
    app.get('/', db.scoreOnline);
    app.get('/', function(req, res) {

        res.send(req.online.length + ' users online');
    });

    app.get('/2048', db.addOnline);
    app.get('/2048', db.scoreOnline);
    app.get('/2048', function(req, res) {
      res.render('2048', { title: req.online.length });
    });



};