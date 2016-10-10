//SERENDIPITOUS
//(adj.)
//occurring or discovered by chance in a happy or beneficial way
//the user will be able to move an object around the screen
//when the object passes through random points/areas on the screen,
//random events will be triggered
//the events should convey a light, happy mood
//some will affect the object

var player;
var eventNum;
var cloudtracker=[];
var treetracker=[];
var flowertracker=[];

var x;
var y;
var x1;
var y1;
var x2;
var y2;

var sky=false;
var gradient=false;
var ocean=false;
var land=false;
var clouds=false;
var trees=false;
var flowers=false;
var sun=false;

var pause=false;

function setup() {
	
	createCanvas(windowWidth,windowHeight);
	background(255);
	frameRate(10);

	//main object's starting point
	x=windowWidth/2;
	y=windowHeight/2;

	//random coordinates
	x1=int(random(windowWidth));
	y2=int(random(windowHeight));
	x2=int(random(100,200));
	y2=int(random(150,320));

	player=new Player(windowWidth/2,windowHeight/2,20,color(255,255,255));
	eventNum=0;

	//clouds
	for (var i=0;i<int(random(5,10));i++) {
		var cloud=new Cloud(random(0,windowWidth),random(15,windowHeight/3),random(1,10),color(255,255,255));
		cloudtracker.push(cloud);
	}

	for (var j=0;j<int(random(25,40));j++) {
		var tree=new Tree(random(0,windowWidth/4),random(windowHeight*2/3-40,windowHeight*2/3-70),color(random(30,140),random(150,225),random(20,130)));
		treetracker.push(tree);
	}

	for (var k=0;k<int(random(5,10));k++) {
		var flower=new Flower(random(windowHeight/4,windowHeight/2),random(10,20));
		flowertracker.push(flower);
	}

}

function draw() {

	stroke(0);
	
	//sky
	if(sky) {
		background(color(200,255,255));
	} else {
		background(255);
	}

	//gradient sky
	if(gradient) {
		noStroke();
		for (var i=0;i<windowHeight/25;i++) {
			fill(200,255-3*i,255);
			rect(0,25*i,windowWidth,windowHeight-25*i)
		}
	}

	//ocean
	if(ocean) {
		strokeWeight(20);
		stroke(color(230,250,255));
		fill(color(230,250,255));
		strokeCap(PROJECT);
		var y=windowHeight*2/3;
		for (var x=0; x<windowWidth; x+=40) {
   			line(x,y,x+20,y+20);
    		line(x+20,y+20,x+40,y);
    	
    	}
    	rect(0,windowHeight*2/3+20,windowWidth,310);
    	strokeWeight(2);	
		for (var y=windowHeight*2/3; y<windowHeight; y+=20) {
			stroke(random(25,150),215,random(170,215));
    		for (var x=0; x<windowWidth; x+=40) {
    			line(x,y,x+20,y+20);
    			line(x+20,y+20,x+40,y);
    		}
    	}
	}

	//land
	if (land) {
		stroke(255);
		strokeWeight(3);
		for (var y=windowHeight*2/3+20;y<windowHeight+20;y+=100) {
			if (y<windowHeight*8/10) {
				for (var x=0;x<windowWidth/4;x+=150) {
					fill(255,170,80);
					ellipse(x,y,200,200);
					fill(232,120,60);
					ellipse(x,y,150,150);
					fill(195,70,30);
					ellipse(x,y,100,100);
				}
			} else if (y<windowHeight*19/20) {
				for (var x=0;x<windowWidth/2.5;x+=150) {
					fill(255,170,80);
					ellipse(x,y,200,200);
					fill(232,120,60);
					ellipse(x,y,150,150);
					fill(195,70,30);
					ellipse(x,y,100,100);
				}
			} else if (y<windowHeight+50) {
				for (var x=0;x<windowWidth/2;x+=150) {
					fill(255,170,80);
					ellipse(x,y,200,200);
					fill(232,120,60);
					ellipse(x,y,150,150);
					fill(195,70,30);
					ellipse(x,y,100,100);
				}
			}
		}
	}

	//sun
	if(sun) {
		stroke(255,220,0);
		fill(255,220,0);
		ellipse(windowWidth,0,30,30);
		noFill();
		for (var i=1;i<=15;i++) {
			strokeWeight(16-i);
			ellipse(windowWidth,0,25*i,25*i);
		}
	}

	//clouds
	if(clouds) {
		for (var i=0;i<cloudtracker.length;i++) {
			cloudtracker[i].update();
			cloudtracker[i].display();
		}
	}

	//trees
	if(trees) {
		for (var i=0;i<treetracker.length;i++) {
			treetracker[i].display();
		}
	}

	//flower
	if(flowers) {
		for (var i=0;i<flowertracker.length;i++) {
			flowertracker[i].update();
			flowertracker[i].display();
		}
	}

	//player
	stroke(0);
	strokeWeight(1);
	player.update();
	player.display();

	//lets user move the main object with arrow keys
	if (keyIsPressed) {
		if (keyCode==LEFT_ARROW) {
			player.xPos-=player.maxSpeed;
		} else if (keyCode==RIGHT_ARROW) {
			player.xPos+=player.maxSpeed;
		} else if (keyCode==UP_ARROW) {
			player.yPos-=player.maxSpeed;
		} else if (keyCode==DOWN_ARROW) {
			player.yPos+=player.maxSpeed;
		}
	}
	
	//if the object ever hits any of these points, a random event is called
	//code will be adjusted so that the trigger points have a higher hit box
	//so it will be easier to happen upon an event
	/*if ((x==x1 && y==y1) || (x==x2 && y==y2)) {
		triggerEvent();
	}*/
}

function update() {

}

function event1() {
	sky=true;
}

function event2() {
	gradient=true;
}

//player glow
function event3() {
	ocean=true;
}

//make background blue
function event4() {
	sun=true;
}

function event5() {
	land=true;
}

function event6() {
	clouds=true;
}

function event7() {
	trees=true;
}

function event8() {
	flowers=true;
}

function event9() {
	player.smile();
}

function triggerEvent() {
	eventNum++;
	console.log(eventNum);
	if (eventNum==1) {
		console.log(eventNum);
		event1();
	} else if (eventNum==2) {
		event2();
	} else if (eventNum==3) {
		event3();
	} else if (eventNum==4) {
		event4();
	} else if (eventNum==5) {
		event5();
	} else if (eventNum==6) {
		event6();
	} else if (eventNum==7) {
		event7();
	} else if (eventNum==8) {
		event8();
	} else if (eventNum==9) {
		event9();
	}
}

function keyPressed() {
	if (key==" ") {
		//console.log("yes");
		pause=!pause;
		if (pause==true) {
			noLoop();
		} else if (pause==false) {
			loop();
		}
	} else if (keyCode==ENTER) {
		//event1();
		triggerEvent();
	}
}