function popup_alert(msg){
  alert(msg);
}

function choice_confirmation(){
  var choice = "Would you like to help clean up environmental pollution?";
  var message;
  if(confirm(choice) == true)
    message="You pressed OK!";
  else
    message="Are you sure you want to cancel?";
}

function changeColor(){
  var water = document.getElementById("water");
  var light = document.getElementById("light");

  water.className="cleanwater";
  light.className="nolightpollution";
}

function changeText(){
  var water = document.getElementById("water");
  var light = document.getElementById("light");

  water.innerHTML = "Dripping pipe fixed!";
  light.innerHTML = "Extra light turned off!";
}

function changeTextColor(){
  var water = document.getElementById("water");
  var light = document.getElementById("light");

  water.style.color="purple";
  light.style.color="orange"
}

function changeButtonValue(){
  var water = document.getElementById("waterbtn");
  var light = document.getElementById("lightbtn");

  water.value = "Thanks for fixing the dropping pipe!"

  light.value = "Thanks for turning off the extra light!"
}