var hawaii;
var welcome;



function preload(){
    
    hawaii = loadSound("hawaii.mp3");
    welcome = loadSound("sound_14.mp3");
    
}

function setup(){
   
    createCanvas(window.innerWidth,window.innerHeight);
    hawaii.play();
    welcome.play();

}
