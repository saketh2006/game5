const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var ninja,ninjaImage
var engine, world;
var block1,block2;

function preload(){
  
  ninjaImage=loadImage("images/ninja 2.png");
}



function setup(){

createCanvas(900,600);
//background1 = createSprite(350,300,900,600);
//background1.addImage(backgroundImage);
//background1.scale = 1.5

engine = Engine.create();
world = engine.world;
//box1= new Box(350,400,200,10)
//box2 = new Box(600,360,200,10);
//box3 = new Box(100,300,100,10);
//box4= new Box(700,380,200,10);



box1=createSprite(350,400,200,10);
box2=createSprite(600,360,200,10);
box3=createSprite(100,300,100,10);
box4=createSprite(700,380,200,10);






ninja=createSprite(85,270,30,30)
ninja.addImage(ninjaImage);
ninja.scale=0.3;
}
function draw(){
background("pink");
// background.velocityX=-2;
Engine.update(engine);
text(mouseX + "," + mouseY,mouseX,mouseY);
if(keyWentDown("space")){
  ninja.velocityY=-10;
}
ninja.velocityY=ninja.velocityY+0.5;
if(ninja.isTouching(box1)){
  ninja.bounceOff(box1)
  }
  if(ninja.isTouching(box3)){
    ninja.bounceOff(box3)
    }
    if(ninja.isTouching(box2)){
      ninja.bounceOff(box2)
      }
      if(ninja.isTouching(box4)){
        ninja.bounceOff(box4)
        }
        if(keyWentDown(RIGHT_ARROW)){
      ninja.x+=5;
        }
        
//if (background.x < 10){
 // background.x = 200;
//}
spawnvs();
drawSprites();
//box1.display();
//box2.display();
//box3.display();
//box4.display();
      }
function spawnvs() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var vs = createSprite(600,400,40,10);
    vs.y = Math.round(random(300,500));
    //vs.addImage(cloudImage);
    //vs.scale = 0.5;
    vs.velocityX = -3;
    
  
    vs.lifetime = 300;
    
    
    //vs.depth = trex.depth;
   // trex.depth = trex.depth + 1;
    
    
   // cloudsGroup.add(cloud);
  }
}

