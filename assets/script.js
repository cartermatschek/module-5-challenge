//WHEN I open the planner
//THEN the current day is displayed at the top of the calendar
var currentDay = moment();
$("#currentDay").text(currentDay.format("dddd, MMMM D, YYYY"));

// When I click the save button, if something is typed in the description it needs to be placed into
// local storage and assigned a key
$(".saveBtn").on("click", function() {
    var textValue = $(this).siblings(".description").val();
    var divKey = $(this).parent().attr("id");

localStorage.setItem(divKey, textValue);
})

// on page load we need to find key and render value of key into appropriate text area
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));

var currentTime = moment().hours();

// for each timeblock compare appropriate id number to the current time.
$(".time-block").each(function() {
    var divNumber = $(this).attr("id");
    if (divNumber < currentTime){
        $(this).addClass("past");
    }

    if (divNumber == currentTime){
        $(this).addClass("present");
    }

    if (divNumber > currentTime){
        $(this).addClass("future");
    }

})