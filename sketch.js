var bullet;
var wall;
var speed;
var weight;
var thickness;


function setup(){
  createCanvas(1600,400);
    bullet = createSprite(50,200,50,50);
    bullet.shapeColor = "white";
    wall = createSprite(1200,200,thickness,height/2);
    background(0);


}

function draw(){
  speed = random(55,90);
  weight = random(400,1500);
  bullet.velocityX = speed;
  if(wall.x - bullet.x < (bullet.width + wall.width/2)){
    bullet.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22509;
    if(deformation>180){
      bullet.shapeColor = color(255,0,0);
    }
    if(deformation < 180 && deformation > 100){
      bullet.shapeColor = color(230,230,0);
    }
    if(deformation < 100){
      bullet.shapeColor = color(0,255,0);

    }

  }
  thickness = random(22,83);
  wall = random(30,52);
  speed = random(223,321);
  drawSprites();
}

function hascoll(bullet,wall){
  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;
  if(bulletRightEdge>= wallLeftEdge){
    return true;
  }
  return false;

  if(hascoll(bullet,wall)){
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thicknes * thickness * thickness);

    if(damage > 10){
      wall.shapeColor = color(255,0,0);
    }

    if(damage < 10){
      wall.shapeColor = color(0,255,0);
    }

  

}

}