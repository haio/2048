  var observer_options = {
        topics: "test",
        token: "77f381783b707205fc96435339948a84",
        timestamp: "1406879229880",
        appid: "1dvb50r4ws"
    };
  var observer_channel = new Channel(observer_options);
  observer_channel.onopen = function () {};
  observer_channel.onmessage = function (msg) {
    var container = document.getElementById("comment");
    if ( container.childElementCount == 5 ) {
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }    
    }

    var comment = document.createElement("div");
    comment.classList.add("comment");

    comment.textContent = JSON.parse(msg.data).alias + ": " + JSON.parse(msg.data).comment;
    comment.style.right = (Math.random()*25-25) + "%" ;
    comment.style.bottom = (Math.random()*50 ) + "%" ;
    container.appendChild(comment);
    console.log(JSON.parse(msg.data))
  };
  observer_channel.onerror = function (err) {};
  observer_channel.onclose = function (reason) {};


  var userData = [{
      user: "u1",
      score: 1500
    }, {
      user: "u2",
      score: 55
    }, {
      user: "u3",
      score: 5500
    }, {
      user: "u4",
      score: 1515
    }, {
      user: "u5",
      score: 5515
    }, {
      user: "u6",
      score: 15
    }
  ];


  for ( var index in userData) {
    var score = document.createElement("div");
    score.classList.add("affix-score");
    score.textContent = userData[index].user + " : " +userData[index].score;
    document.getElementById("board").appendChild(score);
  }

