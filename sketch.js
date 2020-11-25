const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies


var engine,world;

var box1
var box2;
function setup() {
  var canvas = createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  
  box1 = Bodies.rectangle(100,100,50,50)
  //console.log(box1)
  World.add(world,box1)

  box2 = Bodies.rectangle(200,200,50,50)
  //console.log(box2)
  World.add(world,box2)
  
}

function draw() {
  background(0,0,0);  
  Engine.update(engine);
  rectMode(CENTER)
  rect(box1.position.x,box1.position.y)
  rect(box2.position.x,box2.position.y)
}