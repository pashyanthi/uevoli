const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
//var engine,world;
var stage=0;
var ballIMG,brickIMG,brick;
var paddle,paddleIMG;
var ground,groundIMG;
 
var form;
var canvas;
var ball;
var nextStage;
var brick1;
var brick2;
var brick3;
var brick4;
var check=0;
var PLAY=1;
var END=0;
var gameState=PLAY;
var score=0;

function preload(){
	ballIMG=loadImage("ball.png")
    brickIMG=loadImage("brick.png")
    paddleIMG=loadImage("paddle.png")
    groundIMG=loadImage("line.png")
}
function setup(){
 //   engine = Engine.create();
   // world = engine.world;
canvas=createCanvas(displayWidth-30,displayHeight-30)
form= new Form();

  ball=createSprite(50,170,40,40);

  ball.addImage(ballIMG);
  ball.scale=0.16;
  ball.visible=false;
  paddle=createSprite(600,535,20,20);
  paddle.addImage(paddleIMG);
   paddle.scale=0.2;
paddle.visible=false

ground=createSprite(0,650,50000,20);
ground.shapeColor="black"
 ground.scale=0.2;
ground.visible=false

   brick1=new Group();
   brick2=new Group();
   brick3=new Group();
   brick4=new Group()
   brick5=new Group();
   brick6=new Group();

}





function draw(){
    
background("pink")
edges=createEdgeSprites();

form.display();
//nextStage.display()
console.log(stage)
if(stage===0){
    form.display();
    
}else if(stage===2){
  ball.visible=true;
 // paddle.visible=true;
  ground.visible=true;
  var rand=Math.round(random(0,3));
  if(gameState===PLAY){

  if(frameCount%90===0){
    if(rand===0){
      spawnB1();
    //  spawnB2();
    }else if(rand===1){
      spawnB2();
     // spawnB3();
    }else if(rand===2){
      spawnB3();
      //spawnB4();
    }else if(rand===3){
      spawnB4();
    //  spawnB5();
    }
  }
    if(keyDown("space")){
      ball.velocityY=-9
    }
    
   ball.velocityY=ball.velocityY+0.4
    ball.bounceOff(brick1)
    ball.bounceOff(brick2)
    ball.bounceOff(brick3)
    ball.bounceOff(brick4)
 if(ball.isTouching(brick1)){
 score=score++
 }   
 

    
    if(ball.isTouching(edges[0])){
      ball.bounceOff(edges[0])
    }
    if(ball.isTouching(edges[1])){
      ball.bounceOff(edges[1])
    }
    if(ball.isTouching(edges[2])){
      ball.bounceOff(edges[2])
    }
   if(ball.isTouching(ground)){
      brick1.destroyEach();
      brick2.destroyEach();
      brick3.destroyEach();
      brick4.destroyEach();
    check=1
    gameState=END;
  //ball.visible=false;
  //ball.x=10000000;
   }
  }
else if(gameState===END){
  brick1.setVelocityXEach=0;
  brick2.setVelocityXEach=0;
  brick3.setVelocityXEach=0;
  brick4.setVelocityXEach=0;

}
  }

  
 


  drawSprites();
if(check===1){
  text("Oh No! You Lose",displayWidth-240,500)
}
text("Score:"+ score,800,200)
}




function spawnB1(){
  var b1=createSprite(0,random(200,470),5,20);
  b1.addImage(groundIMG);
  b1.scale=0.6
  //b1.debug=true;
  b1.setCollider("rectangle",0,0,10,10)
  b1.velocityX=6
  b1.lifetime=500;
  brick1.add(b1)
}
function spawnB2(){
  var b2=createSprite(30,random(200,500),5,20);
  b2.addImage(groundIMG);
  b2.scale=0.6
//  b2.debug=true;
  b2.setCollider("rectangle",0,0,10,10)
  b2.velocityX=6
  b2.lifetime=500;
  brick2.add(b2)
}
   function spawnB3(){
  var b3=createSprite(70,random(230,520),5,20);
  b3.addImage(groundIMG);
  b3.scale=0.6
 // b3.debug=true;
  b3.setCollider("rectangle",0,0,10,10)
  b3.velocityX=6
  b3.lifetime=500;
  brick3.add(b3)
}
  function spawnB4(){
  var b4=createSprite(90,random(100,550),5,20);
  b4.addImage(groundIMG);
  b4.scale=0.6
 // b4.debug=true;
  b4.setCollider("rectangle",0,0,10,10)
  b4.velocityX=6
  b4.lifetime=500;
  brick4.add(b4)
}
  
/*function spawnB5(){
  var b5=createSprite(80,random(100,500),10,10);
  b5.addImage(groundIMG);
  
  b5.velocityX=6
  b5.lifetime=500;
  brick5.add(b5)
}

function spawnB6(){
  var b6=createSprite(5,random(100,300),10,10);
  b6.addImage(groundIMG);

  b6.velocityX=6
  b6.lifetime=500;
  brick6.add(b6)
}*/



