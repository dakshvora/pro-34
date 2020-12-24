
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var roof;
var b1, b2, b3, b4;
var c1,c2,c3,c4
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
roof = new Roof(400,100,400,50);

b1 = new Ball(250,500,50,50);
b2 = new Ball(350,500,50,50);
b3 = new Ball(450,500,50,50);
b4 = new Ball(550,500,50,50);

c1 = new Chain(b1.body,{x:250,y:100});
c2 = new Chain(b2.body,{x:350,y:100});
c3 = new Chain(b3.body,{x:450,y:100});
c4 = new Chain(b4.body,{x:550,y:100});


	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("white");
  
roof.display();  
 b1.display();
 b2.display();
 b3.display();
 b4.display();
 c1.display();
 c2.display();
 c3.display();
 c4.display();
}

function keyPressed(){
if(keyCode === UP_ARROW){
Matter.Body.applyForce(b1.body,b1.body.position,{x:-50,y:-50});
}


}

