
var trex ,trex_running;
var ground, ground_image;
var invisibleground;
function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")
  ground_image=loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200)
  //create a trex sprite
  trex= createSprite(50, 180, 40, 40)
  trex.scale = 0.7 
  trex.addAnimation("running",trex_running)
  ground=createSprite(55, 180, 600, 20)
  ground.addImage(ground_image)
  ground.velocityX= -6.5
  // invisble ground
  invisibleground=createSprite(55,195, 100, 15)
  invisibleground.visible=false
}

function draw(){
  background("pink")
  if(keyDown("space") && trex.y>150 ){
    trex.velocityY= -4  
  }
  if(ground.x<0){
    ground.x= ground.width/2
  }
  trex.velocityY= trex.velocityY+0.05
  trex.collide(invisibleground)
  drawSprites()
}
