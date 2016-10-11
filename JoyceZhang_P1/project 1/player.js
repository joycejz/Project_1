function Player(x,y,speed,c) {
	this.xPos=x;
	this.yPos=y;
	this.maxSpeed=speed;
	this.col=c
	this.face=false;
	this.glowing=false;

	this.update=function() {
		//the main object can move around randomly
		//(player don't need to control it)
		this.xPos+=int(random(this.maxSpeed*-1,this.maxSpeed)); 
		this.yPos+=int(random(this.maxSpeed*-1,this.maxSpeed));

		//doesn't let the object travel off the screen
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

	//changes object's color
	this.changeColor=function(c) {
		this.col=c
	}

	//turn on smile
	this.smile=function() {
		this.face=true;
	}

	//turn on glow
	this.glow=function() {
		this.glowing=true;
	}

	//turns all effects off
	this.reset=function() {
		this.face=false;
		this.glowing=false;
	}


	this.display=function() {
		//pink glow
		if (this.glowing==true) {
			noStroke();
			for(var i=5;i>=0;i--) {
				fill(255,100+20*i,170+10*i);
				ellipse(this.xPos,this.yPos,50+5*i,50+5*i);
			}
		}
		stroke(0);
		fill(this.col);
		ellipse(this.xPos, this.yPos, 50,50);	//player
		//smiley face
		if (this.face==true) {
			noFill();
			arc(this.xPos,this.yPos,30,30,0,PI,OPEN);
			ellipse(this.xPos-14,this.yPos-10,5,5);
			ellipse(this.xPos+14,this.yPos-10,5,5);
		}
	}
}