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

	//main object's starting point
	x=windowWidth/2;
	y=windowHeight/2;

	//random coordinates
	x1=int(random(windowWidht));
	y2=int(random(windowHeight));
	x2=int(random(100,200));
	y2=int(random(150,320));
}

function draw() {
	//lets user move the main object with arrow keys
	if (keyIsPressed) {
		if keyCode=="LEFT_ARROW" {
			x-=5;
		} else if keyCode=="RIGHT_ARROW" {
			x+=5;
		} else if keyCode=="UP_ARROW" {
			y-=5;
		} else if keyCode=="DOWN_ARROW" {
			y+=5;
		}
	}
	//makes sure the main object never leaves the screen
	//limits it to the window
	if (x<0) {
		x=0;
	} else if (x>windowWidth) {
		x=windowWidth;
	}
	if (y<0) {
		y=0;
	} else if (y>windowHeight) {
		y=windowHeight;
	}
	//main object
	ellipse(x,y,50,50);

	//if the object ever hits any of these points, a random event is called
	//code will be adjusted so that the trigger points have a higher hit box
	//so it will be easier to happen upon an event
	if ((x==x1 && y==y1) || (x==x2 && y==y2)) {
		triggerEvent();
	}
}

function event1() {

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
}