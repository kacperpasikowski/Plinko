var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Events = Matter.Events;

var engine, world;
var ball = null;
var obstacles = [];
var bounds = [];
var score = 1100;

function setup() {
    createCanvas(800, 600);
    engine = Matter.Engine.create();
    world = engine.world;
    drawObstacles();
    drawBounds();
    spawnBall();

    

    
}

function drawBounds(){
    b = new Boundary(width/2, height + 50, width, 100);
    bounds.push(b);
    
    for (let i = 3; i < 17; i ++) {
        const x = i * 41 + 9;
        const h = 90;
        const w = 9;
        const y = height - h/2;
        let b = new Boundary(x, y, w, h);
        b.body.label = `boundary${i}`;
        bounds.push(b);
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

// function newParticle() {
//     var x = random(390, 420);
//     var ball = new Particle(x, 150, 10);
//     if (ball.body.position.y > 100) {
//         // Ball is below the position of 200, so update the score
//         //score += 200;
//     }
//     score -=100;
// }




function draw() {
    background(51);
    Engine.update(engine);
    
    fill("white");
    textSize(30);
    
    text("Score: " + score,330, 60);
    textSize(17);
    text("500", 137, 590);
    text("400 ", 179, 590);
    text("300 ", 220, 590);
    text("200 ", 261, 590);
    text("100 ", 302, 590);
    text(" 50 ", 343, 590);
    text(" 50 ", 384, 590);
    text(" 50 ", 425, 590);
    text("100 ", 466, 590);
    text("200 ", 507, 590);
    text("300 ", 548, 590);
    text("400 ", 589, 590);
    text("500 ", 630, 590);
    
    
    
    

    for (var i = 0; i < obstacles.length; i++) {
        obstacles[i].show();
    }
    for (var i = 0; i < bounds.length; i++) {
        bounds[i].show();
    }
    if (ball !==null){
        ball.show();

        var pos = ball.body.position;
        if(pos.y >580){
            score +=200;
            ball = null;
        }
    }

    

}
function spawnBall(){
    document.querySelector('.spawnButton').addEventListener('click', function () {
        var x = random(390, 420);
        ball = new Particle(x, 150, 10);
    });
}
