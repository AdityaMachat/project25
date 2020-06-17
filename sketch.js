
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	
	paper=new Papper(200,600,20);
	ground=new Ground (width/2,height-50,width,5);
	box1=new Ground (600,height-50,200,10);
	box2= new Ground(700,height-100,10,100);
	box3= new Ground(500,height-100,10,100);
	box4=new dustbin(600,600,200,90);


	Engine.run(engine); 
}
  

function draw() {
  background(200);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  paper.display();
  ground.display(); 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:45,y:-65});
		

	}
}



