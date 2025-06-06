function setup() {
  createCanvas(400, 400);
}

  function draw(){
  noStroke();
  background('#D54D43');
  smooth();
 

  // Letras CLF rotadas
  push();
  translate(width / 2, height / 2);
  rotate(PI / 4);

  fill(255);
  textAlign(CENTER, CENTER);
  textSize(160);
  textFont('Helvetica');
  textStyle(BOLD);
  text('L', -90, -80);
  text('C', -90, 60);
  text('F', 90, 60);


  // Diagonal blanca
  stroke(255);
  strokeWeight(20);
  line(-70, -70, 70, 70);
  pop();

  // Texto "2025" con 0 tachado
  noStroke();
  fill(255);
  textSize(40);
  textAlign(LEFT, BOTTOM);
  text('2025', 20, height - 20);

  // Tachado sobre el "0"
  stroke(255);
  strokeWeight(4);
  line(38, height - 42, 56, height - 22);
}
