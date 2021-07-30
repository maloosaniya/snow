

function preload(){
  bg_ing=loadImage("snow3.jpg")
snowImage=loadImage("snow4.webp")  
}
function setup() {
  createCanvas(800,400);
 back= createSprite(400, 200, 50, 50);

}

function draw() {
  background(255,255,255); 
  if(frameCount%100===0){

  
  snow=createSprite(random(100,1200))
  
  snow.addImage(snowImage) 
  snow.velocityY=5;
  snow.scale=0.2;
  }
  back.addImage(bg_ing)
  drawSprites();
}