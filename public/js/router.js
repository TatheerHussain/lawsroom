var pages = document.querySelector('#pages');
var room = document.querySelector('#x-room');
var tb = document.querySelector('paper-toolbar');
var body = document.querySelector('body');

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-77171491-1', 'auto');

function _a(ctx, next){
    ga('set', 'page', ctx.path);
    ga('send', 'pageview');
}

function homeStyle(ctx, next){
    body.style.backgroundImage = "url(/img/bg.jpeg)";
    tb.hidden = true;
    next();
}
function clearHomeStyle(ctx, next){
    body.style.backgroundImage = "none";
    tb.hidden = false;
    next();
}

page('/', function(ctx, next){
    pages.select('x-door');
    next();
}, homeStyle, _a);
page('/random', function(ctx, next){
    pages.select('random-room');
    next();
}, clearHomeStyle, _a);
page('/room/:id', function(ctx, next){
    room.roomId = ctx.params.id;
    pages.select('x-room');
    next();
}, clearHomeStyle, _a);
page('/unsupport', function(ctx, next){
    pages.select('un-support');
    next();
}, clearHomeStyle, _a);
page('*', function(ctx, next){
    pages.select('x-door');
    next();
}, homeStyle, _a);

page({
    hashbang: false
});

if(!getUserMedia || !RTCSessionDescription || !RTCPeerConnection || !RTCIceCandidate || !WebSocket) page('/unsupport');

