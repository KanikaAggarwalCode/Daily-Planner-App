
var currentTime = dayjs().format('dddd, MMMM D, YYYY');
$('#currentDay').text(currentTime)



$(".saveBtn").on("click", function () {


    var text = $(this).siblings(".description").val(); 
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, text);

})

$("#timePeriod-9 .description").val(localStorage.getItem("timePeriod-9"));
$("#timePeriod-10 .description").val(localStorage.getItem("timePeriod-10"));
$("#timePeriod-11 .description").val(localStorage.getItem("timePeriod-11"));
$("#timePeriod-12 .description").val(localStorage.getItem("timePeriod-12"));
$("#timePeriod-13 .description").val(localStorage.getItem("timePeriod-13"));
$("#timePeriod-14 .description").val(localStorage.getItem("timePeriod-14"));
$("#timePeriod-15 .description").val(localStorage.getItem("timePeriod-15"));
$("#timePeriod-16 .description").val(localStorage.getItem("timePeriod-16"));
$("#timePeriod-17 .description").val(localStorage.getItem("timePeriod-17"));


