const Engine =Matter.Engine;
const World =Matter.World;
const Bodies =Matter.Bodies;
function setup() {
  createCanvas(400,400);
 
  engine=Engine.create();
  world=engine.world;
  var ground_options={
    isStatic:true


  }
  var ball_options={
    restitution:1


  }
  ground=Bodies.rectangle(200,390,200,20,ground_options);
  World.add(world,ground);
  console.log(ground);
  console.log(ground.position.x);
  console.log(ground.position.y);
  ball=Bodies.circle(200,100,20,ball_options)
  World.add(world,ball);

 
}

function draw() {
  background('BLACK'); 
  Engine.update(engine);
  rectMode(CENTER); 
 // fill("brown")
  rect(ground.position.x,ground.position.y,400,20);
ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,20,20);








}