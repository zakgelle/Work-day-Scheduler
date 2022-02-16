var time = moment().format("dddd MMMM Do");
$("#currentDay").text(time);



function timeTracker() {
    var timeNow = moment().hour();