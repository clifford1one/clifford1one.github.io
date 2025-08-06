

function setup() {
  createCanvas(1000, 1000);
  colorMode(RGB);
  //COLORES
 negro = color(48, 37, 33);
  azul = color(97, 167, 230);
  rosado = color(247, 159, 171);
  naranjo = color(249, 157, 74);
  aguaClara = color(169, 247, 251);
aguaOscura = color(160-20, 238-20, 250);
verde = color(92, 183, 69);
cielo = color(54, 126, 229);
  
  noStroke();
}


function draw() {
    background(azul);
  strokeWeight(0.3);
  fill(200);

  
  //AGUAAAAAAA
  //"fondo" del agua
  //izq
  fill(aguaOscura);
  beginShape();
  vertex(0, 740);
  vertex(500, 895);
  vertex(500, height);
  vertex(0, height);
  endShape(CLOSE);
  
  //der
  fill(aguaClara);
    beginShape();
  vertex(width, 740);
  vertex(500, 895);
  vertex(500, height);
  vertex(width, height);
  endShape(CLOSE);
  
  
  //franja ancha del agua
  //izq
  fill(aguaClara);
  beginShape();
  vertex(107,780);
  vertex(107, height);
  vertex(0, height);
  vertex(0, 798);
  endShape(CLOSE);
  
  //der
  fill(aguaOscura);
  beginShape();
  vertex(width-107,780);
  vertex(width-107, height);
  vertex(width, height);
  vertex(width, 798);
  endShape(CLOSE);
  
  //franja delgadita awa
  //izq
  fill(aguaClara);
  
  beginShape();
  vertex(width-865, 790);//9
    vertex(width-885, 794);//8
    vertex(width-885, height);
    vertex(width-865, height);
  endShape(CLOSE);
  
   //der
  fill(aguaOscura);
  
  beginShape();
  vertex(865, 790);//9
    vertex(885, 794);//8
    vertex(885, height);
    vertex(865, height);
  endShape(CLOSE);
  
  
  
  //2do piso lados
  //izq
  fill(rosado);
  
  beginShape();
  vertex(110, 215);
  vertex(313, 357);
  vertex(0,748);
  vertex(0,359);
  endShape(CLOSE);
  
  //der
  fill(negro);
  
  beginShape();
  vertex(889, 217);
  vertex(width, 360);
  vertex(width, 750);
  vertex(686,360);
  endShape(CLOSE);

     //capa 3 TIRIANGULO CENTRO
  //izq
  fill(negro);
  
  beginShape();
  vertex(500, 133);
  vertex(500, 833);
  vertex(184,564);
  vertex(186, 442);
  endShape(CLOSE);
  
  //der
  fill(naranjo); 
   beginShape();
  vertex(500, 133);
  vertex(width-186, 442);
  vertex(width-184,564);
   vertex(500, 833);
  endShape(CLOSE);
  
    
    //escalerita
  //izq
  fill(rosado);
  
   beginShape();
   vertex(120,476);
   vertex(160,476);
vertex(454,751);
vertex(454, 778);
vertex(500,817);
vertex(500, 851);
vertex(440, 852);
  endShape(CLOSE);
  
  //der
  fill(negro);
  
 beginShape();
   vertex(width-120,476);
   vertex(width-160,476);
vertex(width-454,751);
vertex(width-454, 778);
vertex(500,817);
vertex(500, 851);
vertex(width-440, 852);
  endShape(CLOSE);

  
  
    //triangulito xicos laterales arriba
  //IZQ
   fill(negro);
  beginShape();
  vertex(105, 224);
  vertex(105, 458);
  vertex(0,399);
  vertex(0,359);
  endShape(CLOSE);
  
    //der
   fill(naranjo);
  beginShape();
  vertex(895, 225);
  vertex(width, 360);
  vertex(width,400);
  vertex(894 , 460);
  endShape(CLOSE);
  


//pared de la escalera 
  //der
   fill(rosado);
 beginShape();
 vertex(854, 476);
 vertex(864, 476);
 vertex(864, 790);
   vertex(555, 877);
  vertex(555, 756);
  endShape(CLOSE);

  //izq
   fill(negro);
  beginShape();
 vertex(width-854, 476);
 vertex(width-864, 476);
 vertex(width-864, 790);
   vertex(width-555, 877);
  vertex(width-555, 756);
  endShape(CLOSE);
  
  
  //PARED ORILLA-PISO1
  //der
   fill(negro);
    beginShape();
  vertex(865, 476);
  vertex(885, 476);
  vertex(width, 541);
  vertex(width, 812);
    vertex(933, 801);
    vertex(933, 789);
    vertex(885, 781);
    vertex(885, 794);
    vertex(865, 790);
  endShape(CLOSE);
  
  //izq
   fill(azul);
  beginShape();
  vertex(width-865, 476);
  vertex(width-885, 476);
  vertex(0, 541);
  vertex(0, 812);
    vertex(width-933, 801);
    vertex(width-933, 789);//6
    vertex(width-885, 781);//7
    vertex(width-885, 794);//8
    vertex(width-865, 790);//9
  endShape(CLOSE);
  
  

//puertas piso 1
//izq


  
    fill(negro);
    //borde de la puerta circular
    ellipse(106-40+8, 578,41, 53);
  
    //borde rectangular puerta
   fill(negro);
  beginShape();
  vertex(115, 601);
  vertex(115, 794);
  vertex(106, 788);
  vertex(106, 609);
  endShape(CLOSE);
  
  
  //rectangulo rosao
  fill(rosado);
  noStroke();
   beginShape();
  vertex(107, 600);
   vertex(106, 782);//7 
  vertex(width-933, 789);//6
  
    vertex(66, 603);//115-67= 48
  endShape(CLOSE);
  
   
  
/////////////////////////////////////////////////////
  //puertas piso 1
//der
   
  
  

   //borde de la puerta circular
    fill(0); 
    ellipse(width-106-40+8+23, 578,41, 53);
 

  //hoyo circular rosao
  fill(rosado);
  ellipse(106-40, 578,41, 53);
  
  
  //hoyo circular rosao
  fill(200, 120, 120);
  ellipse(width-106-40+38, 578,41, 53); 
  
  //der hoyo rectangular
 beginShape();
  vertex(width-66, 603);
  vertex(width-114, 600);
    vertex(width-115, 781);
    vertex(width-67, 789);
  endShape(CLOSE);
  
    //borde rectangular puerta
  fill(negro);
  beginShape();
  vertex(width-115, 601);
  vertex(width-115, 794);
  vertex(width-106, 788);
  vertex(width-106, 609-20);
  endShape(CLOSE);
  
  
///////////////////////////////////////////
  
  //CUBO CENTRO
  fill(rosado);
  beginShape();
  vertex(500, 833);
  vertex(500+67,849);
  vertex(500,868);
  vertex(500-67, 849);
  endShape(CLOSE);
  
  //Cubo lado izq
  fill(negro);
      beginShape();
  vertex(500-67, 849);
  vertex(500, 868);
  vertex(500, 930);
  vertex(width/2-124, 885);
  endShape(CLOSE);
  
  //cubo lado der
  fill(verde);
  
   beginShape();
  vertex(width/2+67, 849);
  vertex(width-500, 868);
  vertex(500, 930);
  vertex(width/2+124, 885);
  endShape(CLOSE);
  
  //MUELLE
  //izq
  
    //underwater
    fill(aguaClara);
  
  beginShape();
  vertex(472, 940);
  vertex(472, 954);
  vertex(455,960);
  vertex(455, height);
  vertex(442,height);
  vertex(442,963);
  vertex(328, height);
    vertex(0, height);
  endShape(CLOSE);

  
  
  //superficie
    fill(azul);
  
   beginShape();
  vertex(357,889);
  vertex(472, 927);
  vertex(243, height);
  vertex(0, height);
  vertex(0, 983);
  endShape(CLOSE);
  
  //lateral
    fill(rosado);
   beginShape();
  vertex(472, 927);
  vertex(472, 940);
  vertex(288, height);
  vertex(243, height);
  endShape(CLOSE);


   //MUELLE
  //der
  
    //underwater
    fill(aguaOscura); 
  beginShape();
  vertex(width-472, 940);
  vertex(width-472, 954);
  vertex(width-455,960);
  vertex(width-455, height);
  vertex(width-442,height);
  vertex(width-442,963);
  vertex(width-328, height);
    vertex(width, height);
  endShape(CLOSE);

  
  
  //superficie
    fill(naranjo);
  beginShape();
  vertex(width-357,889);
  vertex(width-472, 927);
  vertex(width-243, height);
  vertex(width, height);
  vertex(width, 983);
  endShape(CLOSE);
  
  //lateral
    fill(negro); 
   beginShape();
  vertex(width-472, 927);
  vertex(width-472, 940);
  vertex(width-288, height);
  vertex(width-243, height);
  endShape(CLOSE);
  
  //PUERTAS ARRIBA
  //izq
  
  //sombra
  fill(negro); 
  
    beginShape();
  vertex(155, 355);
  vertex(155, 476);
  vertex(149, 476);
  vertex(151, 357);
  endShape(CLOSE);
  
ellipseMode(CENTER);
  ellipse(137, 356, 37, 52);
  
  //color
fill(azul);
    beginShape();
  vertex(114, 355);
  vertex(152, 355);
  vertex(149, 476);
  vertex(114, 476);
  endShape(CLOSE);
  
ellipseMode(CENTER);
  ellipse(133, 360, 38, 52);
  
    //PUERTAS ARRIBA
  //der
  
  //sombra
  fill(236, 139, 70);
    beginShape();
  vertex(width-155, 355);
  vertex(width-155, 476);
  vertex(width-149, 476);
  vertex(width-151, 357);
  endShape(CLOSE);
  
ellipseMode(CENTER);
  ellipse(width-137, 356, 37, 52);
  
  //color
fill(93, 145, 221);
    beginShape();
  vertex(width-114, 355);
  vertex(width-152, 355);
  vertex(width-149, 476);
  vertex(width-114, 476);
  endShape(CLOSE);
  
ellipseMode(CENTER);
  ellipse(width-133, 360, 38, 52);
  
  
  //VENTANAS centro
  
  //der
  ellipseMode(CORNER);
  //hoyo
  fill(140, 67, 32);
  ellipse(562, 435, 87, 141);
  //borde ventana
  fill(49, 38, 34); 
  ellipse(555, 435, 87, 141);
  
   //izq
  ellipseMode(CORNER);
  //hoyo
  fill(250, 171, 75);
  ellipse(width-562-87, 435, 87, 141);
  //borde ventana
  fill(241, 216, 152);
  ellipse(width-555-87, 435, 87, 141);
  
  
  
/*  
   
  
    beginShape();
  vertex();
  vertex();
  vertex();
  vertex();
  endShape(CLOSE);
  
  */
}







