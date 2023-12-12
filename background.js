var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Events = Matter.Events;

var engine, world;
var particles = [];
var obstacles = [];
var blocks = [];

function setup() {
    createCanvas(800, 600);
    engine = Matter.Engine.create();
    world = engine.world;
    newParticle();
    drawObstacles();
    drawBlocks();

    

    document.querySelector('.spawnButton').addEventListener('click', function () {
        newParticle();
    });
}




function drawBlocks() {
    var numBlocks = 13;

    for (var i = 0; i < numBlocks; i++) {
        var x = 155 + i * 40 + 5.5;
        var block = new Block(x, 528, 35, 23, 2);
        block.body.label = `block`;
        blocks.push(block);
    }
}

function drawObstacles() {
    var rows = 14;
    var spacingX = 40;
    var spacingY = 28;

    for (var row = 0; row < rows - 2; row++) {
        for (var col = 0; col < rows - row; col++) {
            var x = col * spacingX + spacingX / 2 + (width - (rows - row) * spacingX) / 2;
            var y = height - (row * spacingY + 50) - 50;

            var obstacle = new Obstacle(x, y, 3);
            obstacles.push(obstacle);
        }
    }
}

function newParticle() {
    var x = random(390, 420);
    var ball = new Particle(x, 150, 10);
    particles.push(ball);
    ball.body.label = ' ball';
}


function draw() {
    background(51);
    Engine.update(engine);
    

    for (var i = 0; i < particles.length; i++) {
        particles[i].show();
    }

    for (var i = 0; i < obstacles.length; i++) {
        obstacles[i].show();
    }

    for (var i = 0; i < blocks.length; i++) {
        blocks[i].show();
    }

}
