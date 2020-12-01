
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var block1,block2,block3;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	paper = new Paper(100,200);
	ground = new Ground(700,480,1400,5);
	block1 = new Block(905,360,10,110);
	block2 = new Block(1065 ,360,10,110);
	block3 = new Block(895,280,200,200);
}


function draw() {
  rectMode(CENTER);
  background('red');
  Engine.update(engine);
  
 paper.display();
 ground.display();
 block1.display();
 block2.display();
 block3.display();
}

function keyPressed(){
if (keyCode === UP_ARROW){
 Matter.Body.applyForce(paper.body,paper.body.position, {x:520,y:-550});
} 
}

