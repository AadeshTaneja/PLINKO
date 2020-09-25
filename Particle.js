class Particle {
  constructor(x, y) {
      var options = {
          isStatic: false,
          restitution: 0.4,
          density: 0.8,
          friction: 1
      }

   //   this.radius = r;

      this.colour = color(random(20,255), random(20,255), random(20,255));

      this.body = Bodies.circle(x, y,10, options);
      World.add(world ,this.body);
  }

  display() {
      fill(this.colour);
      ellipseMode(RADIUS);
      ellipse(this.body.position.x, this.body.position.y, 10,10);

  }
}