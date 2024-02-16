
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


var currentHour = dayjs().format('HH');

for (let i =  9; i <  18; i++)
{
    var timePeriodElement = $(`.time-block#timePeriod-${i}`).attr('id');
    var timeNumber = timePeriodElement.split("-")[1];

    if (currentHour > timeNumber){
        $(`.time-block#timePeriod-${i}`).addClass('past');
        $(`.time-block#timePeriod-${i}`).removeClass('present');
        $(`.time-block#timePeriod-${i}`).removeClass('future');
    } else 
    if  (currentHour == timeNumber)
    {
        $(`.time-block#timePeriod-${i}`).removeClass('past');
        $(`.time-block#timePeriod-${i}`).addClass('present');
        $(`.time-block#timePeriod-${i}`).removeClass('future');
    }
else 
{
    $(`.time-block#timePeriod-${i}`).removeClass('past');
    $(`.time-block#timePeriod-${i}`).removeClass('present');
    $(`.time-block#timePeriod-${i}`).addClass('future');
}


}
