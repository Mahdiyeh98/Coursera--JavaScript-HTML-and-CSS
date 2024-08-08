function doChange(){
  var canvas = document.getElementById("canvas");
  canvas.style.backgroundColor = "gray";
}

function colorPicker(){
  var canvas = document.getElementById("canvas");
  var colorInput = document.getElementById("colorpicker");
  var color = colorInput.value;
  canvas.style.backgroundColor = color;
}

function doSquare(){
  var slider = document.getElementById("slider");
  var len = slider.value;

  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");
  context.clearRect(0,0,canvas.width,canvas.height);
  context.fillStyle = "yellow";
  context.fillRect(10,10,len,len);
  context.fillRect(parseInt(len)+20,10,len,len);
  context.fillRect(len*3,10,len,len);
}