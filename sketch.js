var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() 
{
	createCanvas(800, 650);

	fairyVoice.play();

	fairy = createSprite(130, 500);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(600,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650,30,5,{restitution:0.5, isStatic:true});
	star.x = starBody.position.x;
	star.y = starBody.position.y;
	World.add(world, starBody);
	
	
	Engine.run(engine);


}


function draw() 
{
  background(bgImg);

  Engine.update(engine)

  if(keyDown("down_arrow") && fairy.x>300)
  {
	star.velocityY=4;   
  }

  if(star.y>470)
  {
	star.velocityY=0;
	star.x=fairy.x+120;
  }

  if(fairy.x>800)
  {
    fairy.x=790;
  }

  if(fairy.x<0)
  {
	fairy.x=10;  
  }
  
  keyPressed();
  drawSprites();

}

function keyPressed() 
{
  if(keyWentDown("right_arrow"))
  {
    fairy.velocityX=5;
  }else if(keyWentUp("right_arrow"))
   {
	 fairy.velocityX=0;  
   }

   if(keyWentDown("left_arrow"))
   {
	 fairy.velocityX=-5;  
   }else if(keyWentUp("left_arrow"))
    {
	  fairy.velocityX=0;	
	} 
}
