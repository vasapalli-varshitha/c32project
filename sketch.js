const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

var ball;

function setup() {
  createCanvas(900,1000);

  engine = Engine.create();
  world = engine.world;
   
  ball = Bodies.circle(500, 450, 25, {restitution:0.9,isStatic:false});
  World.add(world, ball);

  ground=Bodies.rectangle(500, 600,150,150,{isStatic:true})
  World.add(world,ground);

  ground1=Bodies.rectangle(350, 650,250,50,{isStatic:true})
  World.add(world,ground1);

  button=createButton("Click to blow");
  button.position(500,700)
  button.size(50,50);
  button.mouseClicked(blow);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50);
}

function draw() 
{
  background(51);

  ellipse(ball.position.x, ball.position.y, 25)
  rect(ground1.position.x,ground1.position.y,250,50)
  rect(ground.position.x,ground.position.y,150,150)
  
  Engine.update(engine);
}
function blow(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:0.1});
}