const days = document.querySelectorAll('days');
const hours = document.querySelectorAll('hours');
const minutes = document.querySelectorAll('minutes');
const seconds = document.querySelectorAll('seconds');

//set the currentdate in order to get newYearTime
const currentYear = new Date().getFullYear();

//set the date we're counting down to
const newYearTime = new Date(`January 01 
${currentYear + 1} 00:00:00`);

  //update countdown 
 function updateCountdownTime(){
const currentTime = new Date();
const diff = newYearTime - currentTime;
console.log(diff);
 }
 updateCountdownTime();