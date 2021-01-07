class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }

    //constructor creates rectangular physics engine body
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    //Add current body to our game world
    World.add(world, this.body);
  }

  //Display all the boxes
  display(){

    //Give position to the current object body
    var pos =this.body.position;
    var angle = this.body.angle;

    //push new settings to change the center of an object from 0,0 of canvas 
    //to center of the body
    push();
    translate(pos.x, pos.y);

    //rotate the body by angle
    rotate(angle);
    rectMode(CENTER);
    fill(255);

    //display the box in forn of a rectangle
    rect(0, 0, this.width, this.height);

    //pop the settings after its use
    pop();
  }
};
