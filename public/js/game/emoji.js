var options = {
    topics: "test",
    token: "71aba2645083ddeacefd1eb5c27cb60a",
    timestamp: "1406916497008",
    appid: "1dvcunas65"
};
var channel = new Channel(options);
channel.onmessage = function (msg) {
    alert(msg.data);
};
