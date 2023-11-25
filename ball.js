function Particle(x,y,r) {
    this.body= Bodies.circle(x,y, r);
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