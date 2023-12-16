
//User wants to type in the text area, and use save button to save this information

  $(".saveBtn").on("click",function(){
    console.log("test", this)
var textSaved = $(this).siblings('.description').val()
    //after clicking the button ^^ All information tpyed in the text area is saved to local storage
//    var textSaved = $('#hour-9 .description').val() //.val extracts the text as we're grabbing from the text area
  console.log(textSaved)

//  var key = $(this).parent().attr('id') 
var key = "item-" + $(this).parent().attr('id'); // Ensure the key matches the one used when loading
  //saving to local storage
localStorage.setItem(key, textSaved) 


})
  console.log("js loaded", dayjs().format("DD/MM/YY"));
$("#currentDay").text(dayjs().format("DD MMM YY")) //How to have month spelled out in text?

//Text needs to persist- load back to corresponding text area


$("*[data-store]").each(function () {
    $(this).val(localStorage.getItem("item-" + $(this).attr("data-store")));
  });


// Get current hour
var currentHour = new Date().getHours();
console.log(currentHour)


// Loop through each time block
$('.time-block').each(function() {
 var blockHour = parseInt($(this).attr('id').split('-')[1]);
 console.log(blockHour)

 // Remove the color classes (needed according to documentation in order for the previous classes to be removed)
 $(this).removeClass('past present future');

 // Add class based on comparison
 if (blockHour < currentHour) {
  $(this).addClass('past');
 } else if (blockHour === currentHour) {
  $(this).addClass('present');
 } else {
  $(this).addClass('future');
 }
});


//target the elements? (e.g., "hour-10")
var timeblockIdElement = $('#hour-9');
timeblockIdElement.addClass()

// Allow a user to enter an event when they click a timeblock
  // >>Done using text area html element

// Save the event in local storage when the save button is clicked in that timeblock.
    // >>Persist events between refreshes of a page
    $(".time-block textarea").each(function () {
        var key = "item-" + $(this).closest(".time-block").attr("id");
        var storedText = localStorage.getItem(key);
        if (storedText) {
            $(this).val(storedText);
        }
    });


    //>>Wipes out data when it's a new day- Best approach is an array

