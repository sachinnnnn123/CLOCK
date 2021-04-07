

function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);
}

function draw() {


  background("black"); 
  translate(400,200);
  rotate(-90); 
 
 
  var hr = hour();
var mn = minute();
var sc = second();
  

    scAngle = map(sc, 0, 60, 0, 360);
    mnAngle = map(mn, 0, 60, 0, 360);
    hrAngle = map(hr%12, 0, 12 ,0, 360);

    push();
    rotate(scAngle);
    stroke("red")
    strokeWeight(5);
    line(0,0,100,0);
    pop();

    push();
    rotate(mnAngle);
    stroke("blue")
    strokeWeight(5);
    line(0,0,80,0);
    pop();

    push();
    rotate(hrAngle);
    stroke("green")
    strokeWeight(5);
    line(0,0,55,0);
    pop();

    noFill();
    stroke("red");
    strokeWeight(5);
    arc(0,0,300,300,0,scAngle);

    stroke("blue");
    strokeWeight(5);
    arc(0,0,280,280,0,mnAngle);

    stroke("green");
    arc(0,0,260,260,0,hrAngle);
    




    drawSprites();
}