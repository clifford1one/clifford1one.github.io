
let pinaActiva, pepActive, callampaActive, aceitunaActive;

//variables posiciones en X, Y de los ingredientes 
let pepX, pepY; 
let pinaX, pinaY;
let callampaX, callampaY;
let aceitunaX, aceitunaY;

//variables de los colores 
let colorPep, colorPina, colorCallampa, colorAceituna;

let total; //variable del total de ingredientes que han caído
let score; //cantidad de aciertos
let displayY, displayX; //posiciones X,Y del ingrediente en display
let leAxuntaste; //varuiable cuando acertaste
let cuek; //variable cuando fallas

let pX, pY, pW, pH; //variables del jugador


let currentTopping;
let topping;
let toppingSpeed;
topping = ["pina", "pep", "callampa", "aceituna"];
let toppingActive;

//imagenes
let pinaSprite;
let pepSprite;
let callampaSprite;
let aceitunaSprite;

let alfredoSprite;

let pizzaSprite1;


function setup() {
  createCanvas(500, 500);

  score = 0;
  total = -4;

  pX = width / 2;
  pY = height - height / 8;
  pW = 70;
  pH = 11;

  displayX = width - pW;
  displayY = width - pY;

  //inicio();
  inicioPina();
  inicioPep();
  inicioCallampa();
  inicioAceituna();

  colorPina = color(255, 255, 0);
  colorPep = color(198, 88, 36);
  colorCallampa = color(245, 245, 220);
  colorAceituna = color(80, 200, 80);

  pinaActiva = false;
  pepActive = false;
  callampaActive = false;
  aceitunaActive = false;
  
  //toppingActive = random(0, 4);
toppingActive = int (random(0, 4));
  

  //imagenes
  pinaSprite =  loadImage("./topping-pina.png")
    pepSprite = loadImage("./topping-pep.png")
    callampaSprite = loadImage("./topping-callampa.png")
aceitunaSprite = loadImage("./topping-aceituna.png")
  pizzaSprite1 = loadImage("./pizzaSprite1.png")
}

