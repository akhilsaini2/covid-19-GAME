var PLAY = 1;
var END = 2;
var gameState = PLAY;
var man,manImage;
var mask,maskImage;
var vaccine,vaccineImage;
var sanitizer,snitizerImage;
var virus,virusImage;
var backGround,bg,ground;
var immunity = 100;
var virusGroup,vaccineGroup,maskGroup,sanitizerGroup;
var restart,restartImage,gameOver,gameOverImage;
function preload(){
maskImage = loadImage("mask.png");
vaccineImage = loadImage("vaccine.png");
sanitizerImage = loadImage("sanitizer.png");
virusImage = loadImage("virus.png");
bg = loadImage("background.jpg");
restartImage = loadImage("restart.png");
gameOverImage = loadImage("game over.png");
manImage = loadImage("man.png");
}
function setup() {
createCanvas(1500,800);

//backGround = createSprite(750,400,20000,50);
//backGround.addImage("background.jpg",bg);
//backGround.scale = 3;
//backGround.x = backGround.width/2;

virusGroup = new Group();
maskGroup = new Group();
vaccineGroup = new Group();
sanitizerGroup = new Group();

ground = createSprite(750,750,1500,50);

restart = createSprite(750,500);
restart.addImage("restart",restartImage);

gameOver = createSprite(750,200)
gameOver.addImage(gameOverImage);


man = createSprite(200,500,20,400);
man.addImage(manImage);
man.scale = 0.5

immunity = 100;

}

function draw() {
  background(bg);
  
  var form = new Form();
  
  //backGround.velocityX = -(30);
  
  //if (backGround.x < -100){
   // backGround.x = backGround.width*3;
  //}
  if(gameState === PLAY){
    ground.visible = false;
    restart.visible = false;
    gameOver.visible = false;
  
    if(keyDown("space") && man.y >= 100) {
      man.velocityY = -80;
    }
  
    if(maskGroup.isTouching(man)){
      immunity = immunity+10
      maskGroup.destroyEach();
   }
    if(vaccineGroup.isTouching(man)){
      immunity = immunity+40
      vaccineGroup.destroyEach();
    }
    if(sanitizerGroup.isTouching(man)){
     immunity = immunity+20
     sanitizerGroup.destroyEach();
    }
    man.velocityY = man.velocityY + 10
    man.collide(ground);
  
    spawnVirus();
    spawnVaccine();
    spawnSanitizer();
    spawnMask();
    //restart();
  
  fill("red");
  textSize(50,50);
  text(" IMMUNITY : " + immunity,1000,100);
  
    if(virusGroup.isTouching(man)){
    immunity = immunity -12.5;
    
    }

    if(immunity <= 0){
     gameState = END
    }
  }
  else if(gameState === END){
    
    ground.velocityX = 0;
  
    man.collide(ground);
  
    restart.visible = true;
    gameOver.visible = true;
        
    virusGroup.setLifetimeEach(-1);
    maskGroup.setLifetimeEach(-1);
    vaccineGroup.setLifetimeEach(-1);
    sanitizerGroup.setLifetimeEach(-1);
     
    virusGroup.setVelocityXEach(0);
     maskGroup.setVelocityXEach(0);   
    vaccineGroup.setVelocityXEach(0);
    sanitizerGroup.setVelocityXEach(0);
  
    if(mousePressedOver(restart)) {
    reset();
    }
  }
  fill("red");
  textSize(50,50);
  text(" IMMUNITY : " + immunity,1000,100);
  
  drawSprites();
  }
  function spawnVirus(){
    if (frameCount % 20 === 0) {
      var virus = createSprite(1500,200,40,10);
      virus.y = Math.round(random(100,750));
      virus.addImage(virusImage);
      virus.scale = 0.1;
      virus.velocityX = -60;
      
      virus.lifetime = 1500;
  
      virusGroup.add(virus);
    }
  }
  function spawnMask(){
    if (frameCount % 480 === 0) {
      var mask = createSprite(1500,200,50,50);
      mask.y = Math.round(random(300,300));
      mask.addImage(maskImage);
      mask.scale = 0.2;
      mask.velocityX = -60;
      
      mask.lifetime = 1500;
  
      maskGroup.add(mask);
    }
  }
  function spawnVaccine(){
    if (frameCount % 2350 === 0) {
      var vaccine = createSprite(1500,200,40,10);
      vaccine.y = Math.round(random(350,350));
      vaccine.addImage(vaccineImage);
      vaccine.scale = 0.1;
      vaccine.velocityX = -60;
      
      vaccine.lifetime = 1500;
  
      vaccineGroup.add(vaccine);
    }
  }
  function spawnSanitizer(){
    if (frameCount % 1070 === 0) {
      var sanitizer = createSprite(1500,200,40,10);
      sanitizer.y = Math.round(random(400,400));
      sanitizer.addImage(sanitizerImage);
      sanitizer.scale = 0.2;
      sanitizer.velocityX = -60;
      
      sanitizer.lifetime = 1500;
  
      sanitizerGroup.add(sanitizer);
    }
  }
  function reset(){
  gameState = PLAY;
  virusGroup.destroyEach();
  maskGroup.destroyEach();
  vaccineGroup.destroyEach();
  sanitizerGroup.destroyEach();
  immunity = 100;
  }
  