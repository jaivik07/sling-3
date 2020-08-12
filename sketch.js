const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot,stone;
var score = 0
function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    //pig1 = new Pig(810, 350);
  //  log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box8= new Box(700,230,70,70);
    box4 = new Box(920,240,70,70);
    box7 = new Box(920,230,70,70);
   // pig3 = new Pig(810, 220);

   // log3 =  new Log(810,180,300, PI/2);
   // box6 = new Box(810,150,70,70)
   // box5 = new Box(810,160,70,70);
   // log4 = new Log(760,120,150, PI/7);
   // log5 = new Log(870,120,150, -PI/7);

    stone = new Stone(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(stone.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    fill("white")
    text("score"+score,width-300,50)

    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box1.score()
    box2.display();
    box2.score()
   ground.display();
   // pig1.display();
    //log1.display();

    box3.display();
    box3.score();
    box4.display();
    box4.score();
    //pig3.display();
    //log3.display();

    //box5.display();
   
   // log4.display();
   // log5.display();
  box8.display();
  box8.score(); 
   box7.display();
   box7.score(); 
  stone.display();
    platform.display();
    //log6.display();
    slingshot.display(); 
    //box6.display();
   
    keyPressed(); 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
    if(keyCode===32){
    slingshot.attach(stone.body)
        }
    }

    async function getTime(){
        var response =await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
        var responseJSON = await response.json()
        var dt =responseJSON.datetime
        var hour = dt.slice(11,13)
       
        if(hour >= 06 && hour<=19 ){
            bg="sprites/bg.png"
        }
        else{
            bg="sprites/bg2.jpg"
        }
        backgroundImg=loadImage(bg)
    }
    