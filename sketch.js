var mar,navio;
var marImagem,navioImagem;

function preload(){
  marImagem = loadImage("sea.png");
  navioImagem = loadAnimation("ship-1.png","ship-2.png")

}

function setup(){
  createCanvas(400,400);
  background("black");

 
  mar=createSprite(400,200);
  mar.addImage(marImagem);
  mar.velocityX = -5;
  mar.scale=0.3;

  
  navio = createSprite(130,200,30,30);
  navio.addAnimation("movingShip",navioImagem);
  navio.scale =0.25;
  
}

function draw() {
  background(0);
  mar.velocityX = -3;

  

  if(mar.x < 0){
    mar.x = mar.width/8;
  }
    
  drawSprites();
}