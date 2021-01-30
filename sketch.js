
var car,car2,car3;
var wall;
var weight,speed;
function setup() {
  createCanvas(1600,400); 

   weight=random(400,1500);
   speed=random(30,95);

 wall= createSprite(1000, 200, 60, 400);
 wall.shapeColor="grey";
 car= createSprite(50, 100, 60, 30);
 car.shapeColor="white";
 

}

function draw() {
  background(0);  

car.velocityX=speed;
var deformation=(0.5*weight*speed*speed)/22500;
if(car.collide(wall))
{
if(deformation<100){
 car.shapeColor=" green";
}
 else if(deformation<180&&deformation>100){
  car.shapeColor="yellow";
 }
 else if(deformation>180){
  car.shapeColor="red";
}
}
  drawSprites();
}
