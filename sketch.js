let r, cnv;
let mySound_1;
let amp;
let button1, button2;
let status_;

function preload() {
  mySound_1 = loadSound('frame_1_sound.wav');
}

function setup() {
  cnv = createCanvas(windowWidth, windowHeight-50, WEBGL);
  cnv.parent("Frame_1");
  amp = new p5.Amplitude();
  button1 = createButton('TURN ON');
  button1.position(0, windowHeight-40);
  button1.mousePressed(StatusOn);
  button2 = createButton('TURN OFF');
  button2.position(windowWidth-120, windowHeight-40);
  button2.mousePressed(StatusOff);
}

function StatusOn(){
  status_ = 1;
  if (!mySound_1.isPlaying()){
    mySound_1.play();
  }
  print(status_);
}

function StatusOff(){
  status_ = 0;
  if (mySound_1.isPlaying()){
    mySound_1.pause();
  }
  print(status_);
}

function draw() {
  background(0);
  var scribble = new Scribble(); 
  var vol = amp.getLevel();
  if (status_== 0){
    background(0);
    textSize(100);
    fill(0,255,0);
    text('I am Sleeping...',0, 0);
    stroke(0,255,0);
    noFill();
    scribble.scribbleRect(0,0,200,200);
    rotateY(1.25);
    rotateX(-0.9);
    scribble.scribbleRect(10,10,175,175);
    rotateY(1.45);
    rotateX(-1.2);
    scribble.scribbleRect(-10,-10,225,225);
    rotateY(1.75);
    rotateX(-1.4);
    scribble.scribbleRect(-10,-10,150,150);
    rotateY(2.25);
    rotateX(-1.9);
    scribble.scribbleRect(10,10,225,225);
    rotateY(2.75);
    rotateX(-2.4);
    scribble.scribbleRect(15,15,162.5,162.5);
  }else if( status_== 1){
    stroke(0,255,0);
    noFill();
    rotateX(frameCount * 0.03);
    rotateY(frameCount * 0.03);
    scribble.scribbleRect(0,0,vol*700,vol*700);
    rotateY(1.25);
    rotateX(-0.9);
    scribble.scribbleRect(10,10,vol*600,vol*600);
    rotateY(1.45);
    rotateX(-1.2);
    scribble.scribbleRect(-10,-10,vol*800,vol*800);
    rotateY(1.75);
    rotateX(-1.4);
    scribble.scribbleRect(-10,-10,vol*500,vol*500);
    rotateY(2.25);
    rotateX(-1.9);
    scribble.scribbleRect(10,10,vol*600,vol*600);
    rotateY(2.75);
    rotateX(-2.4);
    scribble.scribbleRect(15,15,vol*550,vol*550);
    }

}
