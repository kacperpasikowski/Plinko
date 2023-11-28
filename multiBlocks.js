function Block(x, y, width, height, multiplier) {
    var options = {
        isStatic: true,
        restitution: 0, 
        friction: 0,
    };

    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.multiplier = multiplier;

    World.add(world, this.body);
}


Block.prototype.show = function () {
    var pos = this.body.position;
    var angle = this.body.angle;

    

    // kolory prostokątów
    push();
    stroke(2);
    translate(pos.x, pos.y);
    rotate(angle);
    fill(55); 
    rectMode(CENTER);
    rect(0, 0, this.width, this.height);
    // Tekst prostokątów
    
    fill(0);
    textSize(16);
    textAlign(CENTER, CENTER);
    text("x" + this.multiplier, 0,0);

    pop();
};