var bg
var balloonAnimation
var towers
var birds
var balloon;
var building
var lamp
var bottomObstacleGroup
var topObstaclesGroup
var gameState= 1;
var gameOverImage;
var gameOver;
var resetButtonImage;
var resetButton



function preload()
{
bg=loadImage("assets/bg.png")

balloonAnimation=loadAnimation("assets/balloon1.png", "assets/balloon2.png","assets/balloon3.png")
obstacleBottomImage1=loadImage("/assets/obsBottom1.png")
obstacleBottomImage2=loadImage("/assets/obsBottom2.png")
obstacleBottomImage3=loadImage("/assets/obsBottom3.png")
obstaclesTopImage=loadImage("/assets/obsTop2.png")
gameOverImage=loadImage("/assets/gameOver.png")
resetButtonImage=loadImage("/assets/restart.png")



}

function setup()
{
  createCanvas(600,600)
balloon=createSprite(100,200,30,30)

balloon.addAnimation("balloonMoving",balloonAnimation)
balloon.scale=0.4
bottomObstaclesGroup=new Group();
topObstaclesGroup=new Group();

gameOver= createSprite(325,325,325,325);
gameOver.addImage(gameOverImage)
gameOver.visible=false

resetButton=createSprite(325,360,7,7)
resetButton.addImage(resetButtonImage)
resetButton.visible=false
resetButton.scale=0.4


 
}

function draw()
{
  background(bg)
        if(gameState==1){
          balloon.velocityY=balloon.velocityY+0.5
          spawnBottomObstacles();
          spawnTopObstacles();

            if(keyIsDown(UP_ARROW)){
            balloon.velocityY=-8
            }


            if(balloon.isTouching(bottomObstaclesGroup)|| balloon.isTouching(topObstaclesGroup)){

              gameState=0;
              
              
            }    
            if(balloon.y>650||balloon.y<0){
              balloon.x=150
              balloon.y=325
              gameState=0
            }
            
      }
  else if(gameState==0){
resetButton.visible=true
gameOver.visible=true
bottomObstaclesGroup.setLifetimeEach(-1)
topObstaclesGroup.setLifetimeEach(-1)
bottomObstaclesGroup.setVelocityXEach(0)
topObstaclesGroup.setVelocityXEach(0)
balloon.velocityY=0


  }    

  if(mousePressedOver(resetButton)){
    gameState=1
    bottomObstaclesGroup.setLifetimeEach(0)
topObstaclesGroup.setLifetimeEach(0)
resetButton.visible=false
gameOver.visible=false

  }
drawSprites();



}



function spawnBottomObstacles(){
  if(frameCount%60==0){
randomNumber=Math.round(random(1,4))
  var obstaclesBottom=createSprite(650,510,10,10)
  bottomObstaclesGroup.add(obstaclesBottom)
  obstaclesBottom.velocityX=-5
  obstaclesBottom.scale=0.1
  obstaclesBottom.lifetime=130
switch (randomNumber) {
  
  case 1: obstaclesBottom.addImage(obstacleBottomImage1)
    break;
    case 2: obstaclesBottom.addImage(obstacleBottomImage2)
    break ;
    case 3: obstaclesBottom.addImage(obstacleBottomImage3)
    break;

  
}
}



}
function spawnTopObstacles(){
if(frameCount%60==0){
 var randomYPosition=Math.round(random(25,80))
var obstaclesTop=createSprite(650,randomYPosition,15,15)
topObstaclesGroup.add(obstaclesTop)
obstaclesTop.velocityX=-5
obstaclesTop.scale=0.1
obstaclesTop.addImage(obstaclesTopImage)
obstaclesTop.lifetime=130

}



}