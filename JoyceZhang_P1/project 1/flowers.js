function Flower(y,v) {
	this.xPos=windowWidth+10;
	this.yPos=y;
	this.vel=v;
	this.colors=[color(255,125,185),color(200,165,255),color(255,170,125),color(115,235,175)]
	this.col=random(this.colors);

	this.update=function() {
		//moves the flower across the screen to the left
		this.xPos-=this.vel;
		//once the flower goes off the screen, it is brought back onto the screen as a "new" flower
		if (this.xPos<-20) {
			this.reset();
		}
		//moves the flower up and down (like floating in the wind)
		if (this.xPos<=windowWidth/4) {
			this.yPos+=5;
		} else if (this.xPos>windowWidth/4 && this.xPos<=windowWidth/2) {
			this.yPos-=5;
		} else if (this.xPos>windowWidth/2 && this.xPos<=windowWidth*3/4) {
			this.yPos+=5;
		} else if (this.xPos>windowWidth*3/4 && this.xPos<windowWidth+20) {
			this.yPos-=5;
		}
	}

	this.reset=function() {
		//brings flower back to the right and gives it new values
		this.xPos=windowWidth+10;
		this.yPos=random(windowHeight/4,windowHeight/2);
		this.vel=random(10,20);
		this.col=random(this.colors);
	}

	this.display=function() {
		noStroke();
		fill(this.col);
		//makes flower petals
		push();
		translate(this.xPos,this.yPos);
		for(var i=0;i<5;i++) {
			rotate(radians(72));
			ellipse(10,0,20,10);
		}
		pop();
		fill(255,230,55);
		//center of flower
		ellipse(this.xPos,this.yPos,10,10);
	}
}