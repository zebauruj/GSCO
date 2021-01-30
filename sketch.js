
var car,car2,car3;
var wall;
var weight,speed;
function setup() {
  createCanvas(1600,400); 

   weight=random(400,1500);
   speed=random(30,95);

 wall= createSprite(1500, 200, 60, 400);
 wall.shapeColor="grey";
 car= createSprite(50, 100, 60, 30);
 car.shapeColor="white";
 car2= createSprite(50, 200, 60, 30);
 car2.shapeColor="white";
 car3= createSprite(50, 300, 60, 30);
 car3.shapeColor="blue";

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