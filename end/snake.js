class Snake {

  constructor() {
		this.body = [];
    this.body[0] = createVector(0,0);
    this.xdir = 0;
    this.ydir = 0;
  }
  
  update(){
  	let head = this.body[0].copy();
    this.body.pop();
    head.x += this.xdir;
    head.y += this.ydir;
    this.body.unshift(head);
  }
  
  show(){
  	fill(0);
    for (let i = 0; i < this.body.length; i++){
    	rect(this.body[i].x, this.body[i].y, 1, 1);
    }
  }

  eat(food){
  	let head = this.body[0];
    if (head.x == food.x && head.y == food.y){
    	print("FOOD EATEN");
      this.grow();
      return true;
    }
    return false;
  }
  
  grow(){
  	let tail = this.body[this.body.length-1].copy();
    this.body.push(tail);
  }
  
  endGame() {
    let head = this.body[0];
    if(head.x > w-1 || head.x < 0 || head.y > h-1 || head.y < 0) {
       return true;
    }
    for(let i = 1; i < this.body.length; i++) {
    	let part = this.body[i];
      if(part.x == head.x && part.y == head.y) {
      	return true;
      }
    }
    return false;
  }
  
}