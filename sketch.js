//Global Variable
var monkey,banana,ground,score=0;
var ground_image;
var background;
var bananaGroup;
var stoneGroup;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var restart,gameOver;
var invisibleGround;
var stone;
var PLAY = 1;
var END = 0;
var gamestate = PLAY;

function preload(){

monkeyImage=  loadAnimation ("Monkey_01.png","Monkey_02.png",
"Monkey_03.png","Monkey_04.png","Monkey_04.png", "Monkey_05.png","Monkey_06.png", "Monkey_07.png",          "Monkey_08.png", "Monkey_09.png" )
  
monkeys = loadImage("Monkey_01.png")

  backImage = loadImage("jungle.jpg")
  
  bananaImage = loadImage("banana.png")
  
  stoneImage = loadImage("stone.png")
  
}

function setup() {
  
  createCanvas(400, 400);
  
  background1 = createSprite(200,200,30,30);
  background1.addImage("acb",backImage);
  background1.scale = 1
  
  monkey = createSprite(35,360,50,50);
  monkey.addAnimation("abc",monkeyImage);
  monkey.scale = 0.1;
  monkey.addImage("m",monkeys)
  
  invisibleGround = createSprite(200,380,400,10)
  background1.x = background1.width /2;
  
  invisibleGround.visible = false;
  
  bananaGroup = new Group();
  
  stoneGroup = new Group();

  
}

function draw() {
  
  
     
  background(236);
  
  if(gameState === PLAY){
  
     background1.velocityX = -4;
    
    if (background1.x < 0){
      background1.x = background1.width/2;
    }
  
  
    if(keyDown("space")&&monkey.y>=319.83){
      monkey.velocityY = -15;
    } 

    monkey.velocityY = monkey.velocityY + 0.8

  
  spawnbananas();
  spawnStones();
    
    if(bananaGroup.isTouching(monkey)){
    score = score + 1;
    bananaGroup.destroyEach();
      
      
    
    }
    
    if(stoneGroup.isTouching(monkey)){
      gameState = END;
    }
    
    
    
  }
  if(gameState === END){
  background1.velocityX = 0;
  monkey.velocityY = 0;
  stoneGroup.setVelocityXEach(0);
  bananaGroup.setvelocityXEach = 0;
  stoneGroup.setLifetimeEach(-1)
  monkey.changeImage("m",monkeys)
  
  
  
  }
  
  drawSprites();
  
   stroke("white");
   textSize(20);
   fill("white");
  text("Score: "+ score, 300,100);
  
 
  
    monkey.collide(invisibleGround);
  
  switch(score){
    case 10: monkey.scale=0.12;
            break;
    case 20: monkey.scale=0.14;
            break;       
    case 30: monkey.scale=0.16;
            break;  
    case 40: monkey.scale=0.18;
            break;
   default:  break;
  
  
  
  }
 
  
  
  
  
  
  
  
}

function spawnbananas(){
  if(World.frameCount % 80 === 0) {
    
  banana = createSprite(400, 200,20,20);
    
  banana.y=random(150,300);
    
  banana.addImage("Bana",bananaImage);
    
  banana.scale=0.05;
    
  banana.velocityX=-4;
    
  banana.lifetime = 150;
    
  bananaGroup.add(banana)
    
  
  
  } 
  }

function spawnStones() {
  if(World.frameCount % 130 === 0) {
    
    stone = createSprite(400,370,10,40);
    
    stone.addImage("Ston",stoneImage);
    
      stone.velocityX = -4 ;
    
    stone.scale = 0.1;
    
    stone.lifetime = 200;
    
    stoneGroup.add(stone);
    }
}

