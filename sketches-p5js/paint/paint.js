let paleta;

let negro;
let morado;
let rosao;
let calipso;

let borrar;

let miColor;
let miGrosor;

let miVersion;

function setup() {
  createCanvas(400, 400);
  negro = color(0);
  morado = color(62, 13, 94);
  rosao = color(255, 192, 203);
  calipso = color(6, 148, 148);
  borrar = color(235);
  miVersion = 0;

  miColor = 1;
  miGrosor = 10;
  paleta = [negro, morado, rosao, calipso, borrar];
  //console.log(paleta.length);

  background(paleta[4]);
  console.log("Controles: 1-negro 2-morado 3-rosao 4-calipso 5-borrar");
}

function draw() {
  push();
  text("click to paint!",width/2, 20);
  pop();
  if (mouseIsPressed) {
    //noStroke();
    //fill(paleta[miColor]);
    // ellipse(mouseX, mouseY, 5, 5);
    strokeWeight(miGrosor);
    stroke(paleta[miColor]); //gracias a esta linea, dps puedo ponerle "miColor = 0", en vez de poner "miColor=paleta[0]"
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}

function keyPressed() {
  console.log(key, keyCode);
  //console.log(paleta[]);
  if (keyCode == 40) miGrosor = miGrosor - 10;
  if (keyCode == 38) miGrosor = miGrosor + 10;
  miGrosor = constrain(miGrosor, 1, 30);

  //   if (keyCode == 49) miColor = paleta[0];
  //   if (keyCode == 50) miColor = paleta[1];
  //   if (keyCode == 51) miColor = paleta[2];
  //   if (keyCode == 52) miColor = paleta[3];
  //   if (keyCode == 53) miColor = paleta[4];

  if (keyCode == 49) miColor = 0;{
    console.log("colorNegro");
  }
  if (keyCode == 50){ miColor = 1;
    console.log("colorMorado");
                    }
  if (keyCode == 51) {miColor = 2;
    console.log("colorRosao");
                     }
  if (keyCode == 52){ miColor = 3;
    console.log("colorCalipso");
}
  if (keyCode == 53){ miColor = 4;
    console.log("borrar");
  }
  
 if (key == "s"){
   let fileName = "p5-imagen_"+nf(miVersion++,4)+".png";
   save(fileName);
   console.log("Grabando documento"+fileName)
 }
}
