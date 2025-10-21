let title,poem, textbox, addBth;

function setup() {
  noCanvas();
  title = createP(" Hello world! ")
  poem = createDiv('');
  const controls=createDiv().addClass('controls');
  textbox = createInput('').attribute('type','text').parent(controls);
  addBth=createButton('Add Line').addClass('pinkButton').parent(controls);
  
  addBth.mousePressed(()=>{
    let userLine = textbox.value().trim();
    if(!userLine)return;
    textbox.value("but if");
    
    let line1 = createDiv().parent(poem);
    let textSpan = createSpan(userLine).parent(line1);
    let slider = createSlider(0,360,floor(random(360)),1).parent(line1);
    
    let applyColor = () => textSpan.style('color', `hsl(${slider.value()}, 80%, 50%)`);

    slider.input(applyColor);
    applyColor();
                  
    
  });
//   title.position(50,random(50));
                  
}

function draw() {
  background(220);
}