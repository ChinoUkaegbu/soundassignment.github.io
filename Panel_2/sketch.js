
// code acquired and edited from https://github.com/CodingTrain/website/blob/dbd1dfe415fd0a6e1f2bbeb8675e39c42d32ee71/Tutorials/P5JS/p5.js_sound/17.10_radialGraph/sketch.js
var heartBeat;
var amp;

var Tasks;
var ampTasks;

var button;
let button1, button2;
var volhistory = [];

var volhistoryTasks = [];

var OffButton = document.getElementById("off_button");
var OnButton = document.getElementById("on_button");


function preload() {
  heartBeat = loadSound('heartbeat.wav');
  Tasks = loadSound('ToDo.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight-50);
  angleMode(DEGREES);
  heartBeat.loop();
  heartBeat.pause();
  Tasks.play();

  amp = new p5.Amplitude();
}


function draw() {
  background(0);
  var vol = amp.getLevel();

  volhistory.push(vol);

  //drawing the wave code
  stroke(0, 255, 0);
  noFill();
  
  // position the wave visualization
  translate(0, -height/2);

  beginShape();
  for (var i = 0; i < volhistory.length; i++) {
    // determine the range of the wave (height... )
    var y = map(volhistory[i], 0, 2, height, 0); 

    // graph the wave
    vertex(i,y);
  }
  endShape();
  

  //to loop once the wave line reaches end of screen
  if (volhistory.length > width) {
    volhistory.splice(0, 1);
  }
  //end drawing the wave code

  console.log(Tasks.currentTime());
  // the changing day
  if (Tasks.currentTime()<=23){
    $("#Day").html("Sunday");
  }
  else if (Tasks.currentTime()>23 && Tasks.currentTime()<=51){
    $("#Day").html("Monday");
  }
  else if(Tasks.currentTime()>51 && Tasks.currentTime()<=73){
    $("#Day").html("Tuesday");
  }
  else if(Tasks.currentTime()>74 && Tasks.currentTime()<=75){
    $("#Day").html("Wednesday");
  }
  else if(Tasks.currentTime()>75 && Tasks.currentTime()<=76){
    $("#Day").html("Thursday");
  }
  else if(Tasks.currentTime()>76 && Tasks.currentTime()<=77){
    $("#Day").html("Friday");
  }
  else if(Tasks.currentTime()>77 && Tasks.currentTime()<=78){
    $("#Day").html("Saterday");
  }
  else if(Tasks.currentTime()>78 && Tasks.currentTime()<=79){
    $("#Day").html("Sunday");
  }
  else if(Tasks.currentTime()>79 && Tasks.currentTime()<=80){
    $("#Day").html("Monday");
  }
  else if(Tasks.currentTime()>80 && Tasks.currentTime()<=81){
    $("#Day").html("Tuesday");
  }
  else if(Tasks.currentTime()>81 && Tasks.currentTime()<=82){
    $("#Day").html("Wednesday");
  }
  else if(Tasks.currentTime()>82 && Tasks.currentTime()<=83){
    $("#Day").html("Thursday");
  }
  else if(Tasks.currentTime()>83 && Tasks.currentTime()<=84){
    $("#Day").html("Friday");
  }
  else if(Tasks.currentTime()>84 && Tasks.currentTime()<=85){
    $("#Day").html("Saterday");
  }
  else {
    $("#Day").html("Sunday");
  }
}







// the off and on buttons
function turnOn(){
  if (heartBeat.isPaused()) {
    heartBeat.play();
  }
  if (Tasks.isPaused()) {
    Tasks.play();
  }
}

function turnOff(){
  if (heartBeat.isPlaying()) {
    heartBeat.pause();
  }
  if (Tasks.isPlaying()) {
    Tasks.pause();
  }
}
