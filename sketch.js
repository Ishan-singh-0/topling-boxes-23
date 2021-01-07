const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    //1.call constructor of box class to create box1 and box2
    box1 = new Box(200,300,50,50);
    box2 = new Box(240,100,50,100);

    //2.call constructor of ground class to create ground
    ground = new Ground(200,height,400,20)
}

function draw(){
    background(0);

    //3. Updating engine every time draw runs
    Engine.update(engine);

    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);

    //4.Display box1 box2 and ground
    box1.display();
    box2.display();
    ground.display();
}