class Stone {
    constructor(x, y, r) {
        var options = {
            isStatic : false,
            restitution: 0,
            friction: 1, 
        }

        this.image = loadImage("images/stone.png");
        
        this.body = Bodies.circle(x, y, r / 2, options);
        this.r = r;
        
        World.add(world, this.body);
        }
        
        display() {
            var pos = this.body.position;
            imageMode(CENTER);
            image(this.image, pos.x, pos.y, this.r * 2, this.r * 2);
        }
    }