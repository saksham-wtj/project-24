
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball



function preload() {
  
}

function setup() {
	createCanvas(800, 700);
  
 ball = new Paper(400,650,40)

	engine = Engine.create();
	world = engine.world;
   
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ball.display();
 
 

}


