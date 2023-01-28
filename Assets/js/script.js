var currentDay = $('#currentDay');
var saveButton = $('.saveBtn');
var task9 = $('.t9');
var task10 = $('.t10');
var task11 = $('.t11');
var task12 = $('.t12');
var task1 = $('.t1');
var task2 = $('.t2');
var task3 = $('.t3');
var task4 = $('.t4');
var task5 = $('.t5');



// The function to display current time.
function displayTime() {
    var rightNow = moment().format('DD MMM YYYY [at] hh:mm:ss a');
    currentDay.text(rightNow);
  };
  setInterval(displayTime, 1000);
  
  
// The function to save tasks in the local storage.

saveButton.on('click', function () {
  
  localStorage.setItem('task9', task9.val());
  
  localStorage.setItem('task10', task10.val());
  
  localStorage.setItem('task11', task11.val());

  localStorage.setItem('task12', task12.val());

  localStorage.setItem('task1', task1.val());

  localStorage.setItem('task2', task2.val());

  localStorage.setItem('task3', task3.val());

  localStorage.setItem('task4', task4.val());

  localStorage.setItem('task5', task5.val());
  
 });

// This code gets tasks from the local storage.

 var task9Saved = localStorage.getItem('task9');
 task9.val(task9Saved);

 var task10Saved = localStorage.getItem('task10');
 task10.val(task10Saved);

 var task11Saved = localStorage.getItem('task11');
 task11.val(task11Saved);

 var task12Saved = localStorage.getItem('task12');
 task12.val(task12Saved);

 var task1Saved = localStorage.getItem('task1');
 task1.val(task1Saved);

 var task2Saved = localStorage.getItem('task2');
 task2.val(task2Saved);

 var task3Saved = localStorage.getItem('task3');
 task3.val(task3Saved);

 var task4Saved = localStorage.getItem('task4');
 task4.val(task4Saved);

 var task5Saved = localStorage.getItem('task5');
 task5.val(task5Saved);
