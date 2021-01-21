
class Box{
  constructor(x, y, width, height) {
    var options = {
       'isStatic':false,
        'restitution':0.8,
       // 'friction':1.0,
        //'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
   // this.image = loadImage("sprites/base.png");
    World.add(world, this.body);
    this.Visiblity = 255;
  }
  display(){
 //   var angle = this.body.angle;
// console.log(this.body.speed);
 if(this.body.speed < 3){
    push();
    fill("pink")
    translate(this.body.position.x, this.body.position.y);
   // rotate(angle);
   // imageMode(CENTER);
    rect( 0, 0, this.width, this.height);
    pop();
 }
 else{
  World.remove(world, this.body);
  push();
  this.Visiblity = this.Visiblity - 5;
  tint(255,this.Visiblity);
  //rect( this.body.position.x, this.body.position.y, 30, 40);
  pop();
}
  }

  score(){
    if(this.Visiblity<=0 && this.Visiblity >=-1005){
      score++;
    }
  }
       
      }
