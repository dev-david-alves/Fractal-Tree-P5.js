// Definitions
let len = 130;
let angle = 0;
let slider;

function setup() {
  createCanvas(450, 450);
  
  // Create a slider
  slider = createSlider(0, PI / 2, PI / 4, 0.01);
  slider.style('width', '220px');
  slider.position(windowWidth / 2 - 110, 15);
}

function branch(len) {
  // Draw the branch
  line(0, 0, 0, -len);
  
  // To prevent inifinite recursion
  if(len > 4) {
    // Move to the end of the branch
    translate(0, -len);
    // Rotate the branch by the angle and then call the function again
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

  // Get the value of the slider
  angle = slider.value();
  translate(width / 2, height);

  stroke(255);
  strokeWeight(2);

  // Call the function the first time
  branch(len);
}