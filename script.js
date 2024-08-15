import { say } from './script.js';
//XXX.say();

var sqrSize = 50;
var sqrsW = 11;
var scrSize = sqrSize*sqrsW;


var world = []
for (let y = 0; y < sqrsW; y++){
	world.push(0);
}


window.onload = function(){
	var x = document.getElementById("world")
	var ctx = x.getContext("2d");
	ctx.fillStyle = "white";
	
	//background 
	ctx.fillRect(0,0,scrSize,scrSize);
	
	
	ctx.fillStyle = "grey";
	let xposSqr = sqrSize;
	let yposSqr = sqrSize;
	let spacing = sqrSize;
	let c = 0;
	let d = 0;
	let w = 10;
	while (c < w){
		while (d < w){
			//ctx.fillRect(xposSqr + d*spacing,yposSqr + c*spacing,50,50);
			d++;
		}
		c++;
		d = 0;
	}
	console.log("hi")
	//drawPix(1,2,"red", ctx);
	//drawPix(3,4,"blue", ctx);
	//drawPix(5,5,"black", ctx);
	//drawPix(10,9,"purple", ctx);
	drawPix(5,5,"black", ctx); // hero
	// block
	drawPix(2,2,"red", ctx);
	drawPix(2,3,"red", ctx);
	drawPix(3,2,"red", ctx);
	drawPix(3,3,"red", ctx);
}

function drawPix(x,y,col, ctx){

	ctx.fillStyle = col;
	ctx.fillRect(x*sqrSize,y*sqrSize,sqrSize,sqrSize);
}

