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