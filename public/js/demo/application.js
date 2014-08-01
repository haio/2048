window.requestAnimationFrame(function () {
  var managers = {};
  // var gameManager = new GameManager('uid', 4, HTMLActuator, LocalStorageManager);
  var socket = this.socket  = io({ query: { dashboard: true } });
  
  socket.on('connect', function () {
    console.log('Dashboard has connected now!');
  });
  socket.on('error', function (err) {
    console.log(err);
  });
  socket.on('login', function (uid) {
    console.log('new user logined', uid);
    if (managers[uid]) return;
    newGame(uid);
    managers[uid] = new GameManager(uid, 4, HTMLActuator, LocalStorageManager);
  });
  socket.on('move', function (action) {
    console.log('moving......', action.uid, Object.keys(managers));
    var gameManager = managers[action.uid];
    if (!gameManager) return;
    if (action.direction) {
      gameManager.move(action.direction, action.tile);
      gameManager.storageManager.setGameState(action.gameState);
    } else {
      gameManager.storageManager.setGameState(action.gameState);
      gameManager.setup();
    }
  });
});

function newGame (uid) {
  var container = document.querySelector(".container");
  var gameDiv = document.createElement('div');
  gameDiv.id = uid;
  gameDiv.className = 'game-set-container';
  gameDiv.innerHTML = html;
  container.appendChild(gameDiv); 
}

var html = [
  '<div class="heading">',
    ' <div class="scores-container">',
    '   <div class="score-container">0</div>',
    '   <div class="best-container">0</div>',
    ' </div>',
   '</div>',
   '<div class="game-container">',
    ' <div class="game-message">',
    '   <p></p>',
    '   <div class="lower">',
    '       <a class="keep-playing-button">Keep going</a>',
    '     <a class="retry-button">Try again</a>',
    '   </div>',
    ' </div>',
    ' <div class="grid-container">',
    '   <div class="grid-row">',
    '     <div class="grid-cell"></div>',
    '     <div class="grid-cell"></div>',
    '     <div class="grid-cell"></div>',
    '     <div class="grid-cell"></div>',
    '   </div>',
    '   <div class="grid-row">',
    '     <div class="grid-cell"></div>',
    '     <div class="grid-cell"></div>',
    '     <div class="grid-cell"></div>',
    '     <div class="grid-cell"></div>',
    '   </div>',
    '   <div class="grid-row">',
    '     <div class="grid-cell"></div>',
    '     <div class="grid-cell"></div>',
    '     <div class="grid-cell"></div>',
    '     <div class="grid-cell"></div>',
    '   </div>',
    '   <div class="grid-row">',
    '     <div class="grid-cell"></div>',
    '     <div class="grid-cell"></div>',
    '     <div class="grid-cell"></div>',
    '     <div class="grid-cell"></div>',
    '   </div>',
    ' </div>',
   '<div class="tile-container">',
     '</div>',
   '</div>'].join('')