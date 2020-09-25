const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;


var engine,world,ball;

var particles = [];
var plinko = [];
var divisions = [];

var divisionHeight = 300;


function setup() {
 createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,792,480,10)
  
 
for(var k=0;k<=width;k=k+80){

   divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight))
  }
  for(var j=40;j<=width;j=j+50){

    plinko.push(new Plinko(j,75))
 }
  
  for(var j=15;j<=width-10;j=j+50){

    plinko.push(new Plinko(j,175))
  }
  for(var j=40;j<=width;j=j+50){

    plinko.push(new Plinko(j,275))
  }
  for(var j=15;j<=width-10;j=j+50){

    plinko.push(new Plinko(j,375))
  }

  
  
  
}




function draw() {
  background(0);  
  Engine.update(engine);
  ground.display();
  

  for (var k =0;k<divisions.length;k++) {
    divisions[k].display();
 }
 for (var j =0;j<plinko.length;j++) {
  plinko[j].display();
}

  for (let i = 0; i < particles.length; i++) {
    particles[i].display();
  }

if(frameCount % 60 === 0){

  particles.push(new Particle(random(20,460),10,10));

}
 


}
