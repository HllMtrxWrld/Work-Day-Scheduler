var currentDay = $('#currentDay');
var time = $('.time');

//  function to display current time
function displayTime() {
    var rightNow = moment().format('DD MMM YYYY [at] hh:mm:ss a');
    currentDay.text(rightNow);
  };
  setInterval(displayTime, 1000);
  
time.text()