function draw() {
  background(225,225, 200);
  
   //variables de los ingredientes
  pep();
  pina();
  callampa();
  aceituna();
  
  fill(100);
//rect(width/2,0, width, 180);
  
  //image(pizzaSprite1, 20,20)
  
  fill(150);
  textSize((width + height) / 2 / 24);
  text("Ingredientes desperdiciados: " + (score-total), width / 100, height / 15); //muestra cuantos errores has cometido
  fill(0);
  textSize((width + height) / 2 / 20);
  text("POINTS: " + score, width / 100, height / 6); //muestra los aciertos
  fill(120,225,120);
  rect(width - width/7, height/ 11, 100,80);
  fill(0);
  textSize(((width + height) / 2) / 25);
  text("comanda", width - width/4.5, height/ 15)
  
  
  
 /*
  textSize((width + height) / 2 / 30);
    text("Ingrediente activo: " + toppingActive, width / 100, height / 4);
  text("0:pina", width / 100, height / 3);
  text("1:peperoni", width / 100, height / 2.7);
  text("2:callampa", width / 100, height / 2.4);
  text("3:aceituna", width / 100, height / 2.2);
*/
  
  // Barra controlada por el mouse
  pX = mouseX;
  pX = constrain(pX, pW / 2 + 10, width - pW / 2 - 10);
  rectMode(CENTER);
  rect(pX, pY, pW, pH);
 push();
  imageMode(CENTER);
  image(pizzaSprite1, pX, pY-10);
//trasnlate(pX, pY);
pop();
  //////////////////////////////

  
 

  pinaFall();
  pepFall();
  callampaFall();
  aceitunaFall();
  /////////////////////////////////

  /*
  if (toppingActive > 0.5) {
  pina();
  pinaActiva = true;
  pepActive = false;
} else {
  pep();
  pepActive = true;
  pinaActiva = false;
}
*/

  if (toppingActive < 1) {
    pina();
    pinaActiva = true;
    pepActive = false;
    callampaActive = false;
    aceitunaActive = false;
    
  } else if (toppingActive < 2) {
    
    pep();
    pinaActiva = false;
    pepActive = true;
    callampaActive = false;
    aceitunaActive = false;
    
  } else if (toppingActive < 3) {
    
    callampa();
    pinaActiva = false;
    pepActive = false;
    callampaActive = true;
    aceitunaActive = false;
    
  } else if (toppingActive < 4) {
    
    aceituna();
    pinaActiva = false;
    pepActive = false;
    callampaActive = false;
    aceitunaActive = true;
  }

  //quiero crezr un funciona "leachuntaste"
  //if(le achuntaste){  }

  //quiero un array de let pinaActiva, let pepActive.
  //

  if (colisionPina() && pinaActiva) {
    score++;
    leAxuntaste = true;
    inicioPina();
  } else if (colisionPina() && !pinaActiva) {
    score--;
    cuek = true;
    inicioPina();
    background(255,0,0);
  } else if (pinaY > height) {
    inicioPina();
  }

  if (colisionPep() && pepActive) {
    score++;
    leAxuntaste = true;
    inicioPep();
  } else if (colisionPep() && !pepActive) {
    score--;
    cuek = true;
    inicioPep();
    background(255,0,0);
  } else if (pepY > height) {
    inicioPep();
  }

  if (colisionCallampa() && callampaActive) {
    score++;
    leAxuntaste = true;
    inicioCallampa();
  } else if (colisionCallampa() && !callampaActive) {
    score--;
    cuek = true;
    inicioCallampa();
    background(255,0,0);
  } else if (callampaY > height) {
    inicioCallampa();
  }

  if (colisionAceituna() && aceitunaActive) {
    score++;
    leAxuntaste = true;
    inicioAceituna();
  } else if (colisionAceituna() && !aceitunaActive) {
    score--;
    cuek = true;
    inicioAceituna();
    background(255,0,0);
  } else if (aceitunaY > height) {
    inicioAceituna();
  }

  if (leAxuntaste == true) {
    toppingActive = int(random(0, 4));
    leAxuntaste = false;
    console.log("WENA XUXETUMAREEEE");
    background(0,255,0);
  }

  /* if (cuek == true) {
    background(200, 80, 80, 200);
    cuek = false;
  }*/
}

function pina() {
  fill(colorPina);
  //ellipse(displayX, displayY, 20, 20);
   noStroke();
fill(220); // el mismo color del background
//rect(width-10,50 , 200, 100);
  image(pinaSprite, displayX-100, displayY-100,200,200);
  pinaActiva = true;
  //callampaActiva=true;
  // pinaFall();
}

function pinaFall() {
  pinaY += toppingSpeed; // esto es lo mismo que: pinaY = toppingSpeed + pinaY;
  fill(colorPina);
  //ellipse(pinaX, pinaY, 20, 25);
  //image(pinaSprite, pinaX, pinaY);
image(pinaSprite, pinaX - 100, pinaY - 100, 200, 200); // centrado, 30x30
  
} //x += 2; // Esto es lo mismo que x = x + 2;

function pep() {
  fill(colorPep);
  //ellipse(displayX, displayY, 20, 20);
   noStroke();
fill(220); // el mismo color del background
//rect(width-10,50 , 200, 100);
  image(pepSprite, displayX-100, displayY-100,200,200);
  //pepActive = true;
  //pepFall();
}

function pepFall() {
  pepY += toppingSpeed;
  fill(colorPep);
  //ellipse(pepX, pepY, 25, 18);
//image(pepSprite, pepX, pepY);
image(pepSprite, pepX - 100, pepY - 100, 200, 200); // centrado, 30x30

}

function callampa() {
  fill(colorCallampa);
  //ellipse(displayX, displayY, 20, 20);
   noStroke();
fill(220); // el mismo color del background
//rect(width-10,50 , 200, 100);
image(callampaSprite, displayX-100, displayY-100,200,200);
  
}

