let rez = 20;
let w;
let h;

function setup() {
  createCanvas(400, 400);
  frameRate(5);
  w = floor(width/rez);
	h = floor(height/rez);
}

function draw() {
  scale(rez);
  background(220);
  noStroke();
}
