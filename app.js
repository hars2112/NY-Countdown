const days = document.querySelectorAll('days');
const hours = document.querySelectorAll('hours');
const minutes = document.querySelectorAll('minutes');
const seconds = document.querySelectorAll('seconds');

//set the currentDate in order to get newYearTime
const currentYear = new Date().getFullYear();

//set the date we're counting down to
const newYearTime = new Date(`January 01 
${currentYear + 1} 00:00:00`);

  //update countdown 
 function updateCountdownTime(){
const currentTime = new Date();
const diff = newYearTime - currentTime;

const d = Math.floor(diff / 1000 / 60 / 60 / 24);
const h = Math.floor(diff / 1000 / 60 / 60) % 24;
const m = Math.floor(diff / 1000 / 60) % 60;
const s = Math.floor(diff / 1000) % 60;

days.innerHTML = d;
hours.innerHTML = h < ? '0' + h : h;
minutes.innerHTML = m < ? '0' + m : m;
seconds.innerHTML = s < ? '0' + s : s;

 }
 setInterval(updateCountdownTime,1000);