console.log("test....");

var TheShappyVariableOfDoom = document.getElementById("Shappy");
var TheWappyVariableOfDoom = TheShappyVariableOfDoom.getContext("2d");

var WIDTH = 600;
var HEIGHT = 400;

var x;
var y;
var mx;
var my;

function animate(){
	x = 300;
	y = 200;
	mx = 3;
	my = 4;
	return setInterval(draw, 20);
}

function circle(x, y, r){
	TheWappyVariableOfDoom.beginPath();
	TheWappyVariableOfDoom.arc(x, y, r, 0, 6.28);
	TheWappyVariableOfDoom.closepath();
	TheWappyVariableOfDoom.stroke();
	TheWappyVariableOfDoom.fillStyle = "green";
	TheWappyVariableOfDoom.fill();
}

function draw(){
	TheWappyVariableOfDoom.clearRect(0, 0, WIDTH, HEIGHT);
	circle(x, y, 30);
	if (x + mx < 0 || x + mx >WIDTH) {
		mx = -mx;
	}
	if (y+ my < 0 || y + my > HEIGHT) {	
}

x += mx;
y += my;
}