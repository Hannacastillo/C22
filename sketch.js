const World=Matter.World;
const Engine= Matter.Engine;
const Bodies=Matter.Bodies;

var myengine,myworld,ground;
var ball

function setup() {
  createCanvas(800,400);
  myengine=Engine.create();
  myworld=myengine.world;

  ground_options={
   
    isStatic:true

  }


  ground=Bodies.rectangle(400,390,800,20,ground_options);
  World.add(myworld,ground);
 // console.log(ground);
  console.log(ground.position.x)
 
ball_options={
  restitution:.5
}


ball=Bodies.circle(200,5,10,ball_options);
World.add(myworld,ball)

}

function draw() {
  background("black");  
  Engine.update(myengine);
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,800,20)

ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,10,10)

}