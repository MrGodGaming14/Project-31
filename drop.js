class Drops {
    constructor(x, y, options){
        options ={
        friction: 0.001,
        restitution: 0.1,
        isStatic: false
        }
    this.drops = Bodies.circle(x, y, 5, options);
    World.add(world, this.drops);

    }
    updateY(){
        if(this.drops.position.y > 800){
            this.drops.position.y = -20
            this.drops.position.x = Math.round(random(1,400));
        }
    }
    showDrop(){
        ellipseMode(CENTER);
        fill("blue");
        ellipse(this.drops.position.x, this.drops.position.y, 5, 5);
        console.log(this.drops.position.y);
    }
}