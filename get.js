//import jquery
var script = document.createElement('script');
script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js';
if (window.localStorage.getItem('color') == '') {
    window.localStorage.setItem('color', '#0e0d0d');
}
else {
    setTimeout(function () {
        var body = document.getElementsByTagName('body')[0];
        var button = document.getElementsByTagName('button');
        body.style.backgroundColor = window.localStorage.getItem('color');
        body.style.color = window.localStorage.getItem('tcolor');
        $('button').css('background-color', window.localStorage.getItem('bbcolor'));
        $('button').css('color', window.localStorage.getItem('btcolor'));
    }, 1000);
}
