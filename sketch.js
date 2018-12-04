let rez = 20;
let w;
let h;
let snake;

function setup() {
  createCanvas(400, 400);
  frameRate(5);
  w = floor(width/rez);
	h = floor(height/rez);
  snake = new Snake();
}

function keyPressed(){
	if (keyCode == LEFT_ARROW && snake.xdir == 0) {
    snake.xdir = -1
    snake.ydir = 0;
  }
  if (keyCode == RIGHT_ARROW && snake.xdir == 0) {
    snake.xdir = 1;
    snake.ydir = 0;
  }
  if (keyCode == DOWN_ARROW && snake.ydir == 0) {
    snake.xdir = 0;
    snake.ydir = 1;
  }
  if (keyCode == UP_ARROW && snake.ydir == 0) {
    snake.xdir = 0;
    snake.ydir = -1;
  }
}



function draw() {
  scale(rez);
  background(220);
  noStroke();
  
  snake.update();
  snake.show();
}
