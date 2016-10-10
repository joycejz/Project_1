function Tree(x,y,c) {
	this.xPos=x;
	this.yPos=y;
	this.col=c;

	this.display=function() {
		strokeWeight(3);
		stroke(this.col);
		line(this.xPos-20,this.yPos,this.xPos+20,this.yPos);
		line(this.xPos-18,this.yPos-5,this.xPos+18,this.yPos-5);
		line(this.xPos-16,this.yPos-10,this.xPos+16,this.yPos-10);
		line(this.xPos-14,this.yPos-15,this.xPos+14,this.yPos-15);
		line(this.xPos-12,this.yPos-20,this.xPos+12,this.yPos-20);
		line(this.xPos-10,this.yPos-25,this.xPos+10,this.yPos-25);
		line(this.xPos-8,this.yPos-30,this.xPos+8,this.yPos-30);
		line(this.xPos-6,this.yPos-35,this.xPos+6,this.yPos-35);
		line(this.xPos-4,this.yPos-40,this.xPos+4,this.yPos-40);
		line(this.xPos-2,this.yPos-45,this.xPos+2,this.yPos-45);
	}
}