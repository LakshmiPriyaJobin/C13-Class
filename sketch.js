var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloud;
var r
var cloudImg;
var cactus;
var c1Img,c2Img,c3Img,c4Img,c5Img,c6Img;
var trex_score = 0;

function preload(){
  trex_running = loadAnimation("trex1.png","trex2.png","trex3.png");

  
  groundImage = loadImage("ground2.png");
  
 cloudImg = loadImage('cloud.png');
  
c1Img = loadImage('obstacle1.png');
c2Img = loadImage('obstacle2.png');
c3Img = loadImage('obstacle3.png');
c4Img = loadImage('obstacle4.png');
c5Img = loadImage('obstacle5.png');
c6Img = loadImage('obstacle6.png');


}


function setup() {

  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  //create a ground sprite
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  //creating invisible ground
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
   
  // r = Math.round(random(100, 300));
 // r = round(random(100, 300));
 //  console.log(r)
 
}

function draw() {
  //set background color
  background(180);

  //score display
  fill('black')
  textSize(15)
  text('score: ' + trex_score,500,20);

  //logic for the score
  trex_score = trex_score + Math.round(frameCount/60);
  
  
  // jump when the space key is pressed
  if(keyDown("space")&& trex.y >= 148) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  //stop trex from falling down
  trex.collide(invisibleGround);
  
  //call the function of spawn clouds
  spawnCloud();

  //call th obstacles
  spawnObstacles();
  //console.log(frameCount)
  drawSprites();
  
}


//user defined 
function spawnCloud()
{
  if(frameCount% 60 === 0)
  {
    //cloud = createSprite(600,round(random(10, 100)),20,20);
    cloud = createSprite(600,10,20,20) 
    cloud.velocityX = -3;
    cloud.addImage(cloudImg);
    cloud.scale = 0.5
    cloud.y = Math.round(random(10,100))
    console.log('cloud depth: ', cloud.depth);
    console.log('trex depth: ', trex.depth);
    



    trex.depth = cloud.depth +1;
    cloud.lifetime = 210;

    
  }

}

function spawnObstacles()
{
  if(frameCount % 80 === 0)
  {
    cactus = createSprite(600,170,10,10);
    cactus.velocityX = -3;

     //random num 
     var r = Math.round(random(1,6))
     switch(r)
     {
        case 1 : cactus.addImage(c1Img);
                  break;

         case 2 : cactus.addImage(c2Img);
                  break;

         case 3 : cactus.addImage(c3Img);
                  break;
                  
          case 4 :cactus.addImage(c4Img)  ;
                  break;
          
          case 5 :cactus.addImage(c5Img);
                  break;

           case 6 : cactus.addImage(c6Img)   ;
                    break;
                        

          default : break;

     } //closing of switch

     cactus.scale = 0.5;
     cactus.lifetime = 200;

  }

 
}
