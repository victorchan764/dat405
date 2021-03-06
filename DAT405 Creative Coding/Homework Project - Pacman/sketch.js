//Setting up canvas
function setup() {
	createCanvas(200, 200);
	background(220);
}

function draw() {
	stroke(0, 0);
	
	//Pacman Outline 'All Black lines'
	fill("black");
	rect(60, 30, 10, 10);
	rect(70, 30, 10, 10);
	rect(70, 30, 10, 10);
	rect(80, 30, 10, 10);
	rect(90, 30, 10, 10);
	rect(100, 30, 10, 10);
	rect(110, 30, 10, 10);
	rect(120, 30, 10, 10);
	rect(130, 30, 10, 10);

	rect(60, 40, 10, 10);
	rect(60, 50, 10, 10);
	rect(50, 50, 10, 10);
	rect(40, 50, 10, 10);
	rect(40, 60, 10, 10);
	rect(30, 60, 10, 10);

	rect(20, 70, 10, 10);
	rect(20, 80, 10, 10);
	rect(20, 90, 10, 10);
	rect(20, 100, 10, 10);
	rect(20, 110, 10, 10);
	rect(20, 120, 10, 10);
	rect(20, 130, 10, 10);

	rect(30, 140, 10, 10);
	rect(40, 140, 10, 10);
	rect(40, 150, 10, 10);
	rect(50, 150, 10, 10);
	rect(60, 150, 10, 10);
	rect(60, 160, 10, 10);
	rect(70, 160, 10, 10);
	rect(80, 160, 10, 10);
	rect(90, 160, 10, 10);
	rect(100, 160, 10, 10);
	rect(110, 160, 10, 10);
	rect(120, 160, 10, 10);

	rect(130, 160, 10, 10);
	rect(130, 150, 10, 10);
	rect(140, 150, 10, 10);
	rect(150, 150, 10, 10);
	rect(160, 140, 10, 10);
	rect(160, 130, 10, 10);
	rect(160, 120, 10, 10);
	rect(150, 120, 10, 10);
	rect(140, 120, 10, 10);
	rect(130, 110, 10, 10);
	rect(120, 110, 10, 10);
	rect(110, 110, 10, 10);
	rect(100, 100, 10, 10);
	rect(110, 90, 10, 10);
	rect(120, 90, 10, 10);
	rect(130, 90, 10, 10);
	rect(140, 80, 10, 10);
	rect(140, 40, 10, 10);
	rect(150, 80, 10, 10);
	rect(150, 40, 10, 10);
	rect(160, 70, 10, 10);
	rect(160, 60, 10, 10);
	rect(150, 50, 10, 10);

	//Pacman's Eye
	rect(100, 60, 10, 10);

	//Pacman's Colour - Yellow
	fill("Yellow");
	rect(30, 70, 10, 10);
	rect(30, 80, 10, 10);
	rect(30, 90, 10, 10);
	rect(30, 100, 10, 10);
	rect(30, 110, 10, 10);
	rect(30, 120, 10, 10);
	rect(30, 130, 10, 10);
	rect(40, 70, 10, 10);
	rect(40, 80, 10, 10);
	rect(40, 90, 10, 10);
	rect(40, 100, 10, 10);
	rect(40, 110, 10, 10);
	rect(40, 120, 10, 10);
	rect(40, 130, 10, 10);
	rect(50, 60, 10, 10);
	rect(50, 70, 10, 10);
	rect(50, 80, 10, 10);
	rect(50, 90, 10, 10);
	rect(50, 100, 10, 10);
	rect(50, 110, 10, 10);
	rect(50, 120, 10, 10);
	rect(50, 130, 10, 10);
	rect(50, 140, 10, 10);
	rect(60, 60, 10, 10);
	rect(60, 70, 10, 10);
	rect(60, 80, 10, 10);
	rect(60, 90, 10, 10);
	rect(60, 100, 10, 10);
	rect(60, 110, 10, 10);
	rect(60, 120, 10, 10);
	rect(60, 130, 10, 10);
	rect(60, 140, 10, 10);
	rect(70, 40, 10, 10);
	rect(70, 50, 10, 10);
	rect(70, 60, 10, 10);
	rect(70, 70, 10, 10);
	rect(70, 80, 10, 10);
	rect(70, 90, 10, 10);
	rect(70, 100, 10, 10);
	rect(70, 110, 10, 10);
	rect(70, 120, 10, 10);
	rect(70, 130, 10, 10);
	rect(70, 140, 10, 10);
	rect(70, 150, 10, 10);
	rect(80, 40, 10, 10);
	rect(80, 50, 10, 10);
	rect(80, 60, 10, 10);
	rect(80, 70, 10, 10);
	rect(80, 80, 10, 10);
	rect(80, 90, 10, 10);
	rect(80, 100, 10, 10);
	rect(80, 110, 10, 10);
	rect(80, 120, 10, 10);
	rect(80, 130, 10, 10);
	rect(80, 140, 10, 10);
	rect(80, 150, 10, 10);
	rect(90, 40, 10, 10);
	rect(90, 50, 10, 10);
	rect(90, 60, 10, 10);
	rect(90, 70, 10, 10);
	rect(90, 80, 10, 10);
	rect(90, 90, 10, 10);
	rect(90, 100, 10, 10);
	rect(90, 110, 10, 10);
	rect(90, 120, 10, 10);
	rect(90, 130, 10, 10);
	rect(90, 140, 10, 10);
	rect(90, 150, 10, 10);
	rect(100, 40, 10, 10);
	rect(100, 50, 10, 10);
	rect(100, 70, 10, 10);
	rect(100, 80, 10, 10);
	rect(100, 90, 10, 10);
	rect(100, 110, 10, 10);
	rect(100, 120, 10, 10);
	rect(100, 130, 10, 10);
	rect(100, 140, 10, 10);
	rect(100, 150, 10, 10);
	rect(110, 40, 10, 10);
	rect(110, 50, 10, 10);
	rect(110, 60, 10, 10);
	rect(110, 70, 10, 10);
	rect(110, 80, 10, 10);
	rect(110, 120, 10, 10);
	rect(110, 130, 10, 10);
	rect(110, 140, 10, 10);
	rect(110, 150, 10, 10);
	rect(120, 40, 10, 10);
	rect(120, 50, 10, 10);
	rect(120, 60, 10, 10);
	rect(120, 70, 10, 10);
	rect(120, 80, 10, 10);
	rect(120, 120, 10, 10);
	rect(120, 130, 10, 10);
	rect(120, 140, 10, 10);
	rect(120, 150, 10, 10);
	rect(130, 40, 10, 10);
	rect(130, 50, 10, 10);
	rect(130, 60, 10, 10);
	rect(130, 70, 10, 10);
	rect(130, 80, 10, 10);
	rect(130, 120, 10, 10);
	rect(130, 130, 10, 10);
	rect(130, 140, 10, 10);
	rect(140, 50, 10, 10);
	rect(140, 60, 10, 10);
	rect(140, 70, 10, 10);
	rect(140, 130, 10, 10);
	rect(140, 140, 10, 10);
	rect(150, 60, 10, 10);
	rect(150, 70, 10, 10);
	rect(150, 130, 10, 10);
	rect(150, 140, 10, 10);

}
