//Beautiful Timer
//TODO: have thumbnails on the side or bottom and then onClick(); the thumbnail becomes the background
//have the option to choose among 3 different fonts 
//Also have a version where they can upload their own picture to make that the background

//initialize variables here to make them global-available to both functions
var userMinutes;
var secsLeft;

function setTimer() {
  // get amount of time from user
  userMinutes = parseInt(document.getElementById("userMin").value, 10);  
  // display user time in an h1 heading
  document.getElementById("countMinutes").innerHTML = userMinutes + " minutes";
  //set this variable - if you set it outside the functions it sets it when the page loads, but when the page loads, userMinutes doesn't have a value so it returns NaN  
  //set original amount of seconds on the timer
  secsLeft = (userMinutes * 60);
  }

//changes the words on the button from "Start the Timer" to "Restart Timer"
function changeWords() {
	document.getElementById("restart").textContent = "Restart Timer";
}

//starts and runs the timer - this function is invoked every second (1000 milli seconds)	
function customTimer(){
	//subtract one second every second!
	secsLeft--;
	//show only how many seconds are left after the minutes are accounted for (only goes from 59 to 0)
	var showSecs = (secsLeft % 60);
	document.getElementById("countSeconds").textContent = showSecs + " seconds";
	//show how many minutes are left and round down so no decimals are showing
	var minsLeft = Math.floor(secsLeft / 60);
	document.getElementById("countMinutes").textContent = minsLeft + " minutes";
	//stop the timer once it gets down to zero
	if(secsLeft <= 0)
		clearInterval(stopTimer);
}