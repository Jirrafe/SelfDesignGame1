
var bg ,bgimg, boy, boyimg,ghost,ghostimg,invisibleGround, candy,candyimg;

function preload(){ // load images, animations and sound files
  bgimg = loadImage("Halloween.jpg");

  boyimg = loadAnimation("Boy 1.png","Boy 2.png","Boy 3.png","Boy 4.png","Boy 5.png", "Boy 6.png");

  ghostimg = loadAnimation("ghost1.png","ghost2.png","ghost3.png")

  candyimg = loadImage("candy.png");

 
}

function setup(){ // create sprites, add animation and images, executes its st. only once
  createCanvas(800,400)

  bg = createSprite(400,200,800,400)
  bg.addImage(bgimg)
  bg.scale = 1.38
  bg.velocityX = -5

  
  //create a trex sprite
 boy = createSprite(100,350,40,80);
 boy.addAnimation("running", boyimg);
 boy.scale = 0.2;

 

 invisibleGround = createSprite(400,390,800,10);
  invisibleGround.visible = false;
}

function draw(){
  background("black")
  spawnObstacles();
  spawnCandy();
  drawSprites();
 
  if (bg.x < 0){
    bg.x = 390;

}
if(keyDown("space")&& boy.y >= 250) {
  boy.velocityY = -12;
  
}

//add gravity
boy.velocityY = boy.velocityY + 0.8
boy.collide(invisibleGround)




}
function spawnObstacles(){
  if (frameCount % 100 === 0) {
    ghost = createSprite(790,350,40,10);
    ghost.addAnimation("greenghost",ghostimg);
    ghost.scale = 0.7;
    ghost.velocityX = -3;
    
     //assign lifetime to the variable
    ghost.lifetime = 450;
    
    //adjust the depth
    //cloud.depth = trex.depth;
    //trex.depth = trex.depth + 1;
    
    //add each cloud to the group
    //cloudsGroup.add(cloud);
  }
}
function spawnCandy(){
  if (frameCount % 180 === 0) {
    candy = createSprite(790,250,40,10);
    candy.addAnimation("candy",candyimg);
    candy.scale = 0.3;
    candy.velocityX = -3;
    candy.lifetime = 450;
  }




  }