function callampaFall() {
  callampaY += toppingSpeed;
  fill(colorCallampa);
  //ellipse(callampaX, callampaY, 22, 22);
//image(callampaSprite, callampaX, callampaY);
image(callampaSprite, callampaX - 100, callampaY - 100, 200, 200); // centrado, 30x30
  
}

function aceituna() {
  fill(colorAceituna);
  //ellipse(displayX, displayY, 22, 22);
  noStroke();
fill(220); // el mismo color del background
//rect(width-10,50 , 200, 100);
image(aceitunaSprite, displayX-100, displayY-100,200,200);
}

function aceitunaFall() {
  aceitunaY += toppingSpeed;
  fill(colorAceituna);
  //ellipse(aceitunaX, aceitunaY, 22, 22);
//image(aceitunaSprite, aceitunaX, aceitunaY);
image(aceitunaSprite, aceitunaX - 100, aceitunaY - 100, 200, 200); // centrado, 30x30
  
}

function inicioPina() {
  total++;
  // Piña
  pinaX = random(15, width - 15);
  pinaY = 0;

  toppingSpeed = 6;
}

function inicioPep() {
  total++;
  // Piña
  pepX = random(15, width - 15);
  pepY = 0;
}

function inicioCallampa() {
  total++;
  callampaX = random(15, width - 15);
  callampaY = 0;
}

function inicioAceituna() {
  total++;
  aceitunaX = random(15, width - 15);
  aceitunaY = 0;
}

function colisionPina() {
  let condicion1 = pinaX >= pX - pW / 2; //el lado izquierdo de la bandeja
  let condicion2 = pinaX <= pX + pW / 2; //lado derecho de la bandeja
  let condicion3 = pinaY >= pY - pH / 2; //lado superior de la bandeja
  let condicion4 = pinaY <= pY + pH / 2; //lado de abajo de la bandeja
  if (condicion1 && condicion2 && condicion3 && condicion4) {
    console.log("colision piña");
  }
  return condicion1 && condicion2 && condicion3 && condicion4;
}
/*function colisionPina() {
  let ancho = 30; // ajusta a tu sprite
  let alto = 30;

  let condicion1 = pinaX >= pX - pW / 2 - ancho / 2;
  let condicion2 = pinaX <= pX + pW / 2 + ancho / 2;
  let condicion3 = pinaY >= pY - pH / 2 - alto / 2;
  let condicion4 = pinaY <= pY + pH / 2 + alto / 2;

  return condicion1 && condicion2 && condicion3 && condicion4;
}*/


//se tienen que cumplir las 4 condiciones para que sea true

function colisionPep() {
  let condicion1 = pepX >= pX - pW / 2;
  let condicion2 = pepX <= pX + pW / 2;
  let condicion3 = pepY >= pY - pH / 2;
  let condicion4 = pepY <= pY + pH / 2;
  if (condicion1 && condicion2 && condicion3 && condicion4) {
    console.log("colision pep");
  }

  return condicion1 && condicion2 && condicion3 && condicion4;
}

function colisionCallampa() {
  let condicion1 = callampaX >= pX - pW / 2;
  let condicion2 = callampaX <= pX + pW / 2;
  let condicion3 = callampaY >= pY - pH / 2;
  let condicion4 = callampaY <= pY + pH / 2;

  if (condicion1 && condicion2 && condicion3 && condicion4) {
    console.log("colision callampa");
  }

  return condicion1 && condicion2 && condicion3 && condicion4;
}

function colisionAceituna() {
  let condicion1 = aceitunaX >= pX - pW / 2;
  let condicion2 = aceitunaX <= pX + pW / 2;
  let condicion3 = aceitunaY >= pY - pH / 2;
  let condicion4 = aceitunaY <= pY + pH / 2;

  if (condicion1 && condicion2 && condicion3 && condicion4) {
    console.log("colision aceituna");
  }

  return condicion1 && condicion2 && condicion3 && condicion4;
}
