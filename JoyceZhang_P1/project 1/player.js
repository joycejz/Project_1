function Player(x,y,speed,c) {
	/*this.xPos=windowWidth/2;
	this.yPos=windowHeight/2;
	this.maxSpeed=10;
	this.col=color(255,255,255);*/
	this.xPos=x;
	this.yPos=y;
	this.maxSpeed=speed;
	this.col=c
	this.face=false;
	this.glowing=false;

	this.update=function() {
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

	this.changeColor=function(c) {
		this.col=c
	}

	this.smile=function() {
		this.face=true;
	}

	/*this.glow=function() {
		this.glowing=true;
	}*/

	this.reset=function() {
		this.xPos=x;
		this.yPos=y;
		this.maxSpeed=speed;
		this.col=c
		this.face=false;
		this.glowing=false;
	}

	this.display=function() {
		/*if (this.glowing==true) {
			noStroke();
			for(var i=5;i>=2;i--) {
				fill(255,255,40*i);
				ellipse(this.xPos,this.yPos,50+5*i,50+5*i);
			}
		}*/
		stroke(0);
		fill(this.col);
		ellipse(this.xPos, this.yPos, 50,50);
		if (this.face==true) {
			noFill();
			arc(this.xPos,this.yPos,30,30,0,PI,OPEN);
			ellipse(this.xPos-14,this.yPos-10,5,5);
			ellipse(this.xPos+14,this.yPos-10,5,5);
		}
	}
}