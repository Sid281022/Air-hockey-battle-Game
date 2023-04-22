var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["7e785502-400b-43cc-b410-f3875a9fdd7b","21f4329c-db5c-4aad-8ee4-af08a7d16a27","a3066cb3-7a8f-41e2-8ca5-ced41343dfa5","39d30b22-652b-4e4e-9037-e7f79f9aa7b0"],"propsByKey":{"7e785502-400b-43cc-b410-f3875a9fdd7b":{"name":"soccer","sourceUrl":null,"frameSize":{"x":45,"y":45},"frameCount":1,"looping":true,"frameDelay":12,"version":"1OKrKzoj6VEYxBR4w8aB66fedhewOUxc","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":45,"y":45},"rootRelativePath":"assets/7e785502-400b-43cc-b410-f3875a9fdd7b.png"},"21f4329c-db5c-4aad-8ee4-af08a7d16a27":{"name":"soccer_yellow_1","sourceUrl":null,"frameSize":{"x":45,"y":45},"frameCount":1,"looping":true,"frameDelay":12,"version":"3yK.K4IoH5rQLh4ymdD5cpZmjzSKPIM0","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":45,"y":45},"rootRelativePath":"assets/21f4329c-db5c-4aad-8ee4-af08a7d16a27.png"},"a3066cb3-7a8f-41e2-8ca5-ced41343dfa5":{"name":"soccer_bw_1","sourceUrl":null,"frameSize":{"x":396,"y":396},"frameCount":1,"looping":true,"frameDelay":12,"version":"FqJIzX5ntFyek_pvyGEdtiZzRcKC2PZB","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":396,"y":396},"rootRelativePath":"assets/a3066cb3-7a8f-41e2-8ca5-ced41343dfa5.png"},"39d30b22-652b-4e4e-9037-e7f79f9aa7b0":{"name":"soccer_","sourceUrl":null,"frameSize":{"x":44,"y":44},"frameCount":1,"looping":true,"frameDelay":12,"version":"NQxsglWrne8mJcaRfHm25Q3rEyXCc5Yg","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":44,"y":44},"rootRelativePath":"assets/39d30b22-652b-4e4e-9037-e7f79f9aa7b0.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var playerMallet;

var goal1=createSprite(200,18,100,20);
goal1.shapeColor=("yellow");

var goal2=createSprite(200,382,100,20);
goal2.shapeColor=("yellow");


// making court
var boundary1 = createSprite(200,0,400,10);
boundary1.shapeColor = "white";
var boundary2 = createSprite(200,400,400,10);
boundary2.shapeColor = "white";
var boundary3 = createSprite(0,200,10,400);
boundary3.shapeColor = "white";
var boundary4 = createSprite(400,200,10,400);
boundary4.shapeColor = "white";



// creating objects and giving them colours
var striker = createSprite(200,200,10,10);
striker.shapeColor = "white";

var playerMallet = createSprite(200,50,50,10);
playerMallet.shapeColor = "black";

var computerMallet = createSprite(200,350,50,10);
computerMallet.shapeColor = "black";

var gamestate="serve"

//score variables
var playerScore=0;
var compScore=0;

function draw()
{
  
  background("green");
  
if (gamestate=="serve"){
textSize(20)
fill("maroon")
text("Press space to strike",120,180);

if(keyDown("space")){
  serve()
  gamestate="play"
}}


  textSize(25)
  fill("maroon");
  text(compScore,25,225);
  text(playerScore,25,185);
  

     if(striker.isTouching(goal1))
      { 
        compScore = compScore+1 ;
      
        striker.x=200;
        striker.y=200;
        striker.velocityX=0;
        striker.velocityY=0;
      }
      
      if(striker.isTouching(goal2))
      {
        playerScore =  + 1;
      
        striker.x=200;
        striker.y=200;
        striker.velocityX=0;
        striker.velocityY=0;
      }
      
   
      if(playerScore==5|| compScore==5)
    
{    fill("maroon");
        textSize(18);
       
        text("Game Over ",170,160);
      }
 
 
  
 
  paddleMovement();
  
  

 
  computerMallet.x = striker.x;

  

   for (var i = 0; i < 400; i=i+20) {
    line(i,200,i+10,200);
  }
  
  createEdgeSprites();
  
  striker.bounceOff(edges);
  striker.bounceOff(playerMallet);
  striker.bounceOff(computerMallet);
  playerMallet.bounceOff(edges);
  computerMallet.bounceOff(edges);


  if (keyDown("space")) {
    serve();
  }
  
 
  drawSprites();}




























function serve() {
  striker.velocityX = 10;
  striker.velocityY = 5;
 
}

function paddleMovement()
{
  if(keyDown("left")){
    playerMallet.x = playerMallet.x-10;
    
  }
  
  if(keyDown("right")){
    playerMallet.x = playerMallet.x+10;
    
  }
  
  if(keyDown("up")){
   if(playerMallet.y>25)
   {
    playerMallet.y = playerMallet.y- 10;
   }
  }
  
  if(keyDown("down")){
    if(playerMallet.y<120)
   {
    playerMallet.y = playerMallet.y+10;
   }
  }
}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
