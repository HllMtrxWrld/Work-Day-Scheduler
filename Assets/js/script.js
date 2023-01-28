var currentDay = $('#currentDay');
var saveButton = $('.saveBtn');
// var task9 = $('.t9');
// var task10 = $('.t10');
// var task11 = $('.t11');
// var task12 = $('.t12');
// var task1 = $('.t1');
// var task2 = $('.t2');
// var task3 = $('.t3');
// var task4 = $('.t4');
// var task5 = $('.t5');

// var taksArray = [
// task9,
// task10,
// task11,
// task12,
// task1,
// task2,
// task3,
// task4,
// task5
// ];

//  function to display current time
function displayTime() {
    var rightNow = moment().format('DD MMM YYYY [at] hh:mm:ss a');
    currentDay.text(rightNow);
  };
  setInterval(displayTime, 1000);
  
  
// function to save a task i local storage

saveButton.on('click', function () {
  
  var task9 = $('.t9').val();
  localStorage.setItem('task9', task9);
  
  var task10 = $('.t10').val();
  localStorage.setItem('task10', task10);
  
  var task11 = $('.t11').val();
  localStorage.setItem('task11', task11);

  var task12 = $('.t12').val();
  localStorage.setItem('task12', task12);

  var task13 = $('.t1').val();
  localStorage.setItem('task13', task13);

  var task14 = $('.t2').val();
  localStorage.setItem('task14', task14);

  var task15 = $('.t3').val();
  localStorage.setItem('task15', task15);

  var task16 = $('.t4').val();
  localStorage.setItem('task16', task16);

  var hr17 = $('.t5').val();
  localStorage.setItem('text17', hr17);
  
 });


// function inputTask() {
//   taksArray.forEach(element => {
    
//   });
// }



// function to save a task(button)
// $('.saveBtn').click(function () {
// var hr9 = $('.t9').val();
// localStorage.setItem('text9', hr9);

// var hr10 = $('.t10').val();
// localStorage.setItem('text10', hr10);

// var hr11 = $('.t11').val();
// localStorage.setItem('text11', hr11);
// var hr12 = $('.t12').val();
// localStorage.setItem('text12', hr12);
// var hr13 = $('.t1').val();
// localStorage.setItem('text13', hr13);
// var hr14 = $('.t2').val();
// localStorage.setItem('text14', hr14);
// var hr15 = $('.t3').val();
// localStorage.setItem('text15', hr15);
// var hr16 = $('.t4').val();
// localStorage.setItem('text16', hr16);
// var hr17 = $('.t5').val();
// localStorage.setItem('text17', hr17);
// });