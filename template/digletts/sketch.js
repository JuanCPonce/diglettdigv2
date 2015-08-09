/*
  Empty example
 */



var pokeColors = [];

function setup() {


	var cnv = createCanvas(windowWidth, windowHeight);


	background(0);

	//get mic info


	//amp.setInput(sound);
	//sound.play();


	//get camera info
	capture = createCapture(VIDEO);
  capture.size(width, height);
  capture.hide();

	pokeColor1 = color(55,14,110);
	pokeColor2 = color(255,128,0);
	pokeColor3 = color(41,186,247);
	pokeColor4 = color(214,235,30);
	pokeColor5 = color(65,223,60);
	pokeColor = [pokeColor1, pokeColor2, pokeColor3, pokeColor4, pokeColor5];
}


function draw() {

  image(capture, 0, 0, width, height);


  for(var i = 0; i < 40; i++){
  	var randX = Math.random() * width;
  	var randY = Math.random() * height;

  	fill(92,64,50);
  	stroke(1);

		beginShape();
			curveVertex(randX + 34, randY + 39);
			curveVertex(randX + 34, randY + 39);
			curveVertex(randX + 22, randY - 33);
			curveVertex(randX - 18, randY - 35);
			curveVertex(randX - 18, randY + 39);
			curveVertex(randX - 18, randY + 39);
		endShape();

  	fill(242,155, 155);
  	ellipse(randX, randY, 25, 17);

  	noStroke();

  	fill(0);
  	ellipse(randX - 10, randY - 22, 5, 16);
  	ellipse(randX + 10, randY - 22, 5, 13);

  	fill(117, 104, 104);
  	ellipse(randX - 20, randY + 33, 27, 20);
  	ellipse(randX - 3, randY + 38, 20, 15);
   	ellipse(randX + 30, randY + 33, 27, 20);
  	ellipse(randX + 15, randY + 38, 20, 15);

  }

  var thisX = mouseX;
	var thisY = mouseY;

	stroke(0);

	strokeWeight(4);
	var ranPoke = Math.floor(Math.random() * 5);
	fill (pokeColor[ranPoke]);
	ellipse(thisX,thisY,100,100);
	fill(252,252,252);
	arc(thisX, thisY, 100, 100, 0, PI);
	line(thisX - 50, thisY, thisX + 50, thisY);
	ellipse(thisX,thisY,30,30);
	strokeWeight(1);
	ellipse(thisX,thisY,15,15);

}




/*function mouseClicked(){

	//selecting random x and y values for the middle of the pokeball
	//num randX = Math.floor(Math.random() * displayWidth);
	//num randY = Math.floor(Math.random() * displayHeight);
	var thisX = mouseX;
	var thisY = mouseY;

	strokeWeight(4);
	var ranPoke = Math.floor(Math.random() * 5);
	fill (pokeColor[ranPoke]);
	ellipse(thisX,thisY,100,100);
	fill(252,252,252);
	arc(thisX, thisY, 100, 100, 0, PI);
	line(thisX - 50, thisY, thisX + 50, thisY);
	ellipse(thisX,thisY,30,30);
	strokeWeight(1);
	ellipse(thisX,thisY,15,15);
}*/


  //possibly as they get louder the background gets less blurry and switches from gray to posterize?

  //show user in background looking all crazy


	//increase intensity of color background as noise increases


	//make dirt particles go into the air as sound increases


	//make dirt go into certain shapes and change colors at certain sound levels


	//extra credit (haha) - if the camera movies a lot make holes appear in the dirt!


	//text('level: ' + v, 20, 20);

