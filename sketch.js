var bgImg;
var player,playerImg;
var obstacle,obstacleImg;
var gameOverImg;


function preload(){
bgImg = loadImage("assets/bg2.jpg")
playerImg=loadImage("assets/Rocket (2).png")
obstacleImg=loadImage("assets/obsTop2.png")
gameOverImg=loadImage("assets/gameOver.png")
}

function setup(){
createCanvas(1200,600);

player= createSprite(600,550);
player.addImage(playerImg);

obstacle= createSprite(1100,100);
obstacle.addImage(obstacleImg);
obstacle.scale=0.2;
obstacle.velocityX=-2;
}

function draw() {
  
  background(bgImg);
    
  if(keyCode===UP_ARROW){
player.positionY+=5;
}

if(keyCode===LEFT_ARROW){
  player.positionX-=5;
  }

  if(player.isTouching(obstacle)){
    addImage(gameOverImg);
    player.x=600;
    player.y=550;
  }
          
   
        drawSprites();
        
}