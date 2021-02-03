const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;

var drop
function preload(){
    
}

function setup(){
   var canvas = createCanvas(400, 800)
   engine = Engine.create();
   world = engine.world;

   
    
}

function draw(){
    background(0);
    Engine.update(engine);

    //if(frameCount %10 === 0){
        drop = new Drops( (random(0,400) ) , -20)
        drop.showDrop();
        //}
        //drop.updateY();
} 

