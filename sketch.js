const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1,ground2,ground3;
var box1,box2,box3,box4,box5;
var box6,box7,box8,box9;
var box10,box11,box12;
var box13;
var box14,box15,box16,box17,box18;
var box19,box20,box21;
var box22;
var polyIMG;
var sling;

function preload(){
    polyIMG = loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(600,285,200,10);
    ground2 = new Ground(900,195,200,10);
    ground3 = new Ground(750, 390, 1500, 20);

    box1 = new Box(600,260,30,40);
    box2 = new Box(570,260,30,40);
    box3 = new Box(540,260,30,40);
    box4 = new Box(630,260,30,40);
    box5 = new Box(660,260,30,40);

    box6 = new Box(585,220,30,40);
    box7 = new Box(555,220,30,40);
    box8 = new Box(615,220,30,40);
    box9 = new Box(645,220,30,40);

    box10 = new Box(600,180,30,40);
    box11 = new Box(570,180,30,40);
    box12 = new Box(630,180,30,40);

    box13 = new Box(600,140,30,40);

    box14 = new Box (900,170,30,40);
    box15 = new Box(930,170,30,40);
    box16 = new Box(870,170,30,40);
    box17 = new Box(840,170,30,40);
    box18 = new Box(960,170,30,40);

    box19 = new Box(900,130,30,40);
    box20 = new Box(930,130,30,40);
    box21 = new Box(870,130,30,40);

    box22 = new Box(900,90,30,40);

    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon);

    sling = new Sling(this.polygon,{x:150, y:160});

}

function draw(){
    background("black");
    Engine.update(engine);

    ground1.display();
    ground2.display();
    ground3.display();

    fill("blue");
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    fill("cyan");
    box6.display();
    box7.display();
    box8.display();
    box9.display();

    fill("pink");
    box10.display();
    box11.display();
    box12.display();

    fill("lemon");
    box13.display();

    fill("blue");
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();

    fill("cyan");
    box19.display();
    box20.display();
    box21.display();

    fill("lemon");
    box22.display();

    imageMode(CENTER);
    image(polyIMG,polygon.position.x,polygon.position.y,40,40);

    sling.display();

}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
  }
  
  
  function mouseReleased(){
    sling.fly();
  }