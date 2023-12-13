var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Events = Matter.Events;

var engine, world;
var ball = null;
var obstacles = [];
var bounds = [];
var score = 1000;
var lastScore = 0;
var counter = 0;

function setup() {
    createCanvas(800, 600);
    engine = Matter.Engine.create();
    world = engine.world;
    drawObstacles();
    drawBounds();
    spawnBall();

    

    
}

function drawBounds(){
    b = new Boundary(width/2, height + 100, width, 100);
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






function draw() {
    background(51);
    Engine.update(engine);
    
    fill("white");
    stroke(20)
    textSize(30);
    
    text("Credits: " + score,320, 60);
    textSize(22);
    text("Last Scored: " + lastScore, 600, 60);
    text("Sum: " + counter, 600, 100);
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
            if(pos.x >137 && pos.x <179 || pos.x >630 && pos.x<680){
                score +=500;
                lastScore = 500;
                counter +=500;
                ball = null;
            }
            if(pos.x >179 && pos.x <220 || pos.x >589 && pos.x<630){
                score +=400;
                lastScore = 400;
                counter +=400;
                ball = null;
            }
            if(pos.x >220 && pos.x <261 || pos.x >548 && pos.x<589){
                score +=300;
                lastScore = 300;
                counter +=300;
                ball = null;
            }
            if(pos.x >261 && pos.x <302 || pos.x >507 && pos.x<548){
                score +=200;
                lastScore = 200;
                counter +=200;
                ball = null;
            }
            if(pos.x >302 && pos.x <343 || pos.x >466 && pos.x<507){
                score +=100;
                lastScore = 100;
                counter +=100;
                ball = null;
            }
            if(pos.x >343 && pos.x <466 || pos.x >589 && pos.x<630){
                score +=50;
                lastScore = 50;
                counter +=50;
                ball = null;
            }
        }
    }

    

}
function spawnBall() {
    document.querySelector('.spawnButton').addEventListener('click', function () {
        if (ball === null) {
            if(score<=0){
                var result = confirm("Przegrałeś wszystko! czy chcesz zacząć od początku?");
                if (result){
                    score = 1000;
                    counter = 0;
                    lastScore = 0;
                }else {
                    return;
                }
                return;
            }
            score -=100;
            counter -=100;
            var x = random(390, 420);
            ball = new Particle(x, 150, 10);
        }
    });
}

    
