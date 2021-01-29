const  world=Matter.World,
       engine = Matter.Engine,
       Bodies=Matter.Bodies,
       body = Matter.Body;
var myWorld,myEngine;
var drop;
var maxDrops=100;
var man,manImage,manSprite;
var sound;

function preload()
{
    sound=loadSound("s.mp3");
    manImage=loadAnimation("walking_1.png","walking_2.png","walking_3.png","walking_4.png","walking_5.png","walking_6.png","walking_7.png","walking_8.png")

}

function setup()
{
createCanvas(500,800);

myEngine=engine.create();
myWorld=myEngine.world;

sound.loop();

drop=[];

for(var i=0;i<maxDrops;i++)
{
drop.push(new drops(random(0,500),random(0,500),5));
}

man=new umbrella(265,552,100);
manSprite=createSprite(250,610);
manSprite.addAnimation("walk",manImage);
manSprite.scale=0.5;
    
}

function draw()
{
    background(0);

    engine.update(myEngine);

    for(var i=0;i<drop.length;i++)
    {
        drop[i].display();
    }

    drawSprites();


}   

