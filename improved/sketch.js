let snake;
let rez = 20;
let food;
let w;
let h;
let sound_soundtrack;
let sound_eat;
let sound_die;
let font;
let apple;

function preload() {
  soundFormats('mp3', 'ogg');
  sound_soundtrack = loadSound('soundtrack.mp3');
  sound_eat = loadSound('sound_eat.ogg');
  sound_die = loadSound('sound_die.ogg');
  font = loadFont('kabel.ttf');
  apple = loadImage('apple.png');
}

function setup() {
  createCanvas(400, 400);
  w = floor(width / rez);
  h = floor(height / rez);
  frameRate(5);
  noStroke();
  snake = new Snake();
  createFood();
  sound_soundtrack.setLoop(true);
  sound_soundtrack.setVolume(0.1);
  sound_soundtrack.play();
  textFont(font);
  textSize(1);
  textAlign(LEFT);
}

function createFood() {
  let x = floor(random(w));
  let y = floor(random(h));
  food = createVector(x, y);

}

function keyPressed() {
  if (keyCode == LEFT_ARROW && snake.xdir == 0) {
    snake.xdir = -1
    snake.ydir = 0;
  } else if (keyCode == RIGHT_ARROW && snake.xdir == 0) {
    snake.xdir = 1;
    snake.ydir = 0;
  } else if (keyCode == DOWN_ARROW && snake.ydir == 0) {
    snake.xdir = 0;
    snake.ydir = 1;
  } else if (keyCode == UP_ARROW && snake.ydir == 0) {
    snake.xdir = 0;
    snake.ydir = -1;
  }
}


function draw() {
  scale(rez);
  background(220);
  fill(0);
  text("Score: "+(snake.body.length-1), 0, 1);
  if (snake.eat(food)) {
    sound_eat.play()
    createFood();
  }
  //creates score
	fill(0);
  text("Score: "+(snake.body.length-1), 0, 1);
  
  fill(255, 0, 0);
  image(apple,food.x, food.y,1,1);

  snake.update();
  snake.show();
	
  //aumenta dificuldade consoante o score
  if ((snake.body.length-1)>10){
  	frameRate(floor((snake.body.length-1)/2));
  }
  
  if (snake.endGame()) {
    sound_soundtrack.stop();
    sound_die.play();
    background(255, 0, 0);
    fill(0);
    textSize(2);
    textAlign(CENTER, CENTER);
  	text("YOU DIED", w/2, h/2);
    textSize(1)
	  text("Score: "+(snake.body.length-1), w/2, h/2+3);
    noLoop();
  }


}