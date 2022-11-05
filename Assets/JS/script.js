
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
function headIncrement() {
  var headTime = dayjs()
  // console.log(headTime);
  var formatHead = headTime.format("dddd, MMM, D, YYYY");
  var currentTime = $("#timeHead")
  currentTime.text(formatHead)
}
// headIncrement();

setInterval(headIncrement, 1000)
setInterval(checkTime, 1000)

function checkTime() {
  var timeChecker = dayjs()
  var currentMTime = timeChecker.format("H")
  var containerLg = $(".container-lg").children("div")
  console.log(containerLg);

  containerLg.each(function () {
    var timeId = $(this).attr("id")

    var timeIdSplit = timeId.replace("hour-", "")
    console.log(timeIdSplit);

    if (parseInt(timeIdSplit) > currentMTime) {
      $(this).removeClass("present")
      $(this).removeClass("past")
      $(this).addClass("future")
    }
    if (parseInt(timeIdSplit) < currentMTime) {
      $(this).removeClass("present")
      $(this).addClass("past")
      $(this).removeClass("future")

    } if (parseInt(timeIdSplit) == currentMTime) {
      $(this).addClass("present")
      $(this).removeClass("past")
      $(this).removeClass("future")
    }
  }
  )



}

// checkTime();

$(function () {

  btn.on("click", function (event) {
    var text = $(this).prev().val()
    var parentId = $(this).parent().attr("id")
    console.log(text);
    console.log(parentId);

    localStorage.setItem(parentId, text)

  })

  $("#hour-9 .description").val(localStorage.getItem("hour-9"))
  $("#hour-10 .description").val(localStorage.getItem("hour-10"))
  $("#hour-11 .description").val(localStorage.getItem("hour-11"))
  $("#hour-12 .description").val(localStorage.getItem("hour-12"))
  $("#hour-13 .description").val(localStorage.getItem("hour-13"))
  $("#hour-14 .description").val(localStorage.getItem("hour-14"))
  $("#hour-15 .description").val(localStorage.getItem("hour-15"))
  $("#hour-16 .description").val(localStorage.getItem("hour-16"))
  $("#hour-17 .description").val(localStorage.getItem("hour-17"))

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});

var btn = $(".btn")
// console.log(btn);

// Acceptance Criteria

// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist