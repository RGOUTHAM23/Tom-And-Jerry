var tom,jerry;
var tomSit,jerryStand;
var tomMove,jerryDance;
var tomStill,jerryStill;
var bg;




function preload() {
    bg=loadImage("images/garden.png");
    tomSit=loadAnimation("images/tomOne.png");
    jerryStand=loadAnimation("images/jerryOne.png");
    tomMove=loadAnimation("images/tomTwo.png","images/tomThree.png");
    jerryDance=loadAnimation("images/jerryTwo.png","images/jerryThree.png");
    jerryStill=loadAnimation("images/jerryFour.png");
    tomStill=loadAnimation("images/tomFour.png");
}

function setup(){
    createCanvas(1000,800);
    
    tom=createSprite(800,600,10,10);
    tom.addAnimation("tommySleeping",tomSit);
    tom.addAnimation("tomwalking",tomMove);
    tom.addAnimation("tomCollided",tomStill);
    tom.scale=0.2;

    jerry=createSprite(200,600,10,10);
    jerry.addAnimation("jerryStanding",jerryStand);
    jerry.addAnimation("jerryDancing",jerryDance);
    jerry.addAnimation("jerryCollided",jerryStill);
    jerry.scale=0.16;

}

function draw() {

    background(bg);
   if(tom.x-jerry.x<(tom.width-jerry.width)/2){
       tom.velocityX=0;
       tom.changeAnimation("tomCollided",tomStill);
        tom.x=300;

       jerry.changeAnimation ("jerryCollided",jerryStill);
    }


    
    drawSprites();
}


function keyPressed(){
    if(keyCode === LEFT_ARROW){
        tom.velocityX=-5;
        tom.changeAnimation("tomwalking",tomMove);

        jerry.changeAnimation("jerryDancing",jerryDance);
    }
}
