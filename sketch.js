var particles = [];
var angle = 0;
var move = 1;
var radius = 60;
var Red = 255
var Green = 255;
var Blue = 0;
var Alpha = 250;
var offset = 0


function setup() {
    createCanvas(400, 400);

    for (var i = 0; i < 10; i++) {
        var p = new Particle(angle, move, radius, Red, Green, Blue, Alpha)
        particles.push(p)
        move -= 0.01;
        radius -= offset
        offset += 1.6
        Red -= 15
        Green -= 50
        Blue += 15;
        Alpha -= 10;
    }

}

function draw() {
    background(0)
    for (var i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].display();
      }
}