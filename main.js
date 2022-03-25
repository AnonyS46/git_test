var day = document.getElementById('day');
var hour = document.getElementById('hour');
var minute = document.getElementById('minute');
var second = document.getElementById('second');


var tetDay = new Date(2022,1,1,0,0,0,0);
console.log(tetDay)

setInterval(function () {
    var current = new Date();
    var seconds_left = (tetDay.getTime() - current.getTime())/1000;
    var days = parseInt(seconds_left /86400);
    seconds_left= seconds_left % 86400;

    var hours = parseInt(seconds_left/3600)
    seconds_left = seconds_left % 3600;

    var minutes = parseInt(seconds_left/60);
    var seconds = parseInt(seconds_left % 60);

    day.innerText=days;
    hour.innerText=hours;
    minute.innerText=minutes;
    second.innerText=seconds;
},1000)