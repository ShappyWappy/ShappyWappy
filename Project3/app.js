console.log("test....");

var TheShappyVariableOfDoom = document.getElementById("Shappy");
var TheWappyVariableOfDoom = TheShappyVariableOfDoom.getContext("2d");
TheWappyVariableOfDoom.moveTo(57,71);
TheWappyVariableOfDoom.lineTo(299,232);
TheWappyVariableOfDoom.strokeStyle = "green";
TheWappyVariableOfDoom.lineWidth = 21;	
TheWappyVariableOfDoom.stroke();
TheWappyVariableOfDoom.fillStyle = 'rgb(200, 50, 10)';
TheWappyVariableOfDoom.fillRect(123,90,91,92);
TheWappyVariableOfDoom.strokeStyle = "blue";
TheWappyVariableOfDoom.strokeRect (50,100,200,150);
TheWappyVariableOfDoom.beginPath();
TheWappyVariableOfDoom.arc(150,150,120,0,6.28);
TheWappyVariableOfDoom.closePath();
TheWappyVariableOfDoom.strokeStyle = "purple";
TheWappyVariableOfDoom.stroke();
TheWappyVariableOfDoom.fillStyle = 'rgb(138, 72, 21)';
TheWappyVariableOfDoom.fill();	

