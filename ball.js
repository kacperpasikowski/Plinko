
function Particle(x,y,r) {
    var restitution = 0.45;
    var friction = 0.9;
    var options = {
        restitution: restitution,
        friction: friction,
    }
    this.body= Bodies.circle(x,y, r, options);
    this.r =r;
    World.add(world, this.body);
}

Particle.prototype.show = function(){
    fill(255);
    stroke(255);
    var position = this.body.position;
    push();
    translate(position.x, position.y)
    ellipse(0,0,this.r *2);
    pop();
}