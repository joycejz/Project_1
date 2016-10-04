//SERENDIPITOUS
//(adj.)
//occurring or discovered by chance in a happy or beneficial way
//the user will be able to move an object around the screen
//when the object passes through random points/areas on the screen,
//random events will be triggered
//the events should convey a light, happy mood
//some will affect the object

var x;
var y;
var x1;
var y1;
var x2;
var y2;

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

	myPlayer=new Player(windowWidth/2,windowHeight/2,20,color(255,255,255));
}

function draw() {
	background(255);
	stroke(0);
	fill(255);
	
	myPlayer.move();
	myPlayer.display();

	//lets user move the main object with arrow keys
	if (keyIsPressed) {
		if (keyCode==LEFT_ARROW) {
			myPlayer.xPos-=myPlayer.maxSpeed;
		} else if (keyCode==RIGHT_ARROW) {
			myPlayer.xPos+=myPlayer.maxSpeed;
		} else if (keyCode==UP_ARROW) {
			myPlayer.yPos-=myPlayer.maxSpeed;
		} else if (keyCode==DOWN_ARROW) {
			myPlayer.yPos+=myPlayer.maxSpeed;
		}
	}

	//if the object ever hits any of these points, a random event is called
	//code will be adjusted so that the trigger points have a higher hit box
	//so it will be easier to happen upon an event
	/*if ((x==x1 && y==y1) || (x==x2 && y==y2)) {
		triggerEvent();
	}*/
}

/*function event1() {

}

function event2() {

}

function event3() {

}

function triggerEvent() {
	var events[1, 2, 3];
	var eventNum=random(events);
	if(eventNum==1) {
		event1();
	} else if (eventNum==2) {
		event2();
	} else if (eventNum==3) {
		event3();
	}
}*/

function Player(x,y,speed,c) {
	/*this.xPos=windowWidth/2;
	this.yPos=windowHeight/2;
	this.maxSpeed=10;
	this.col=color(255,255,255);*/
	this.xPos=x;
	this.yPos=y;
	this.maxSpeed=speed;
	this.col=c

	this.move=function() {
		this.xPos+=int(random(this.maxSpeed*-1,this.maxSpeed)); 
		this.yPos+=int(random(this.maxSpeed*-1,this.maxSpeed));
		if (this.xPos<0) {
				this.xPos=0;
			} else if (this.xPos>windowWidth) {
				this.xPos=windowWidth;
			}
			if (this.yPos<0) {
				this.yPos=0;
			} else if (this.yPos>windowHeight) {
				this.yPos=windowHeight;
			}
	}

	this.display=function() {
		fill(this.col);
		ellipse(this.xPos, this.yPos, 50,50);
	}
}