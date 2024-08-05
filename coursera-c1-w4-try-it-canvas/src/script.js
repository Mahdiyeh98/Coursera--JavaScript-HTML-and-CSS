function changeColor(){
  var left = document.getElementById("left");
  var right = document.getElementById("right");

  left.className="leftch";
  right.className="rightch";
  
    left.style.backgroundColor="skyblue";
    right.style.backgroundColor="yellow";
}

function doBlue(){
  var left = document.getElementById("left");
  left.style.backgroundColor="blue";

  var context = left.getContext("2d");
  context.fillStyle="yellow";
  context.fillRect(10,10,60,60);
  context.fillRect(80,10,60,60);

  context.fillStyle="black";
  context.font="20px Arial";
  context.fillText("Hello",15,45);
}

function doRed(){
  var right=document.getElementById("right");
  right.style.backgroundColor="red";

}

function doPurple(){
  var canvas = document.getElementById("left");

  var context = canvas.getContext("2d");
  context.clearRect(0,0,canvas.width,canvas.height);
  canvas.style.backgroundColor = "purple";

}