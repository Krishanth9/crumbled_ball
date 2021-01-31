var ball,ground,b1,b2,b3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;


function setup() {
	createCanvas(1250, 700);

    
	engine = Engine.create();
	world = engine.world;
	ground=Bodies.rectangle(600,690,1250,10,{isStatic:true})
	World.add(world,ground)
	b1=Bodies.rectangle(900,680,250,20,{isStatic:true})
	World.add(world,b1)
	b2=Bodies.rectangle(785,640,20,100,{isStatic:true})
	World.add(world,b2)
	b3=Bodies.rectangle(1015,640,20,100,{isStatic:true})
	World.add(world,b3)
	//Create the Bodies Here.
    ball1=new paper(100,600,40)
   
  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)
  rect(b1.position.x,b1.position.y,250,20)
  rect(b2.position.x,b2.position.y,20,100)
  rect(b3.position.x,b3.position.y,20,100)
  rect(ground.position.x,ground.position.y,1250,10)
  ball1.display()
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:75,y:-75})
	}
}



