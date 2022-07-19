const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');


var newYears = '1 jan 2023';

function countdown(){
var newYearsDate =  new Date(newYears);
var currentDate = new Date();

var totalSeconds = (newYearsDate- currentDate)/1000;
var days = Math.floor(totalSeconds/3600/24);
var hours = Math.floor(totalSeconds/3600)%24;
var mins = Math.floor(totalSeconds/60)%60;
var seconds = Math.floor(totalSeconds) % 60;


daysEl.innerHTML = days;
hoursEl.innerHTML = hours;
minsEl.innerHTML = mins;
secondsEl.innerHTML= seconds;
}

countdown();
setInterval(countdown , 1000);

$("#header").hover(function() {
    $(this).toggleClass('bluelight');
  });

   
  $(".countdown-el").hover(function() {
    $(this).toggleClass('bluelight');
  });