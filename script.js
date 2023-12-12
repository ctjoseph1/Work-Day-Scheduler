

  $(".saveBtn").on("click",function(){
    console.log("test", this)
  })
  console.log("js loaded", dayjs().format("DD/MM/YY"));
$("#currentDay").text(dayjs().format("DD/M/YY")) //How to have month spelled out in text?

// Color-code each timeblock based on past, present, and future when the timeblock is viewed.
  // >> Present time is Red, Past time is Grey, future time is Green

// Allow a user to enter an event when they click a timeblock
  // >>Done using text area html element

// Save the event in local storage when the save button is clicked in that timeblock.
    // >>Persist events between refreshes of a page
    //>>Wipes out data when it's a new day- Best approach is an array

