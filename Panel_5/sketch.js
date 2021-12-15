// References: 
//1.Radial graph(https://www.youtube.com/watch?v=h_aTgOl9J5I&list=PLglp04UYZK_PrN6xWo_nJ-8kzyXDyFUwi&index=88)
//2.Message Alert(https://sweetalert2.github.io/)

let notification = document.getElementById("notification");

var song;
var airport;

var amp;
var volhistory=[];
var voiceflag;
var finalflag;

//preload songs
function preload(){
    song = loadSound("final.mp3");
    airport = loadSound("sound_13.mp3");
  
}

function setup(){
    voiceflag=false;
    finalflag=false;
    createCanvas(window.innerWidth,window.innerHeight);
    angleMode(DEGREES);
    song.play();
    amp = new p5.Amplitude();
    
    //setting up all the cues
    song.addCue(1.1,togglevoice);
    song.addCue(3.5,togglevoice);
    song.addCue(20,togglevoice);
    song.addCue(28,togglevoice);
    song.addCue(35,togglevoice);
    song.addCue(42,togglevoice);
    song.addCue(50,togglevoice);
    song.addCue(53,togglefinal); 
    song.addCue(65,messagepop);
}

//toggle flag to change color of graph
function togglevoice(){
    voiceflag=!voiceflag;
}

//to have random colors - done for chorus
function togglefinal(){
    finalflag = true;
}

//final alert message
function messagepop(){
    yuh();
    airport.play();
    noLoop();
    finalcredits();
}

function finalcredits(){
    background(0);
}

function draw(){
    background(0);
    var vol = amp.getLevel();
    volhistory.push(vol);
    stroke(0,255,0);
    noFill();
    if(voiceflag){
        stroke(255,0,0);
    }
    
    //radial graphs
    translate(width/2,height/2);
    beginShape();

    for (var i=0;i<360;i++){
        var r  = map(volhistory[i],0,1,10,500);
        var x = r * cos(i);
        var y = r * sin(i);
        vertex(x,y); 
        
    }

    endShape();

    if(finalflag){
        stroke(random(255),random(255),random(255));

    }
    push();
    translate(-width/2,-height/2);
    beginShape();

    for (var i=0;i<360;i++){
        var r  = map(volhistory[i],0,1,100,800);
        var x = r * cos(i);
        var y = r * sin(i);
        vertex(x,y); 
        
    }

    endShape();
    pop();
    beginShape();

    for (var i=0;i<360;i++){
        var r  = map(volhistory[i],0,1,-30,300);
        var x = r * cos(i);
        var y = r * sin(i);
        vertex(x,y); 
        
    }

    endShape();

    beginShape();

    for (var i=0;i<360;i++){
        var r  = map(volhistory[i],0,1,100,-10);
        var x = r * cos(i);
        var y = r * sin(i);
        vertex(x,y); 
        
    }

    endShape();
    
    beginShape();

    for (var i=0;i<360;i++){
        var r  = map(volhistory[i],0,1,400,1000);
        var x = r * cos(i);
        var y = r * sin(i);
        vertex(x,y); 
        
    }

    endShape();


    beginShape();
    stroke(255,255,random(255));

    for (var i=0;i<360;i++){
        var r  = map(volhistory[i],0,1,0,400);
        var x = r * cos(i);
        var y = r * sin(i);
        vertex(x,y); 
        
    }

    endShape();
    



    if (volhistory.length>360) {
        volhistory.splice(0,1);
    }

}

//the message content

function yuh() {
// 	alert('Hello\nHow are you?');
	notification.style.opacity = "1";

    document.getElementsByTagName("a")[0].style.color = "black";
}

