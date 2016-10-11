//SERENDIPITOUS
//(adj.)
//occurring or discovered by chance in a happy or beneficial way
//by Joyce Zhang

//the user will be able to move an object around the screen
//when the object passes through random points/areas on the screen,
//events will be triggered
//the events should convey a light, happy mood

//important objects
var player;
var eventNum;
var cloudTracker=[];
var treeTracker=[];
var flowerTracker=[];
var triggerPoints=[];

//components that can be turned on
var sky=false;
var gradient=false;
var ocean=false;
var land=false;
var clouds=false;
var trees=false;
var flowers=false;
var sun=false;

//can pause the scene
var pause=false;


function setup() {
	
	createCanvas(windowWidth,windowHeight);
	background(255);
	frameRate(10);

	//set up player object
	player=new Player(windowWidth/2,windowHeight/2,20,color(255,255,255));

	//first set of trigger points
	setTrigPoints(20);

	//no events triggered yet
	eventNum=0;

	//cloud objects
	for (var i=0;i<int(random(5,10));i++) {
		var cloud=new Cloud(random(0,windowWidth),random(15,windowHeight/3),random(1,10),color(255,255,255));
		cloudTracker.push(cloud);
	}

	//tree objects
	for (var j=0;j<int(random(25,40));j++) {
		var tree=new Tree(random(0,windowWidth/4),random(windowHeight*2/3-40,windowHeight*2/3-70),color(random(30,140),random(150,225),random(20,130)));
		treeTracker.push(tree);
	}

	//flower objects
	for (var k=0;k<int(random(5,10));k++) {
		var flower=new Flower(random(windowHeight/4,windowHeight/2),random(10,20));
		flowerTracker.push(flower);
	}
}


function draw() {

	//sky
	if(sky) {
		background(color(200,255,255));	//sky blue
	} else {
		background(255);	//white
	}

	//gradient sky
	//purple (bottom) to sky blue (top)
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
		//top border
		var y=windowHeight*2/3;
		for (var x=0; x<windowWidth; x+=40) {
   			line(x,y,x+20,y+20);
    		line(x+20,y+20,x+40,y);
    	}
    	//light blue ocean
    	rect(0,windowHeight*2/3+20,windowWidth,310);
    	strokeWeight(2);
    	//ocean waves outline
		for (var y=windowHeight*2/3; y<windowHeight; y+=20) {
			stroke(random(25,150),215,random(170,215));		//random green/blue colors
    		for (var x=0; x<windowWidth; x+=40) {
    			line(x,y,x+20,y+20);
    			line(x+20,y+20,x+40,y);
    		}
    	}
	}

	//land
	//recedes as land is higher
	if (land) {
		stroke(255);	//white
		strokeWeight(3);
		for (var y=windowHeight*2/3+20;y<windowHeight+20;y+=100) {
			if (y<windowHeight*8/10) {
				for (var x=0;x<windowWidth/4;x+=150) {
					fill(255,170,80);			//light orange
					ellipse(x,y,200,200);		//outer circle
					fill(232,120,60);			//darker orange
					ellipse(x,y,150,150);		//middle circle
					fill(195,70,30);			//brown
					ellipse(x,y,100,100);		//inner circle
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
		stroke(255,220,0);		//yellow
		fill(255,220,0);
		ellipse(windowWidth,0,30,30);		//middle of sun
		noFill();
		//sun rays that get thinner as they get farther from the core
		for (var i=1;i<=15;i++) {
			strokeWeight(16-i);
			ellipse(windowWidth,0,25*i,25*i);
		}
	}

	//clouds
	if(clouds) {
		for (var i=0;i<cloudTracker.length;i++) {
			cloudTracker[i].update();
			cloudTracker[i].display();
		}
	}

	//trees
	if(trees) {
		for (var i=0;i<treeTracker.length;i++) {
			treeTracker[i].display();
		}
	}

	//flower
	if(flowers) {
		for (var i=0;i<flowerTracker.length;i++) {
			flowerTracker[i].update();
			flowerTracker[i].display();
		}
	}

	//player
	stroke(0);
	strokeWeight(1);
	player.update();
	player.display();

	//lets player move the main object with arrow keys
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

	//next event is triggered once the player hits one of the trigger points
	if (eventNum<=10) {
		for (var i=0;i<triggerPoints.length;i++) {
			xTrig=triggerPoints[i][0];
			yTrig=triggerPoints[i][1];
			if ((player.xPos>xTrig-30) && (player.xPos<xTrig+30) && (player.yPos>yTrig-30) && (player.yPos<yTrig+30)) {
				triggerEvent();
				setTrigPoints(20);		//trigger points are changed
			}
		}
	}

	//keeps track of how many events the player has found
	textSize(20);
	fill(0);
	text("Event: " + eventNum + "/10",25,50);
	//player is notified once they reach the last event
	if (eventNum==10) {
		textSize(15);
		text("Congratulations!", 25,75);
		text("Press 'backspace' to reset.", 25,100);
	}
}


function setTrigPoints(n) {
	//creates an array of (x,y) coordinates in the form of a 2d array
	for (var i=0;i<n;i++) {
		triggerPoints[i]=[];
		for (var j=0;j<2;j++) {
			if (j==0) {
				triggerPoints[i][j]=int(random(windowWidth));	//x coordinate
			} else if (j==1) {
				triggerPoints[i][j]=int(random(windowHeight));	//y coordinate
			}
		}
	}
	/*//print coordinates to console log (for debugging)
	for (var i=0;i<triggerPoints.length;i++) {
		for (var j=0;j<triggerPoints[i].length;j++) {
			console.log(triggerPoints[i][j]);
		}
	}*/
}


//EVENTS
//turn on sky
function event1() {
	sky=true;
}

//turn on gradient sky
function event2() {
	gradient=true;
}

//turn on ocean
function event3() {
	ocean=true;
}

//turn on sun
function event4() {
	sun=true;
}

//turn on land
function event5() {
	land=true;
}

//turn on clouds
function event6() {
	clouds=true;
}

//turn on trees
function event7() {
	trees=true;
}

//turn on flowers
function event8() {
	flowers=true;
}

//turn on glow
function event9() {
	player.glow();
}

//turn on smile
function event10() {
	player.smile();
}

//resets the whole scene
function reset() {
	sky=false;
	gradient=false;
	ocean=false;
	land=false;
	clouds=false;
	trees=false;
	flowers=false;
	sun=false;
	setTrigPoints(20);
	eventNum=0;
	player.reset();
}

//activates events one by one
function triggerEvent() {
	//increases event number
	if (eventNum<10) {
		eventNum++;
	}
	console.log("Event: " + eventNum);
	if (eventNum==1) {
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
	} else if (eventNum==10) {
		event10();
	}
}


function keyPressed() {
	if (key==" ") {			//program pauses/unpauses when space is pressed
		pause=!pause;
		if (pause) {
			noLoop();
		} else {
			loop();
		}
	} else if (keyCode==ENTER) {	//go through events (for debugging/convinience)
		triggerEvent();
	} else if (keyCode==BACKSPACE) {		//resets the screen
		reset();
	}
}