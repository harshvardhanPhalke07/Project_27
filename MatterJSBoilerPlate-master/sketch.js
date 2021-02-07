
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bob_1, bob_2, bob_3, bob_4,bob_5, rope1,rope2,rope3,rope4,rope5
var roof

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
roof=new Roof(700,100,100,20);
	bob_1=new bob(400,200,5)
rope1=new rope(bob_1.body,roof.body, -bobDiameter*2, 0)
bob_2=new bob (410,200,5)
rope2=new rope(bob_2.body,roof.body, -bobDiameter*2, 0)
bob_3= new bob(420,200,5)
rope3=new rope(bob_3.body,roof.body, -bobDiameter*2, 0)
bob_4= new bob(430,200,5)
rope4=new rope(bob_4.body,roof.body, -bobDiameter*2, 0)
bob_5= new bob(440,200,5)
rope5=new rope(bob_5.body,roof.body, -bobDiameter*2, 0)


Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



