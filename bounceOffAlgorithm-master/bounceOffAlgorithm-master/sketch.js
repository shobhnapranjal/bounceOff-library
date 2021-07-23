var fixedRect, movingRect;
var fixedRect2, fixedRect3;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  fixedRect2=createSprite(0,500,100,50)
   fixedRect3=createSprite(800,500,100,50)
   fixedRect2.velocityX= 5
   fixedRect3.velocityX=-5
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
  bounceOff(fixedRect,fixedRect3)

 
  drawSprites();
}

