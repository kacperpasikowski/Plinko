function Obstacle(x,y,r,){
    var options = {
        restitution: 1,
        isStatic: true,
        friction: 0,
    };
    this.body= Bodies.circle(x,y, r, options);
    this.r =r;
    World.add(world, this.body);
    
    
} 

Obstacle.prototype.show = function () {
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    fill(255);
    stroke(255);
    ellipse(0, 0, this.r * 2);
    pop();
};

