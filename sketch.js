var fixedRect, movingRect, car, wall;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  car = createSprite(300, 600, 35,35);
  car.shapeColor = "yellow"
  wall = createSprite(900, 600, 30, 90);
  wall.shapeColor = "grey"
  car.velocityX = 6
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
 if( collisionDetector(car, movingRect)){
   movingRect.shapeColor = "blue"
 }
  
  drawSprites();
}

 function collisionDetector(object1, object2){

  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
  return true;
}
else {
 return false

}
 }