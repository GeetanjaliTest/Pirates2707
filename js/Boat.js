class Boat {
  //step-4
  constructor(x, y, width, height, boatPos, boatAnimation) {
    var options = {
      restitution: 0.8,
      friction: 1.0,
      density: 1.0,
      label: "boat"
    };
    //step-5
    this.animation = boatAnimation;
    this.speed = 0.05;
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;

    this.boatPosition = boatPos;
    this.image = loadImage("assets/boat.png");
    World.add(world, this.body);
  }

  //step-6
  animate() {
    this.speed += 0.05 % 1.1;
  }

  remove(index) {
      Matter.World.remove(world, boats[index].body);
      boats.splice(index, 1);
    
  }

  display() {
    var angle = this.body.angle;
    var pos = this.body.position;
    //step-7
    var index = floor(this.speed % this.animation.length);
    
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    //step-8
    image(this.animation[index], 0, this.boatPosition, this.width, this.height);
    noTint();
    pop();
  }
}
