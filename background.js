// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    World  = Matter.World
    Runner = Matter.Runner,
    Bodies = Matter.Bodies;

var engine;
var world;
var particles = [];
var obstacles = [];

function setup() {
    createCanvas(800,600);
    engine = Engine.create();
    world = engine.world; 
    newParticle();
    drawObstacles();
    
}

function drawObstacles(){
    var rows = 12;


    var spacingX = 40;
    var spacingY = 40;

    for (var row = 0; row < rows -2; row++) {
        for (var col = 0; col < rows - row; col++) {
            var x = col * spacingX + spacingX / 2 + (width - (rows - row) * spacingX) / 2;
            var y = height - (row * spacingY + 50);

            var obstacle = new Obstacle(x, y, 5);
            obstacles.push(obstacle);
        }
    }
}

function newParticle(){
    var ball = new Particle(400,50, 10);
    particles.push(ball);
}

function draw() {
    if(frameCount % 60 ===0){
        newParticle();
    }
    background(51);
    Engine.update(engine);
    for (var i =0; i <particles.length; i++){
        particles[i].show();
    }
    for(var i= 0; i < obstacles.length;i++){
        obstacles[i].show();
    }
    
}