let seed = 908789
let hexSize = 150;
let shapeSize = hexSize/2.25;;
let count = 0;
let colCount = 0;
let viewCount = 0;

let hexes = [];

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0,0);
    canvas.style("z-index", "-1");
    randomSeed(seed);
    textFont("courier")
    
    colorMode(HSB);
    
    strokeJoin(ROUND);

    for (let y = 3000; y >= -hexSize; y -= hexSize / 2.3) {
        for (let x = 3000; x >= -hexSize; x -= hexSize * 1.5) {
            let hex = new Hex(x + hexSize * (count % 2 == 0) * 0.75, y, shapeSize)
            hexes.push(hex);
        }
        count++;
    }
}

function draw() {
    background(0);
    for (let i = 0; i < hexes.length; i++) {
        hexes[i].draw();
        hexes[i].checkTouch();
    }
}

function windowResized() {
    resizeCanvas(windowWidth,windowHeight);
    background(0);
}

class Hex {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.col = random(360);
        this.touch = false;
    }

    draw() {
        beginShape();
        strokeWeight(3);
        noFill();
        //stroke(255);
        //randomSeed(seed);
        if (this.touch == true) {
            stroke(this.col, 50, 100);
        } else {
            stroke(255);
        }
        for (let a = 0; a < TAU; a += TAU / 6) {
            let x = this.x + this.radius * cos(a);
            let y = this.y + this.radius * sin(a);

            vertex(x, y);
        }

        endShape(CLOSE);

        strokeWeight(1);
        textSize(25);
        if (this.touch == true) {
            text(">_<", this.x,this.y);
        } else {
            text("'_'", this.x, this.y);
        }
        
    }

    checkTouch() {
        let d = dist(mouseX, mouseY, this.x, this.y);
        this.touch = (d < this.radius) ? !this.touch : this.touch;
    }
}