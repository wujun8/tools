/**        
location /ddrobot/ {
    proxy_pass https://oapi.dingtalk.com/robot/;
    add_header Access-Control-Allow-Origin *;
    add_header Access-Control-Allow-Methods "POST, GET, OPTIONS";
    add_header Access-Control-Allow-Headers "Origin, Authorization, Accept, content-type";
    add_header Access-Control-Allow-Credentials true;
}
**/
function notify(message, at) {
    $.ajax({ url:'http://localhost/ddrobot/send?access_token=5da135fe73a1bbe298341369c8a0c262e738007d38847dd10b3a80195cc7eb8b',
    type:'post',
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    data: JSON.stringify({
        msgtype: "text",
        text: {
            content: message
        },
        at: {
            atMobiles: [
                at
            ],
            isAtAll: false
        }
    }),
    success:function (response) {
        console.log(response);
    }
    });
}
// @require https://cdn.rawgit.com/admsev/jquery-play-sound/master/jquery.playSound.js
function ring() {
    $.playSound("https://wujun8.github.io/tools/static/mp3/Heart-monitor-sound.mp3");
}