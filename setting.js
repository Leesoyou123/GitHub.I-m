function drawGrid(gap){
	push();
	strokeWeight(0.1);
	stroke(255);
	for(let x = 0; x <= width; x = x+gap) {
		line(x, 0, x, height);
	}
	
	for(let y = 0; y <= height; y = y+gap) {
			line(0, y, width, y);
	}
	pop();
}

function showCoordinateNum(){
	push();
	translate(20,0);
	stroke("red");
	fill("red");
	textSize(15);
	text(`x: ${mouseX}, y: ${mouseY}`, 10, height-30);
	pop();
}