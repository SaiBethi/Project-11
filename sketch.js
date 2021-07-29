function preload(){
  //pre-load images
pathImage=loadImage("path.png");
Jaxonrunning=loadAnimation("Runner-1.png","Runner-2.png")
}



function setup(){
  createCanvas(400,400);
  //create sprites here
path=createSprite(200,200)
path.addImage("P",pathImage);
path.scale=1.2;
Jaxon=createSprite(200,360,30,30);
Jaxon.addAnimation("J",Jaxonrunning);
Jaxon.scale=0.1;
boundary1= createSprite(0,0,100,800);
boundary1.visible=false;
boundary2=createSprite(400,0,100,800);
boundary2.visible= false;
}

function draw() {
  background(0);
  Jaxon.x=mouseX
  path.velocityY=4;
  if (path.y>400) {
  path.y=height/2;
  }
  edge=createEdgeSprites()
  Jaxon.collide(edge[3]);
  Jaxon.collide(boundary1);
  Jaxon.collide(boundary2);
  drawSprites()
 
}
