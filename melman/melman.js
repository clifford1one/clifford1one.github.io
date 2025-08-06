function setup() {
  createCanvas(1080, 1080);
}
function draw() {
  //definir variables de colores
  let naranjito = color(235, 141, 69);
  let pielYellow = color(221, 184, 98);
  let terracota = color(230, 85, 64);
  let oscuro = color(53, 26, 18);
  background(terracota);
  noStroke();

  /////////////////////////////////////////////////////
  //PRIMERA FILA(la del centro)/////////////////////////
  //////////////////////////////////////////////////
  fill(pielYellow); //centro

  //(posición original) - 5
  beginShape();
  vertex((width / 32) * (1 - 5), (height / 32) * (1 - 5));
  vertex((width / 32) * (5 - 5), (height / 32) * (1 - 5));
  vertex((width / 32) * (5 - 5), (height / 32) * (8 - 5));
  vertex((width / 32) * (8 - 5), (height / 32) * (8 - 5));
  vertex((width / 32) * (8 - 5), (height / 32) * (9 - 5));
  vertex((width / 32) * (4 - 5), (height / 32) * (9 - 5));
  vertex((width / 32) * (4 - 5), (height / 32) * (2 - 5));
  vertex((width / 32) * (1 - 5), (height / 32) * (2 - 5));
  //vertex(width/32, height/32);
  endShape(CLOSE);

  //este es la posición original de la figura.
  beginShape();
  //   vertex(width/32,height/32);
  vertex((width / 32) * 5, height / 32);
  vertex((width / 32) * 5, (height / 32) * 8);
  vertex((width / 32) * 8, (height / 32) * 8);
  vertex((width / 32) * 8, (height / 32) * 9);
  vertex((width / 32) * 4, (height / 32) * 9);
  vertex((width / 32) * 4, (height / 32) * 2);
  vertex(width / 32, (height / 32) * 2);
  vertex(width / 32, height / 32);
  endShape(CLOSE);

  //(posición original) + 5
  beginShape();
  vertex((width / 32) * (1 + 5), (height / 32) * (1 + 5));
  vertex((width / 32) * (5 + 5), (height / 32) * (1 + 5));
  vertex((width / 32) * (5 + 5), (height / 32) * (8 + 5));
  vertex((width / 32) * (8 + 5), (height / 32) * (8 + 5));
  vertex((width / 32) * (8 + 5), (height / 32) * (9 + 5));
  vertex((width / 32) * (4 + 5), (height / 32) * (9 + 5));
  vertex((width / 32) * (4 + 5), (height / 32) * (2 + 5));
  vertex((width / 32) * (1 + 5), (height / 32) * (2 + 5));
  //vertex(width/32, height/32);
  endShape(CLOSE);

  //(posición original) + 10
  beginShape();
  vertex((width / 32) * (1 + 10), (height / 32) * (1 + 10));
  vertex((width / 32) * (5 + 10), (height / 32) * (1 + 10));
  vertex((width / 32) * (5 + 10), (height / 32) * (8 + 10));
  vertex((width / 32) * (8 + 10), (height / 32) * (8 + 10));
  vertex((width / 32) * (8 + 10), (height / 32) * (9 + 10));
  vertex((width / 32) * (4 + 10), (height / 32) * (9 + 10));
  vertex((width / 32) * (4 + 10), (height / 32) * (2 + 10));
  vertex((width / 32) * (1 + 10), (height / 32) * (2 + 10));
  //vertex(width/32, height/32);
  endShape(CLOSE);

  //(posición original) + 15
  beginShape();
  vertex((width / 32) * (1 + 15), (height / 32) * (1 + 15));
  vertex((width / 32) * (5 + 15), (height / 32) * (1 + 15));
  vertex((width / 32) * (5 + 15), (height / 32) * (8 + 15));
  vertex((width / 32) * (8 + 15), (height / 32) * (8 + 15));
  vertex((width / 32) * (8 + 15), (height / 32) * (9 + 15));
  vertex((width / 32) * (4 + 15), (height / 32) * (9 + 15));
  vertex((width / 32) * (4 + 15), (height / 32) * (2 + 15));
  vertex((width / 32) * (1 + 15), (height / 32) * (2 + 15));
  //vertex(width/32, height/32);
  endShape(CLOSE);

  //(posición original) + 20
  beginShape();
  vertex((width / 32) * (1 + 20), (height / 32) * (1 + 20));
  vertex((width / 32) * (5 + 20), (height / 32) * (1 + 20));
  vertex((width / 32) * (5 + 20), (height / 32) * (8 + 20));
  vertex((width / 32) * (8 + 20), (height / 32) * (8 + 20));
  vertex((width / 32) * (8 + 20), (height / 32) * (9 + 20));
  vertex((width / 32) * (4 + 20), (height / 32) * (9 + 20));
  vertex((width / 32) * (4 + 20), (height / 32) * (2 + 20));
  vertex((width / 32) * (1 + 20), (height / 32) * (2 + 20));
  //vertex(width/32, height/32);
  endShape(CLOSE);

  //(posición original) + 25
  beginShape();
  vertex((width / 32) * (1 + 25), (height / 32) * (1 + 25));
  vertex((width / 32) * (5 + 25), (height / 32) * (1 + 25));
  vertex((width / 32) * (5 + 25), (height / 32) * (8 + 25));
  vertex((width / 32) * (8 + 25), (height / 32) * (8 + 25));
  vertex((width / 32) * (8 + 25), (height / 32) * (9 + 25));
  vertex((width / 32) * (4 + 25), (height / 32) * (9 + 25));
  vertex((width / 32) * (4 + 25), (height / 32) * (2 + 25));
  vertex((width / 32) * (1 + 25), (height / 32) * (2 + 25));
  //vertex(width/32, height/32);
  endShape(CLOSE);

  //(posición original) + 30

  beginShape();
  vertex((width / 32) * (1 + 30), (height / 32) * (1 + 30));
  vertex((width / 32) * (5 + 30), (height / 32) * (1 + 30));
  vertex((width / 32) * (5 + 30), (height / 32) * (8 + 30));
  vertex((width / 32) * (8 + 30), (height / 32) * (8 + 30));
  vertex((width / 32) * (8 + 30), (height / 32) * (9 + 30));
  vertex((width / 32) * (4 + 30), (height / 32) * (9 + 30));
  vertex((width / 32) * (4 + 30), (height / 32) * (2 + 30));
  vertex((width / 32) * (1 + 30), (height / 32) * (2 + 30));
  //vertex(width/32, height/32);
  endShape(CLOSE);

  /////////////////////////////////////////////////////
  //FILA2 (la de la izquierda)/////////////////////////rotado 90° y flip vertical
  //////////////////////////////////////////////////

  fill(naranjito); //izq

  //(posición original) - 5
  beginShape();
  vertex((width / 32) * (8 - 5), (height / 32) * (10 - 5));
  vertex((width / 32) * (8 - 5), (height / 32) * (14 - 5));
  vertex((width / 32) * (7 - 5), (height / 32) * (14 - 5));
  vertex((width / 32) * (7 - 5), (height / 32) * (11 - 5));
  vertex((width / 32) * (0 - 5), (height / 32) * (11 - 5));
  vertex((width / 32) * (0 - 5), (height / 32) * (7 - 5));
  vertex((width / 32) * (1 - 5), (height / 32) * (7 - 5));
  vertex((width / 32) * (1 - 5), (height / 32) * (10 - 5));
  endShape(CLOSE);

  //este es la posición original de la figura.
  beginShape();
  vertex((width / 32) * 8, (height / 32) * 10);
  vertex((width / 32) * 8, (height / 32) * 14);
  vertex((width / 32) * 7, (height / 32) * 14);
  vertex((width / 32) * 7, (height / 32) * 11);
  vertex((width / 32) * 0, (height / 32) * 11);
  vertex((width / 32) * 0, (height / 32) * 7);
  vertex((width / 32) * 1, (height / 32) * 7);
  vertex((width / 32) * 1, (height / 32) * 10);
  endShape(CLOSE);

  //(posición original) + 5
  beginShape();
  vertex((width / 32) * (8 + 5), (height / 32) * (10 + 5));
  vertex((width / 32) * (8 + 5), (height / 32) * (14 + 5));
  vertex((width / 32) * (7 + 5), (height / 32) * (14 + 5));
  vertex((width / 32) * (7 + 5), (height / 32) * (11 + 5));
  vertex((width / 32) * (0 + 5), (height / 32) * (11 + 5));
  vertex((width / 32) * (0 + 5), (height / 32) * (7 + 5));
  vertex((width / 32) * (1 + 5), (height / 32) * (7 + 5));
  vertex((width / 32) * (1 + 5), (height / 32) * (10 + 5));
  endShape(CLOSE);

  //(posición original) + 10
  beginShape();
  vertex((width / 32) * (8 + 10), (height / 32) * (10 + 10));
  vertex((width / 32) * (8 + 10), (height / 32) * (14 + 10));
  vertex((width / 32) * (7 + 10), (height / 32) * (14 + 10));
  vertex((width / 32) * (7 + 10), (height / 32) * (11 + 10));
  vertex((width / 32) * (0 + 10), (height / 32) * (11 + 10));
  vertex((width / 32) * (0 + 10), (height / 32) * (7 + 10));
  vertex((width / 32) * (1 + 10), (height / 32) * (7 + 10));
  vertex((width / 32) * (1 + 10), (height / 32) * (10 + 10));
  endShape(CLOSE);

  //(posición original) + 15
  beginShape();
  vertex((width / 32) * (8 + 15), (height / 32) * (10 + 15));
  vertex((width / 32) * (8 + 15), (height / 32) * (14 + 15));
  vertex((width / 32) * (7 + 15), (height / 32) * (14 + 15));
  vertex((width / 32) * (7 + 15), (height / 32) * (11 + 15));
  vertex((width / 32) * (0 + 15), (height / 32) * (11 + 15));
  vertex((width / 32) * (0 + 15), (height / 32) * (7 + 15));
  vertex((width / 32) * (1 + 15), (height / 32) * (7 + 15));
  vertex((width / 32) * (1 + 15), (height / 32) * (10 + 15));
  endShape(CLOSE);

  //(posición original) + 20
  beginShape();
  vertex((width / 32) * (8 + 20), (height / 32) * (10 + 20));
  vertex((width / 32) * (8 + 20), (height / 32) * (14 + 20));
  vertex((width / 32) * (7 + 20), (height / 32) * (14 + 20));
  vertex((width / 32) * (7 + 20), (height / 32) * (11 + 20));
  vertex((width / 32) * (0 + 20), (height / 32) * (11 + 20));
  vertex((width / 32) * (0 + 20), (height / 32) * (7 + 20));
  vertex((width / 32) * (1 + 20), (height / 32) * (7 + 20));
  vertex((width / 32) * (1 + 20), (height / 32) * (10 + 20));
  endShape(CLOSE);

  /////////////////////////////////////////////////////
  //FILA3(la de la derexa)/////////////////////////
  //////////////////////////////////////////////////

  fill(naranjito); //der

  //este es la posición original de la figura.
  beginShape();
  vertex((width / 32) * 9, (height / 32) * -1);
  vertex((width / 32) * 9, (height / 32) * 3);
  vertex((width / 32) * 8, (height / 32) * 3);
  vertex((width / 32) * 8, (height / 32) * 0);
  vertex((width / 32) * 1, (height / 32) * 0);
  vertex((width / 32) * 1, (height / 32) * -4);
  vertex((width / 32) * 2, (height / 32) * -4);
  vertex((width / 32) * 2, (height / 32) * -1);
  endShape(CLOSE);

  //(posición original)= x+5 , y-6
  beginShape();
  vertex((width / 32) * (9 + 5), (height / 32) * (10 - 6));
  vertex((width / 32) * (9 + 5), (height / 32) * (14 - 6));
  vertex((width / 32) * (8 + 5), (height / 32) * (14 - 6));
  vertex((width / 32) * (8 + 5), (height / 32) * (11 - 6));
  vertex((width / 32) * (1 + 5), (height / 32) * (11 - 6));
  vertex((width / 32) * (1 + 5), (height / 32) * (7 - 6));
  vertex((width / 32) * (2 + 5), (height / 32) * (7 - 6));
  vertex((width / 32) * (2 + 5), (height / 32) * (10 - 6));
  endShape(CLOSE);

  //(posición original)= x+11 , y-1
  beginShape();
  vertex((width / 32) * (8 + 11), (height / 32) * (10 - 1));
  vertex((width / 32) * (8 + 11), (height / 32) * (14 - 1));
  vertex((width / 32) * (7 + 11), (height / 32) * (14 - 1));
  vertex((width / 32) * (7 + 11), (height / 32) * (11 - 1));
  vertex((width / 32) * (0 + 11), (height / 32) * (11 - 1));
  vertex((width / 32) * (0 + 11), (height / 32) * (7 - 1));
  vertex((width / 32) * (1 + 11), (height / 32) * (7 - 1));
  vertex((width / 32) * (1 + 11), (height / 32) * (10 - 1));
  endShape(CLOSE);

  //(posición original)= x+16 , y+4
  beginShape();
  vertex((width / 32) * (8 + 16), (height / 32) * (10 + 4));
  vertex((width / 32) * (8 + 16), (height / 32) * (14 + 4));
  vertex((width / 32) * (7 + 16), (height / 32) * (14 + 4));
  vertex((width / 32) * (7 + 16), (height / 32) * (11 + 4));
  vertex((width / 32) * (0 + 16), (height / 32) * (11 + 4));
  vertex((width / 32) * (0 + 16), (height / 32) * (7 + 4));
  vertex((width / 32) * (1 + 16), (height / 32) * (7 + 4));
  vertex((width / 32) * (1 + 16), (height / 32) * (10 + 4));
  endShape(CLOSE);

  //(posición original)= x+21 , y+9
  beginShape();
  vertex((width / 32) * (8 + 21), (height / 32) * (10 + 9));
  vertex((width / 32) * (8 + 21), (height / 32) * (14 + 9));
  vertex((width / 32) * (7 + 21), (height / 32) * (14 + 9));
  vertex((width / 32) * (7 + 21), (height / 32) * (11 + 9));
  vertex((width / 32) * (0 + 21), (height / 32) * (11 + 9));
  vertex((width / 32) * (0 + 21), (height / 32) * (7 + 9));
  vertex((width / 32) * (1 + 21), (height / 32) * (7 + 9));
  vertex((width / 32) * (1 + 21), (height / 32) * (10 + 9));
  endShape(CLOSE);

  //(posición original)= x+26 , y+14
  beginShape();
  vertex((width / 32) * (8 + 26), (height / 32) * (10 + 14));
  vertex((width / 32) * (8 + 26), (height / 32) * (14 + 14));
  vertex((width / 32) * (7 + 26), (height / 32) * (14 + 14));
  vertex((width / 32) * (7 + 26), (height / 32) * (11 + 14));
  vertex((width / 32) * (0 + 26), (height / 32) * (11 + 14));
  vertex((width / 32) * (0 + 26), (height / 32) * (7 + 14));
  vertex((width / 32) * (1 + 26), (height / 32) * (7 + 14));
  vertex((width / 32) * (1 + 26), (height / 32) * (10 + 14));
  endShape(CLOSE);

  //(posición original)= x+31 , y+19
  beginShape();
  vertex((width / 32) * (8 + 31), (height / 32) * (10 + 19));
  vertex((width / 32) * (8 + 31), (height / 32) * (14 + 19));
  vertex((width / 32) * (7 + 31), (height / 32) * (14 + 19));
  vertex((width / 32) * (7 + 31), (height / 32) * (11 + 19));
  vertex((width / 32) * (0 + 31), (height / 32) * (11 + 19));
  vertex((width / 32) * (0 + 31), (height / 32) * (7 + 19));
  vertex((width / 32) * (1 + 31), (height / 32) * (7 + 19));
  vertex((width / 32) * (1 + 31), (height / 32) * (10 + 19));
  endShape(CLOSE);
  ///////////////////////////////////////////////////

  ////////////////////////////////////////////////////
  //CUERPO
  ///////////////////////////////////////////////
  //tronco
  fill(naranjito);
  //////////////
  beginShape();
  vertex((width / 32) * 3, (height / 32) * (23 - 2.5 + 1)); //izq arriba
  vertex((width / 32) * 6, (height / 32) * (23 - 2.5 + 1));
  vertex((width / 32) * 7, (height / 32) * 22); //parte convexa
  vertex((width / 32) * 13, (height / 32) * 24.5); //parte cola
  vertex((width / 32) * 12, (height / 32) * 30.5); //derecha abajo
  vertex((width / 32) * 5, (height / 32) * 30.5); //peccho inferior
  vertex((width / 32) * 3, (height / 32) * (28 + 1)); //pecho superior
  endShape(CLOSE);

  //cuello-inferior
  fill(naranjito);
  ///////////////
  beginShape();
  vertex((width / 32) * 0, (height / 32) * (15.5 - 1 + 1)); //izq arriba
  vertex((width / 32) * 6, (height / 32) * (21.5 - 1 + 1)); //donde se junta coin el cuello por la der
  vertex((width / 32) * 3, (height / 32) * (24 + 1)); //donde se junta coin el cuello por la izq
  vertex((width / 32) * 0, (height / 32) * (20 + 1)); //izq abajo
  endShape(CLOSE);

  //////////////////////////////
  //Parte trasera
  ////////////////////////////////

    //COLA
  push();
  strokeWeight(20);
  stroke(naranjito);
  line(width/32*(13.5), height/32*(25), width/32*(14.5), height/32*(29));
  pop();
  
  //pelota de pelo alfinal de la cola
  fill(oscuro);
  ellipse(width/32*(14.5), height/32*(29), 35,35);
  
  //muslo
  fill(pielYellow);

  ellipse((width / 32) * 11.5, (height / 32) * (25 + 1), 170, 190);

  //pata atras
  fill(pielYellow);
  beginShape();
  vertex((width / 32) * 11, (height / 32) * (29 + 1));
  vertex((width / 32) * 9.2, (height / 32) * (25 + 2)); //izq arriba
  vertex((width / 32) * 12, (height / 32) * (25 + 1)); //der arriba
  vertex((width / 32) * 13, (height / 32) * (28.5 + 1)); //codo
  vertex((width / 32) * 12, (height / 32) * (30 + 1)); //codo
  vertex((width / 32) * 8, (height / 32) * (30 + 1));
  vertex((width / 32) * 8, (height / 32) * (29 + 1));
  endShape(CLOSE);

  //codo
  ellipse((width / 32) * 12.05, (height / 32) * 29.95, 70, 70);

  //pezuña trasera
  push();
  fill(oscuro);
  ellipse((width / 32) * 8.5, (height / 32) * 30.8, 80, 70);
  fill(terracota);
  rect((width / 32) * 7, (height / 32) * 31.1, 140, 70);
  pop();

  ////////////////////////////////
  //BRAZO
  ////////////////////////////////
  fill(pielYellow);
  //antebrazo
  rect((width / 32) * 2.3, (height / 32) * 30, 110, 30);

  //hombro
  ellipse((width / 32) * 4, (height / 32) * 28.5, 70, 70);

  //postbrazo(?)
  beginShape();
  vertex((width / 32) * 1.7, (height / 32) * 29.32); //izq down
  vertex((width / 32) * 2.3 + 30, (height / 32) * 28);
  vertex((width / 32) * 2.3 + 130, (height / 32) * 28.6);
  vertex((width / 32) * 2, (height / 32) * 30.4);
  endShape(CLOSE);

  push();
  //pezuña delantera
  fill(oscuro);
  ellipse((width / 32) * (8.5 - 3), (height / 32) * (30.8 - 0.6), 80, 70);
  fill(naranjito);

  //este rect tapa la mitad de la elipse de la pezuña
  rect((width / 32) * 4.3, (height / 32) * 27.8, 80, 70);
  pop();

  //codo delantero
  ellipse((width / 32) * 2.3, (height / 32) * 29.99, 60, 60);

  push();
  //hombro
  ellipse((width / 32) * 4.3, (height / 32) * 28, 90, 100);

  //este es la parte superior del brazo, lo que al codo con el hombro
  noStroke();
  beginShape();
  //stroke(0);
  vertex((width / 32) * 1.7, (height / 32) * 29.32); //izq down
  vertex((width / 32) * 2.3 + 30, (height / 32) * 28);
  vertex((width / 32) * 2.3 + 100, (height / 32) * 29.1);
  vertex((width / 32) * 2, (height / 32) * 30.4);
  endShape(CLOSE);
  pop();
  

  
  //////////////////////////////
  //CARA
  //////////////////////////////

  //cuello superior
  fill(naranjito);
  beginShape();
  vertex((width / 32) * 23, (height / 32) * 4); //izq arriba
  vertex((width / 32) * 28.5, (height / 32) * 4); //der arriba
  vertex((width / 32) * 32, (height / 32) * 7); //der abajo
  vertex((width / 32) * 32, (height / 32) * 13.5); //izq abajo
  endShape();

  //CARITAAA silueta
  fill(pielYellow);

  beginShape();
  //vertex((width/32)*23, (height/32)*10);//centro pera
  vertex((width / 32) * 25 - (width / 32) * 2, (height / 32) * (6 + 4)); //hocico izq
  vertex((width / 32) * 25 - (width / 32) * 2, (height / 32) * (6 + 1)); //muela izq
  vertex((width / 32) * 25 - ((width / 32) * 2 + 45), (height / 32) * 6); //mejillaizq
  //////////////
  vertex((width / 32) * 25 - ((width / 32) * 2 + 45), (height / 32) * (6 - 1)); //ojo izq
  vertex((width / 32) * 25 - ((width / 32) * 3 + 40), (height / 32) * (6 - 2)); //seja izq
  vertex((width / 32) * 25 - ((width / 32) * 2.5 + 35),   (height / 32) * (5 - 3) ); //sien izq
  //////////////
  vertex((width / 32) * 25, (height / 32) * (4.5 - 3)); //caezentro
  //////////////
  vertex((width / 32) * 25 + ((width / 32) * 2.5 + 35),(height / 32) * (5 - 3)); //sien der
  vertex((width / 32) * 25 + ((width / 32) * 3 + 40), (height / 32) * (6 - 2)); //seja der
  vertex((width / 32) * 25 + ((width / 32) * 2 + 45), (height / 32) * (6 - 1)); //ojo der
  //////////////
  vertex((width / 32) * 25 + ((width / 32) * 2 + 45), (height / 32) * 6); //mejilla
  vertex((width / 32) * 25 + (width / 32) * 2, (height / 32) * (6 + 1)); //muela der
  vertex((width / 32) * 25 + (width / 32) * 2, (height / 32) * (6 + 4)); //hocico der
  //////////////
  vertex((width / 32) * 25, (height / 32) * 11); //centro pera
  endShape(CLOSE);
  
  /////////////////////////////////////
  //CARA OSCURA//////////////////////
  ///////////////////////////
 //fill(200, 150, 100);
  fill(naranjito);
  beginShape();

  vertex((width / 32) * 25, (height / 32) * (4.5 - 3)); //caezentro
  
  vertex((width / 32) * 25 - ((width / 32) * 2.5 + 35),(height / 32) * (5 - 3)); //sien izq
  curveVertex((width / 32) * (25 - 4), (height / 32) * (6 - 2.5)); //seja orilla izq
  vertex((width / 32) * (25 - 3), (height / 32) * (6 - 2.5)); //seja medio izq
  vertex((width / 32) * (25 - 1.5), (height / 32) * (6 - 1)); //seja centro izq
  //////////////
  vertex((width / 32) * (25 - 0.6), (height / 32) * (6 - 0.5)); //tabique izq arriba
  vertex((width / 32) * (25 - 0.6), (height / 32) * (6 + 1)); //tabique izq abajo
  vertex((width / 32) * 25 - (width / 32) * 2, (height / 32) * (6 + 2.5)); //hocico izq ARRIBA
  vertex((width / 32) * 25 - (width / 32) * 2, (height / 32) * (6 + 4 + 1)); //hocico izq
//////////////
  vertex((width / 32) * 25, (height / 32) * 12); //centro pera
//////////////
  vertex((width / 32) * 25 + (width / 32) * 2, (height / 32) * (6 + 4 + 1)); //hocico der
  vertex((width / 32) * 25 + (width / 32) * 2, (height / 32) * (6 + 2.5)); //hocico der AARIBA
  vertex((width / 32) * (25 + 0.6), (height / 32) * (6 + 1)); //tabique der abajo
  vertex((width / 32) * (25 + 0.6), (height / 32) * (6 - 0.5)); //tabique der arriba
  //////////////
  vertex((width / 32) * (25 + 1.5), (height / 32) * (6 - 1)); //seja centro der
  vertex((width / 32) * (25 + 3), (height / 32) * (6 - 2.5)); //seja medio der
  vertex((width / 32) * (25 + 4), (height / 32) * (6 - 2.5)); //seja orilla der
  vertex((width / 32) * 25 + ((width / 32) * 2.5 + 35),(height / 32) * (5 - 3)); //sien der
  //////////////
  vertex((width / 32) * 25, (height / 32) * (4.5 - 3)); //caezentro
  //////////////
  ellipse((width / 32) * (25), (height / 32) * (2.4), 260, 80 );
  endShape();
  
  /////////////////////////////
    //OREJITA
  ///////////////////////////////
  //izquierda
  fill(naranjito);
  
  beginShape();
   vertex(width / 32 * (25+3.2), (height / 32) * (2.5 ));
  vertex(width / 32 * (25+5.5), (height / 32) * (2));
  vertex(width / 32 * (25+7), (height / 32) * (2.4));
  endShape();
  
//elipse de la orjea izq
  ellipse(width / 32 * (25-5.6), (height / 32) * (2.8), 124, 40);
  
  fill(oscuro);
  //oyo de la oreja izq
  triangle(width / 32 * (25-7), (height / 32) * (2.8), width / 32 * (25-4), (height / 32) * (2.9), width / 32 * (25-4), (height / 32) * (2.6));
  
   //OREJITA
  //derecha
  fill(naranjito);
  beginShape();
   vertex(width / 32 * (25-3.2), (height / 32) * (2.5 ));
  vertex(width / 32 * (25-5.5), (height / 32) * (2));
  vertex(width / 32 * (25-7), (height / 32) * (2.4));
  endShape();
  
//elipse de la orjea der
  ellipse(width / 32 * (25+5.6), (height / 32) * (2.8), 124, 40);
  
  //oyo de la oreja der
  fill(oscuro);
  triangle(width / 32 * (25+7), (height / 32) * (2.8), width / 32 * (25+4), (height / 32) * (2.9), width / 32 * (25+4), (height / 32) * (2.6));

  
  //OJOS
  ////////////////////////////////////
  strokeWeight(30);
  stroke(0);
  point((width / 32) * 25 - ((width / 32) * 2 + 40), (height / 32) * (6 - 1)); //ojo izq);
  point((width / 32) * 25 + ((width / 32) * 2 + 40), (height / 32) * (6 - 1)); //ojo izq);

  
   //nariz
  strokeWeight(9);
  arc((width / 32) * (25 - 1), (height / 32) * 10.6, 20, 20, 140, PI, OPEN);
  arc((width / 32) * (25 + 1), (height / 32) * 10.65, 20, 20, PI + PI, 20, OPEN);
  
  
  //PATRONAJE
  //patronaje cuerpo
  noStroke();
  fill(pielYellow);
  ellipse(width/32*(4), height/32*(24), 40, 40);
  ellipse(width/32*(6), height/32*(25), 40, 40);
  ellipse(width/32*(3.5), height/32*(22), 40, 40);
  ellipse(width/32*(7), height/32*(27), 40, 40);
  ellipse(width/32*(4+1), height/32*(24-1), 40, 40);
  ellipse(width/32*(5.5+1), height/32*(25-2), 40, 40);
  ellipse(width/32*(2), height/32*(22-3), 40, 40);
  ellipse(width/32*(7+1), height/32*(27-3), 40, 40);
    ellipse(width/32*(2), height/32*(22), 40, 40);
  ellipse(width/32*(3), height/32*(25-5), 40, 40);
  ellipse(width/32*(2+5), height/32*(22+7), 40, 40);
  ellipse(width/32*(7+1), height/32*(27-1), 40, 40);
  ellipse(width/32*(2+7), height/32*(22+6.4), 40, 40);
  ellipse(width/32*(0), height/32*(19), 40, 40);
  
  //patronaje cara
  ///////////////////////////
  ellipse(width/32*(29.6), height/32*(6), 40, 40);
  ellipse(width/32*(28.3), height/32*(7), 40, 40);
  ellipse(width/32*(29.8), height/32*(8), 40, 40);
  ellipse(width/32*(31.9), height/32*(8.2), 40, 40);
  ellipse(width/32*(28.9), height/32*(9.2), 40, 40);
  ellipse(width/32*(31), height/32*(9.5), 40, 40);
  ellipse(width/32*(31.6), height/32*(10.9), 40, 40);
}
