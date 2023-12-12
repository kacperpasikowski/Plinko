var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Events = Matter.Events;

var engine, world;
var particles = [];
var obstacles = [];
var bounds = [];

function setup() {
    createCanvas(800, 600);
    engine = Matter.Engine.create();
    world = engine.world;
    newParticle();
    drawObstacles();
    drawBounds();


    

    document.querySelector('.spawnButton').addEventListener('click', function () {
        newParticle();
    });
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
function handleCollision(event) {
    const { pairs } = event;

    pairs.forEach(pair => {
        const { bodyA, bodyB } = pair;
        const { label: labelA } = bodyA;
        const { label: labelB } = bodyB;

        if (labelA === 'ball') {
            const bucketLabel = getBucketLabel(labelB);
            if (bucketLabel) {
                const bucketNumber = parseInt(bucketLabel.replace('boundary', ''));
                updateScore(bucketNumber);
                bodyA.remove = true; // Remove the ball
            }
        } else if (labelB === 'ball') {
            const bucketLabel = getBucketLabel(labelA);
            if (bucketLabel) {
                const bucketNumber = parseInt(bucketLabel.replace('boundary', ''));
                updateScore(bucketNumber);
                bodyB.remove = true; // Remove the ball
            }
        }
    });
}

function getBucketLabel(label) {
    // Check if the label is a bucket label
    if (label && label.startsWith('boundary')) {
        return label;
    }
    return null;
}

function updateScore(bucketNumber) {
    // Implement your scoring logic based on the bucket number
    console.log(`Ball dropped into bucket ${bucketNumber}`);
    // Add your scoring logic here
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
    

    for (var i = 1; i < particles.length; i++) {
        particles[i].show();
    }

    for (var i = 0; i < obstacles.length; i++) {
        obstacles[i].show();
    }
    for (var i = 0; i < bounds.length; i++) {
        bounds[i].show();
    }



}
