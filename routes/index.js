var games = require('./games'),
    pages = require('./pages'),
    demo = require('./demo');


module.exports = function(app) {
    
    demo(app);
    
    pages(app);

    games(app);


};