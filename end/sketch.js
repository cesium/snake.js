let rez = 20;
let w;
let h;
let snake;
let food;

function setup() {
  createCanvas(400, 400);
  frameRate(5);
  w = floor(width/rez);
	h = floor(height/rez);
  snake = new Snake();
  createFood();
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

function createFood(){
	let x = floor(random(w));
  let y = floor(random(h));
  food = createVector(x,y);
}

function draw() {
  scale(rez);
  background(220);
  noStroke();
  
  if (snake.eat(food) == true){
  	createFood();
  }
  
  fill('red');
  rect(food.x, food.y, 1, 1);
  
  snake.update();
  snake.show();
  
  if (snake.endGame()) {
    background(255, 0, 0);
    noLoop();
  }
  
}
