var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup,
 score = 0;

var bananaGroup;
var obstacleGroup;

var survivalTime=0;




function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
   //Canvas
  createCanvas(400,400);
  
  //creating monkey
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x)
  
   obstacleGroup = createGroup();
  bananaGroup = createGroup();


  
}


function draw() {
  background(255);
  
  
  
  stroke("black");
  textSize(20);
 fill("black");

  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time : "+survivalTime,100,50);
  
  if(ground.x<0){
  ground.x=ground.width/2;
    
  }
 console.log(monkey.y)
  
  //When space key is pressed monkey should jump
  if(keyDown("space")&&monkey.y>314){
    monkey.velocityY=-12;
    
  }
  //adding gravity so that monkey can come back to the ground
  monkey.velocityY=monkey.velocityY+0.8;
  
   
  
  
  //colliding monkey with the ground so that it does not fall through it
  monkey.collide(ground);
  
  food();
  Obstacle();
  
  stroke("white")
  textSize(20);
  fill("white");
  text("SCORE:"+score , 500,50);
  
  if(monkey.isTouching(bananaGroup)){
    bananaGroup.destroyEach();
  }

  
  drawSprites();
}

function food(){
  if(World.frameCount%80===0){
     var banana=createSprite(400,200,20,20);
    banana.y=Math.round(random(120,200));
    banana.addImage( bananaImage);
    banana.scale=0.1;
    banana.velocityX=-3;
    banana.lifetime=200;
    bananaGroup.add(banana);
  }
}

function Obstacle()
{
  if (World.frameCount%300===0)
  {
    var obstacle= createSprite(400,340,20,20);
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.2;
    obstacle.velocityX=-3;
    obstacle.lifetime=200;
    obstacleGroup.add(obstacle);
  }
}

