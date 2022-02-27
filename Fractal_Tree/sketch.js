let len = 120;
let angle = 0;
let slider;

function setup() {
  createCanvas(500, 500);
  slider = createSlider(0, PI / 2, PI / 4, 0.01);
  slider.position(10, 10);
}

function branch(len) {
  line(0, 0, 0, -len);
  
  if(len > 4) {
    translate(0, -len);
    push();
    rotate(angle * 0.5);
    branch(len * 0.7);
    pop();
    push();
    rotate(-angle);
    branch(len * 0.6);
    pop();
  }
}

function draw() {
  background(0);
  angle = slider.value();
  translate(width / 2, height);
  stroke(255);
  strokeWeight(2);
  branch(len);
}