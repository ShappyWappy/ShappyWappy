console.log("test....");

var TheShappyVariableOfDoom = document.getElementById("Shappy");
var TheWappyVariableOfDoom = TheShappyVariableOfDoom.getContext("2d");
TheWappyVariableOfDoom.beginPath();
TheWappyVariableOfDoom.arc(150,150,120,0,6.28);
TheWappyVariableOfDoom.closePath();
TheWappyVariableOfDoom.lineWidth = 10;	
TheWappyVariableOfDoom.strokeStyle = "black";
TheWappyVariableOfDoom.stroke();
TheWappyVariableOfDoom.fillStyle = 'burlywood';
TheWappyVariableOfDoom.fill();	
TheWappyVariableOfDoom.beginPath();
TheWappyVariableOfDoom.arc(69,20,28,0,6.28);
TheWappyVariableOfDoom.closePath();
TheWappyVariableOfDoom.stroke();
TheWappyVariableOfDoom.fill();
TheWappyVariableOfDoom.beginPath();
TheWappyVariableOfDoom.arc(230,20,28,0,6.28);
TheWappyVariableOfDoom.closePath();
TheWappyVariableOfDoom.stroke();
TheWappyVariableOfDoom.fill();

var TheShappyWappyVariable = document.getElementById("RealShappy");
var TheShappyWappyVariableOfDoom = TheShappyWappyVariable.getContext("2d");
var AnythingYouWant = new Image();
AnythingYouWant.src = 'zr_default.png';
AnythingYouWant.onload = function(){
	TheShappyWappyVariableOfDoom.drawImage(AnythingYouWant, 0,0, 250, 250);

	TheShappyWappyVariableOfDoom.font = "30px Times New Roman";
	TheShappyWappyVariableOfDoom.strokeStyle = "LawnGreen";
	TheShappyWappyVariableOfDoom.strokeText("ZombsRoyale Default",2,270);
	TheShappyWappyVariableOfDoom.strokeText("Family Reunion.",2,290);
};

function hideText() {
	TheShappyWappyVariableOfDoom.clearRect (2,270,290,30);
};