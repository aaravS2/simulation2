var car,wall,speed,weight;


function setup() {
  createCanvas(1600,400);
  car=createSprite(100, 200, 50, 10);
  wall=createSprite(1500,200,10,100);
  speed=random(55,90);
  weight=random(900,2000);
}

function draw() {
  background(80,80,80);
  wall.shapeColor="white";
  switch(speed){
case 1:speed=90;
break;
case 2:speed=72;
break;
case 3:speed=63;
break;
case 4:speed=69;
break;
case 5:speed=80;
break;
case 5:speed=83;
break;
case 6:speed=79;
break;
case 7:speed=59;
break;
case 35:speed=50
default:break;
  }
switch (weight) {
  case 1:weight=1050;
    break;
case 2:weight=1000;
break;
case 3:weight=1789;
break;
case 4:weight=2000;
break;
case 5:weight=1598;
break;
case 6:weight=1237;
break;
case 7:weight=1108;
break;
case 8:weight=1397;
break;
case 9:weight=1999;
break;
case 1100:weight=1456;
  default:break;
    
}

  car.velocityX=speed;
  if (wall.x-car.x<(car.width+wall.width)/2) {
    var defor=Math.round(0.5*weight*speed*speed/22500);
    car.velocityX=0;
    
    if (defor<80) {
      car.shapeColor="green";
      text("good",700,200);
      
    }
    if (defor>180) {
      car.shapeColor="red";
      text("dangerous",700,200);
      
  
    }
    if (defor<180&&defor>80) {
      car.shapeColor="orange";
      text("average",700,200);
      
      
      
    }
   
    
  }
  
  
  text("deformation:"+defor,800,350);
  text("speed:"+Math.round(speed),1000,350);
  text("weight:"+Math.round(weight),600,350);
  createEdgeSprites(); 
   car.collide(wall);
   
  drawSprites();
}