let x = 1;
let y = 1;
let easing = 0.1;

let slider1, slider2, slider3, slider4;
const sliderXP = 35;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(220, 225, 225);
	noStroke();
	
	//createSlider(min, max, [default], [step]);
	slider1 = createSlider(0, 5, 3); //Text Sizing Group
	slider2 = createSlider(0, 85, 50); //Text Sizing Line
	slider3 = createSlider(0, 255); //Iris Color(HLS mode?)
	slider4 = createSlider(-3, 3, 0.7); //Rock Shape(Curve Tightness)
	slider1.position(sliderXP, 30);
	slider2.position(sliderXP, 60);
	slider3.position(sliderXP, 90);
	slider4.position(sliderXP, 120);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
	background(210, 80);
	
//SLIDER
	//Slider Text
	push();
	textSize(10);
	textAlign(LEFT);
	text("Text Size Group", sliderXP, 30);
	text("Text Size Line", sliderXP, 60);
	text("Iris Color", sliderXP, 90);
	text("Rock Shape", sliderXP, 120);
	pop();
	
	//Slider Setting
	let textSizing1 = slider1.value();
	let textSizing2 = slider2.value();
	let irisColor = slider3.value();
	let rockShape = slider4.value();
	
	//Slider1,2_Text Size
	push();
	fill(0);
	textFont("Verdana", 50);
	textStyle(BOLD);
	textAlign(CENTER, CENTER);
	translate(windowWidth/2, 100);
	for(let ts = -textSizing1; ts<textSizing1; ts++) {
	for(let tl = -textSizing2; tl<textSizing2; tl++) {
		push();
		scale(textSizing1, textSizing1);
		textSize(textSizing2);
			//EEAAO Text
			text("EVERY", 0, 0);
			text("THING", 0, 50);
			text("EVERY", 0, 100);
			text("WHERE", 0, 150);
			text("ALL AT", 0, 200);
			text("ONCE", 0, 250);
		pop();
		}
	}
	pop();
	
//---------------------------------------------------------
//ROCK SHAPE
	push();
	drawRock();
	pop();
	
//EYES
	push();
	translate(windowWidth/2-55, 500);
	drawEye();	
	pop();
	push();
	translate(windowWidth/2+55, 500);
	rotate(-50);
	drawEye();
	pop();
	
//MOUSE CURSUR
	let targetX = mouseX;
	let dx = targetX - x;
	x += dx * easing;
	let targetY = mouseY;
	let dy = targetY - y;
	y += dy * easing;
	
	ellipse(x, y, 40, 40);
	fill(0, 255, 0);
	ellipse(x, y, 20, 20);
	fill(0, 180, 255);
}


function mousePressed() {
	push();
	translate(mouseX, mouseY);
	scale(random(0.5, 1));
	drawEye();
	//loop();
	pop();
}


//----------------------------------------------------
//눈알
function drawEye() {
	push();
	let followX = map(mouseX, 0, 700, -20, 0);
	let followY = map(mouseY, 0, 700, -25, 10);
	translate(followX/2.5, followY/2.5);
		//흰자
		push();
		fill(255);
		circle(0, 0, 100);
		pop();
		//홍채
		push();
		translate(followX/2, followY/2);
		drawIris();
		pop();
		//화이트
		push();
		fill(255);
		translate(followX/2.2+12, followY/2.2-12);
		circle(0, 0, 12);
		pop();
	pop();
}

//홍채
function drawIris(size) {
push();
	size = 100;
	//홍채 원
	push();
	fill(0, 180, 255);
	circle(0, 0, size/1.5);
	pop();
	//홍채 선
	push();
	for (let i=0; i<180; i++) {
		blendMode(MULTIPLY);
		stroke(0, 100, 150, 90);
		strokeWeight(0.5);
		line(0, 0, 0, size/3);
		rotate(i);
	}
	pop();
	//동공
	push();
	fill(0);
	circle(0, 0, size/3);
	pop();
pop();
}

//돌
function drawRock() {
	push();
	let followX = map(mouseX, 0, 700, -20, 0);
	let followY = map(mouseY, 0, 700, -25, 10);
	translate(windowWidth/2, windowHeight/2+60);
	translate(followX/3, followY/3);
	rotate(sin(mouseX/200+frameCount/20)/20);
	curveTightness(0.7);
	fill(150, 150, 150);
	
  beginShape();
	curveVertex(160-300, 625-500);
	curveVertex(120-300, 500-500);
	curveVertex(185-300, 430-500);
	curveVertex(260-300, 380-500);
	curveVertex(430-300, 400-500);
	curveVertex(480-300, 475-500);
	curveVertex(425-300, 625-500);
  endShape(CLOSE);
	pop();
}
	