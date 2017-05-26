var myMusic;
var size;
var r,g,b;
var x = 200;
var y = 200;
var speedx = 6;
var speedy = 6;


function preload(){
myMusic = loadSound('js/getmine.mp3');
}



function setup(){
 cnv = createCanvas(800,600); 
  amplitude = new p5.Amplitude();
 myMusic.setVolume(0.1);
    r = random(0,255);
    g = random(0,255);
    b = random(0,255);
  
 
}


function draw(){
   background(255);
   stroke(255);
   fill(r,g,b);
   move();
  
   
 	var level = amplitude.getLevel();
	size = map(level,0,1,0,200);


ellipse(100,100,size,size);
ellipse(100,150,size,size);
ellipse(100,200,size,size);
ellipse(100,250,size,size);
ellipse(100,300,size,size);
 

	rectMode(CENTER);
    rect(100,600,30,size*random(2,4));
    rect(150,600,30,size*random(6,8));
    rect(200,600,30,size*random(10,15));
    rect(250,600,30,size*random(6,8));
    rect(300,600,30,size*random(10,15));
     rect(350,600,30,size*random(10,12));
      rect(400,600,30,size*random(2,4));
       rect(450,600,30,size*random(10,15));
}


function move(){
			y = y + speedy;
				x = x + speedx;
		if(y > height || y < 0){
								y = random(height);
									r = random(0,255);
				g = random(0,255);
				b = random(0,255);
		}
	if(x > width || x<0){
			x =  random(width);  
				r = random(0,255);
				g = random(0,50);
				b = random(0,100);
			
	} 
}

function mouseClicked(){
if(myMusic.isPlaying()){
  myMusic.pause();  
}  
else{
    myMusic.play();
    fill(r,g,b);
}
}





