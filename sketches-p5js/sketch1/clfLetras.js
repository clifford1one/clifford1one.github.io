      let typoClf;

function setup() {
  createCanvas(472, 439);
  preload();
}

function draw() {
  noStroke();
  background("#FAF9EF");
  textFont(typoClf);

  push();
  fill("#DB504A");
  rectMode(CENTER);
  rect(width / 2, height / 2, 472, 439, 16);
  pop();

  // rotación
  push();
  translate(width / 2, height / 2);
  angleMode(DEGREES);
  rotate(319);

  fill(255);
  fill("#FAF9EF");
  textAlign(CENTER, CENTER);
  textSize(160);
  textStyle(BOLD);
  //C
  text("C", -50, 60);
  //L
  text("L", 60, -28);
  //F
  text("F", 50 + 5, 148 - 2);
  // Diagonal blanca
  rect(17, 73, 133, 20);
  pop();

  //2025
  fill("#FAF9EF");
  textSize(30);
  text("2025", 20, height - 20);
}

function preload() {
  typoClf = loadFont("/fonts/Bungee-Regular.ttf");
}