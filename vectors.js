var dx;
var dy;
var a = 0;


class Particle {

    constructor(a, m, R, r, g, b, al) {
        this.x = 200;
        this.y = 200;
        this.angle = a;
        this.move = m;
        this.r = R;
        this.red = r;
        this.green = g;
        this.blue = b;
        this.alpha = al;

    }

    display() {
        stroke(this.red, this.green, this.blue, this.alpha)
        strokeWeight(3);
        // point(this.x + dx, this.y + dy);
        for (var angle = 0; angle < TWO_PI; angle += 0.1) {
            dx = this.r * cos(angle);
            dy = this.r * sin(angle);
            point(this.x + dx, this.y + dy);
          
        }
    }

    update() {
        var offset = map(sin(a), -1, 1, -2, 2)
        this.r = this.r + offset
        a += 0.005
        // console.log(offset)
    }

}