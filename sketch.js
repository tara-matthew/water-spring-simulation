let spring;
let blue, darkBlue;
function setup() {
    createCanvas(1000,1000);

    // Create a new instance of the spring object
    spring = new Spring(30,80);

    rectMode(CORNERS);
}

function draw() {
    background(255);
    rectMode(CORNERS);

    spring.update(); // Any calculations for spring position
    spring.display(); // Draw the spring
}

// Spring class
function Spring(x, y) {
    this.xPos = x;
    this.yPos = y;
    this.dampening = 0.025;
    this.tension = 0.025; // k

    this.springHeight = 200;
    this.springWidth = 80;

    this.height = this.springHeight;
    this.targetHeight = this.springHeight;
    this.speed = 0;

    this.update = function() {

        this.displacement = this.targetHeight - this.height;
        this.speed += (this.tension * this.displacement) - (this.dampening * this.speed);
        this.height += this.speed;

        this.x1  = this.xPos;
        this.y1 = this.yPos + this.targetHeight - this.height;
        this.x2 = this.x1 + this.springWidth;
        this.y2 = this.yPos + this.targetHeight;

    }

    this.display = function() {
        noStroke();
        blue = color(73, 165,239);
        darkBlue = color(1, 137, 247);
        fill(blue)
        rect(this.x1, this.y1, this.x2, this.y2);
        // fill(darkBlue);
        // triangle(this.x1, this.y1, this.x1, this.y2, this.x2, this.y2)
        // fill(blue);
        // triangle(this.x1, this.y1, this.x2, this.y1, this.x2, this.y2)
    }
}

function mousePressed() {
    console.log(mouseX, mouseY);
    if (mouseX >= spring.x1 && mouseX <= spring.x2) {
        spring.speed = -10;
    }
    // console.log('target height', spring.targetHeight,
    //             'height', spring.height,
    //             'ypos', spring.yPos,
    //             'y1', spring.yPos + spring.targetHeight - spring.height,
    //             'displacement', spring.displacement,
    //             'speed', spring.speed);
}