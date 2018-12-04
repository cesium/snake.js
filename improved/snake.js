class Snake {
  
  constructor() {
  	this.body = [];
    this.body[0] = createVector(floor(w/2), floor(h/2));
    this.xdir = 0;
    this.ydir = 0;
  }
  
  update() {
  	let head = this.body[0].copy();
    this.body.pop();
    head.x += this.xdir;
    head.y += this.ydir;
    this.body.unshift(head);
  }
  
  grow() {
  	let head = this.body[0].copy();
    this.body.unshift(head);
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
  
  eat(pos) {
    let head = this.body[0]
    if(head.x == pos.x && head.y == pos.y) {
      this.grow();
      return true;
    }
    return false;
  }
  
  show() {
  	for(let i = 0; i < this.body.length; i++) {
    	fill(0);
      rect(this.body[i].x, this.body[i].y, 1, 1)
    }
  }

}//