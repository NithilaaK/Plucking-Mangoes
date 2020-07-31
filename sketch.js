const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy, boy_img;

function preload() {
	boy_img = loadImage("images/boy.png");
}

function setup() {
	createCanvas(1270, 600);

	boy = createSprite(300, 450, 100, 50);
	boy.addImage(boy_img);
	boy.scale = 0.15;	

	engine = Engine.create();
	world = engine.world;

	tree = new Tree(1000, 300);

	ground = new Ground(700, 550, 1400, 100);

	mango1 = new Mango(1200, 250, 35);
	mango2 = new Mango(1100, 250, 50);
	mango3 = new Mango(900, 200, 25);
	mango4 = new Mango(1000, 150, 42.5);
	mango5 = new Mango(1123, 170, 25);
	mango6 = new Mango(800, 210, 40);
	mango7 = new Mango(900, 100, 25);
	mango8 = new Mango(1200, 150, 44.5);
	mango9 = new Mango(1100, 100, 35);
	mango10 = new Mango(950, 300, 44.5);
	mango11 = new Mango(1025, 50, 34.5);
	stone = new Stone(235, 420, 25, 12.5);
	sling = new SlingShot(stone.body, {x: 225, y: 365});

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(54, 204, 255);

  ground.display();

  drawSprites();

  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  sling.display();
  stone.display();

  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);
  detectCollision(stone, mango6);
  detectCollision(stone, mango7);
  detectCollision(stone, mango8);
  detectCollision(stone, mango9);

  function detectCollision(iStone, iMango) {

    mangoPosition = iMango.body.position;
    stonePosition = iStone.body.position;
  
    var distance = dist(stonePosition.x, stonePosition.y, mangoPosition.x, mangoPosition.y);
  
    if (distance <= iMango.r + iStone.r) {
        Matter.Body.setStatic(iMango.body, false);
    }
  }

  textSize(30);
  fill("black");
  text("Press 'space' for a second chance to play!", 10, 30);
}

function mouseDragged() {
    Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY})
}

function mouseReleased() {
    sling.fly();
}

function keyPressed() {
	if (keyCode === 32) {
		Matter.Body.setPosition(stone.body, {x: 225, y: 365});
		sling.attach(stone.body);
	}
}