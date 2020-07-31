class Tree {
    constructor(x, y) {
      var options = {
          isStatic: true
      }

      this.image = loadImage("images/tree.png");
      
      this.body = Bodies.rectangle(x, y, 100, 500, options);
      this.width = 500;
      this.height = 600;
      
      World.add(world, this.body);
    }

    display(){
      var pos = this.body.position;
      imageMode(CENTER);
      image(this.image, pos.x, pos.y, this.width, this.height);
    }
  };