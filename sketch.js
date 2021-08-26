const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var tower;
var cannon

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
 
}
function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  angle=-PI/4
  tower = new Tower(80, 350, 150, 500);
  cannon=new Cannon(110,50,120,50,angle)


  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  image(backgroundImg,0,0,width,height)
  Engine.update(engine);
    tower.display();
 cannon.display()
 
}

