****Description**
The project at hand is to use the concepts I've learned during class to complete the activity and to use this knowledge to create a Work day-scheduler using Jquery CSS and html (focusing mainly on javascript/jquery to create the fucntionality and interactivity, and using html secondarily to create/edit content using bootstrap).

**How it went**
This project was challenging, and complex to figure out the best way to code in order to make this a success.
The most challenging part of the project, was figuring out how to make the save buttons correspond with the text area to the left of it. I was able to succesfully use .val to extract the text from the text area using $(this).siblings to save the text. And save the event in the local storage using a combination of using Jquery to select specific elements. Using the .key selector for local storage by concatenating the string "item-" with the id attribute of the closest parent element with the class time-block to the recent text area.

##Looking at he project criteria I was succesfully able to do the following, and I am happy that the funcitonality meets the needed requirements:

* Display the current day at the top of the calender when a user opens the planner.
 
* Present timeblocks for standard business hours when the user scrolls down.
 
* Color-code each timeblock based on past, present, and future when the timeblock is viewed.
 
* Allow a user to enter an event when they click a timeblock

* Save the event in local storage when the save button is clicked in that timeblock.

* Have the written text persist between refreshes of a page


**This project was built with:**
Bootstrap
Javascript
Jquery

Link to deployed project: 
