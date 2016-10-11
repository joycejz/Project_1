//based off cluster code from class

function Cloud(x,y,v) {
	this.xPos=x;
	this.yPos=y;
	this.vel=v;

	this.update=function() {
		//moves the cloud across the screen to the right
		this.xPos+=this.vel;
		//once the cloud goes off the screen, it is brought back onto the screen as a "new" cloud
		if (this.xPos>windowWidth+20) {
			this.reset();
		}
	}

	this.reset=function() {
		//brings cloud back to the left and gives it new values
		this.xPos=-20;
		this.yPos=random(15,windowHeight/3)
		this.vel=random(5,15);
	}

	this.display=function() {
		noStroke();
		fill(255);
		//forms a cloud shape
		ellipse(this.xPos,this.yPos,30,30);
		ellipse(this.xPos-20,this.yPos-5,30,30);
		ellipse(this.xPos+20,this.yPos-10,30,30);
		ellipse(this.xPos+3,this.yPos-20,35,35);
		ellipse(this.xPos+30,this.yPos,60,25);
	}
}