var cat, catImg1, catImg2, catImg3;
var mouse, mouseImg1, mouseImg2, mouseImg3;
var garden, gardenImg;

function preload() {
    catImg1 = loadAnimation("cat1.png");
    catImg2 = loadAnimation("cat2.png","cat3.png");
    catImg3 = loadAnimation("cat4.png");
    mouseImg1 = loadAnimation("mouse1.png");
    mouseImg2 = loadAnimation("mouse2.png","mouse3.png");
    mouseImg3 = loadAnimation("mouse4.png");
    gardenImg = loadImage("garden.png");
}

function setup(){
    createCanvas(1000,800);
    
    garden = createSprite(500,400);
    garden.addImage(gardenImg);
    garden.scale = 1.05;

    cat = createSprite(825,630);
    cat.addAnimation("catStarting", catImg1);
    cat.addAnimation("catRunning", catImg2);
    cat.addAnimation("catEnding", catImg3);
    cat.scale = 0.25;

    mouse = createSprite(250,650);
    mouse.addAnimation("mouseStarting", mouseImg1);
    mouse.addAnimation("mouseRunning", mouseImg2);
    mouse.addAnimation("mouseEnding", mouseImg3);
    mouse.scale = 0.13;
}

function draw() {
    background(220);
    text(mouseX + ',' + mouseY, 10, 45);

    if(keyCode === LEFT_ARROW){
        cat.changeAnimation("catRunning", catImg2);
        cat.velocityX = -3;
        mouse.changeAnimation("mouseRunning", mouseImg2);
      }

    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.changeAnimation("catEnding", catImg3);
        cat.velocityX = 0;
        mouse.changeAnimation("mouseEnding", mouseImg3);
    }    
    drawSprites();
}