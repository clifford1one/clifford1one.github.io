let rSlider, gSlider, bSlider

function setup() {
  createCanvas(400, 400);
  //crear slicer que vayan de 0-255
  rSlider = createSlider(0,255,0);
  gSlider = createSlider(0,255,0);
  bSlider = createSlider(0,255,0);
  
  //aquí le pedimos que busque los valores de r,g,b en localStorage
  let r = getItem("redValue"); 
  let g = getItem("greenValue");
  let b = getItem("blueValue");

  //aqui le digo que si es que hay valor guardado, lo asigne al slider
  if(r !== null){
    rSlider.value(r);
  }
    if(g !== null){
    gSlider.value(g);
  }
  if(b !== null){
    bSlider.value(b);
  }
 
  
  
//cada vez que se cambie los valores de un slider, guarda los valores en localStorage
  rSlider.changed(storeData);
  gSlider.changed(storeData);
  bSlider.changed(storeData);
  
}

function storeData(){
  console.log("Red:" + rSlider.value());
  console.log("Green:"+ gSlider.value());
  console.log("Blue:"+ bSlider.value());
  
  storeItem("redValue", rSlider.value());
  storeItem("greenValue", gSlider.value());
  storeItem("blueValue", bSlider.value());
  
  
}

function draw() {
  background(220);
  
  let r = rSlider.value();
  let g = gSlider.value();
  let b = bSlider.value();
  background(r,g,b);
}