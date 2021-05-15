class Paper{
    constructor(x,y,r){
        var options = {
            isStatic: false,
            restitution: 0.4,
            friction: 0.5,
            density: 1.2
            } 
      this.x = x;
      this.y = y;
      this.radius = r;
      this.body.position = Bodies.circle(this.x, this.y, (this.radius)/2,options)
      world.add(world,this.body.position)                   
    }
    display() {
        var paperpos = this.body.position;
        push ()
        translate (paperpos.x, paperpos.y)
        rectMode(CENTER)
        fill("pink");
        ellipse(0, 0, this.radius);
        pop ();
    }
}