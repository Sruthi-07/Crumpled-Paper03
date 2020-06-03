var paper, ground;
var block1, block2, block3;
var binImage;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

function preload(){
    binImage = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1000, 400);
	engine = Engine.create();
	world = engine.world;
    
	ground = new Ground(width/2,height-25,width,15);
	paper = new Paper(100,height-30,35,35);
	bin2 = new Bin(770, height-85, 40, 100);
	bin3 = new Bin(925, height-85, 40, 100);
	bin1 = new Bin(847.5, height-50, 144, 30);

	launcher = new Launcher(paper.body,{x: 200, y:100});
    
	Engine.run(engine);
}

function draw() {
	
	Engine.update(engine);
	background("white");
    
	ground.display();
	paper.display();
	//bin2.display();
	//bin3.display();
	//bin1.display();
	imageMode(CENTER);
	image(binImage,847.5, height-80, 144, 100);
	launcher.display();
}

//function keyPressed(){
//	if(keyCode === UP_ARROW){
//		Body.applyForce(paper.body, paper.body.position,{x:+70, y:-70});
//	}
//}

function mouseDragged(){
    Matter.Body.setPosition(paper.body, {x:mouseX, y:mouseY});
}

function mouseReleased(){
    launcher.fly();
}




