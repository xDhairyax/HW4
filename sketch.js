var bullet,weight,speed;
var wall,thickness,damage;

function setup() {
  createCanvas(1600,400);
  
  thickness=random(52,83);
  weight=random(30,52);
  speed=random(223,321);

  wall=createSprite(1000,200,thickness,height/2);
  bullet=createSprite(100,200,10,10);

}

function draw() {
  background("black");  
 
bullet.velocityX=speed;

if(bullet.x-wall.x<wall.width/2+bullet.width/2 &&
  wall.x-bullet.x<wall.width/2+bullet.width/2 &&
  bullet.y-wall.y<wall.height/2+bullet.height/2 &&
  wall.y-bullet.y+wall.height/2+bullet.height/2){
    damage=0.5 * weight * speed * speed/thickness * thickness * thickness;
    bullet.velocityX=0;
  }

  if(damage>12.43){
    wall.shapeColor="red";
  }
  if(damage<12.43){
    wall.shapeColor="green";
  }

  drawSprites();
}