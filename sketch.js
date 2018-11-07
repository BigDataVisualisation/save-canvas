
function setup() {
  createCanvas(800, 600);


}

function draw() {
  
  background(255);

  fill(255,0,0);
  ellipse(width/2,height/2,100,100);
}

function keyPressed(){
  console.log('keyPressed');
  if(key=='s'){
    saveCanvas('myCanvas','png');
  }
}



