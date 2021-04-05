var bullet,wall;
var speed,weight,thickness;

function setup() {
  createCanvas(1600,400);
  bullet= createSprite(50,200,50,50);
   bullet.shapeColor = "white";
  wall = createSprite(1500,200,60,height/2);
  speed = random(55,90);
  weight = random(400,1500);
  thickness = random(22,83);
  bullet.velocityX = speed; 
}



function draw() {
  background("black")
  if (hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    var damage= 0.5*weight*speed*speed/(thickness*thickness*thickness );
if(damage>10){
  wall.shapeColor = "brown";
}
if(damage<<10){
  wall.shapeColor = "orange";
}
  }
  
  drawSprites();

}
function hasCollided(lbullet,lwall){
bulletRightEdge = lbullet.x + lbullet.width;
wallLeftEdge = lwall.x;
if (bulletRightEdge>=wallLeftEdge){
  return true
}
return false;
}

  
  
