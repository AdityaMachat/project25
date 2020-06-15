var ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
//function preload()
//{}
var paper;
function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	
	paper=new Papper(200,600,20);
	ground=new dustbin(width/2,height-50,width,5);
	box1=new dustbin(600,height-50,200,20);
	box2=new dustbin(700,height-90,20,100);
    box3=new dustbin(500,height-90,20,100);
	Engine.run(engine); 
}
  

function draw() {
  background(0);
  
  paper.display();
  box1.display();
  box2.display();
  box3.display();
  ground.display(); 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:45,y:-65});
		console.log(paper.Body)

	}
}



