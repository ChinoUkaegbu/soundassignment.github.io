
// code acquired and edited from https://github.com/CodingTrain/website/blob/dbd1dfe415fd0a6e1f2bbeb8675e39c42d32ee71/Tutorials/P5JS/p5.js_sound/17.10_radialGraph/sketch.js

var heartBeat;
var FastheartBeat;
var amp;

var Tasks;

var button;
let button1, button2;
var volhistory = [];

var volhistoryTasks = [];

var OffButton = document.getElementById("off_button");
var OnButton = document.getElementById("on_button");


function preload() {
  heartBeat = loadSound('heartbeat.wav');
  Tasks = loadSound('ToDo.mp3');
  // fastHeartBeat = loadSound('fasthearbeat.wav');
}

function setup() {
  createCanvas(windowWidth, windowHeight-50);
  angleMode(DEGREES);
  heartBeat.loop();
  heartBeat.pause();
  Tasks.pause();
  // fastHeartBeat.pause();

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
  if (Tasks.currentTime()<=19){
    $("#Day").html("Sunday");

  }
  else if (Tasks.currentTime()>19 && Tasks.currentTime()<=37.7){
    $("#Day").html("Monday");
  }
  else if(Tasks.currentTime()>37.7 && Tasks.currentTime()<=53){
    $("#Day").html("Tuesday");
  }
  // else if (round(Tasks.currentTime())%1 == )
  // }
  else if(Tasks.currentTime()>53 && Tasks.currentTime()<=53.25){
    $("#Day").html("Wednesday");

  }
  else if(Tasks.currentTime()>53.25 && Tasks.currentTime()<=53.5){
    $("#Day").html("Thursday");
  }
  else if(Tasks.currentTime()>53.5 && Tasks.currentTime()<=53.75){
    $("#Day").html("Friday");
  }
  else if(Tasks.currentTime()>54 && Tasks.currentTime()<=54.25){
    $("#Day").html("Saterday");
  }
  else if(Tasks.currentTime()>54.25 && Tasks.currentTime()<=54.5){
    $("#Day").html("Sunday");
  }
  else if(Tasks.currentTime()>54.75 && Tasks.currentTime()<=55){
    $("#Day").html("Monday");
  }
  else if(Tasks.currentTime()>55 && Tasks.currentTime()<=55.25){
    $("#Day").html("Tuesday");
  }
  else if(Tasks.currentTime()>55.5 && Tasks.currentTime()<=55.75){
    $("#Day").html("Wednesday");
  }
  else if(Tasks.currentTime()>56 && Tasks.currentTime()<=56.25){
    $("#Day").html("Thursday");
  }
  else if(Tasks.currentTime()>56.25 && Tasks.currentTime()<=56.5){
    $("#Day").html("Friday");
  }
  else if(Tasks.currentTime()>56.5 && Tasks.currentTime()<=56.75){
    $("#Day").html("Saterday");
  }
  else if(Tasks.currentTime()>57 && Tasks.currentTime()<=57.25){
    $("#Day").html("Sunday");
  }
  else if(Tasks.currentTime()>57.5 && Tasks.currentTime()<=57.75){
    $("#Day").html("Monday");
  }
  else if(Tasks.currentTime()>58 && Tasks.currentTime()<=58.25){
    $("#Day").html("Tuesday");
  }
  else if(Tasks.currentTime()>58.5 && Tasks.currentTime()<=58.75){
    $("#Day").html("Wednesday");
  }
  else if(Tasks.currentTime()>59 && Tasks.currentTime()<=59.25){
    $("#Day").html("Thursday");
  }
  else if(Tasks.currentTime()>59.5 && Tasks.currentTime()<=59.75){
    $("#Day").html("Friday");
  }
  else if(Tasks.currentTime()>61 && Tasks.currentTime()<=61.25){
    $("#Day").html("Saterday");
  }
  else if(Tasks.currentTime()>61.5 && Tasks.currentTime()<=61.75){
    $("#Day").html("Sunday");
  }
  else {
    $("#Day").html("Sunday");
  }
}







// the off and on buttons
function turnOn(){
  if (heartBeat.isPaused()) {
    heartBeat.play();
    Tasks.play();
  }
  // if (Tasks.isPaused()) {
  //   Tasks.play();
  // }
}

function turnOff(){
  if (heartBeat.isPlaying()) {
    heartBeat.pause();
    Tasks.pause();
  }
  
  // if (Tasks.isPlaying()) {
  //   Tasks.pause();
  // }
}
