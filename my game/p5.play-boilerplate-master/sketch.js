function setup() {
  createCanvas(1000,400);
  platform1=createSprite(30,250 , 100,350)
  platform2=createSprite(200,275 , 100,350)
  platform3=createSprite(400,150 , 100,469)
  platform4=createSprite(570,150 , 100,350)
  platform5=createSprite(775,275 , 100,350)
  player=createSprite(30,30 , 20, 20);
floor=createSprite(400,400,1000,10)
wall1=createSprite(0,200,10,400)
wall2=createSprite(800,200,10,400)
celling=createSprite(400,0,800,10)
door=createSprite(800,25,15,50)
door.shapeColor="yellow"
player.shapeColor="pink"
player.debug=true
floor.debug=true
}


function draw() {
  background(0);  
  drawSprites();
  text(mouseX+','+mouseY,mouseX,mouseY)

  player.velocityY=player.velocityY+0.6
  platform5.velocityY=1

  player.collide(celling)
  player.collide(wall1)
  player.collide(wall2)
  player.collide(floor)
  player.collide(platform1)
  player.collide(platform2)
  player.collide(platform3)
  player.collide(platform4)
  player.collide(platform5)

if(keyDown(LEFT_ARROW)){
  player.x=player.x-10
}
if(keyDown(RIGHT_ARROW)){
  player.x=player.x+10
}
if(keyDown(UP_ARROW)){
  player.y=player.y-10
}
if(keyDown(DOWN_ARROW)){
  player.y=player.y+10
}
if(keyDown("SPACE")){
  player.x=30
  player.y=30
}
if(platform5.y<=600){
  platform5.velocityY=-1
}
}