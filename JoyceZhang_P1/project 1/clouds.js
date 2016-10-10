//based off cluster code from class

function Cloud(x,y,v) {
	this.xPos=x;
	this.yPos=y;
	this.vel=v;

	this.update=function() {
		this.xPos+=this.vel;
		if (this.xPos>windowWidth+20) {
			this.reset();
		}
	}

	this.reset=function() {
		this.xPos=-20;
		this.yPos=random(15,windowHeight/3)
		this.vel=random(5,15);
	}

	this.display=function() {
		noStroke();
		fill(255);
		ellipse(this.xPos,this.yPos,30,30);
		ellipse(this.xPos-20,this.yPos-5,30,30);
		ellipse(this.xPos+20,this.yPos-10,30,30);
		ellipse(this.xPos+3,this.yPos-20,35,35);
		ellipse(this.xPos+30,this.yPos,60,25);
	}
}