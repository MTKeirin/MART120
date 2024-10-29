function setup() {
    createCanvas(900,1000);
  }
  


  function draw() {
    background(220);
    c2 = color(150,75,0);
    c3 = color(500)
    c4 = color(255,192,203)
    c5 = color(150,200,500)
    c6 = color(800,10,10)
    fill(c2);
    rect(310,130,280,450); //hair//
    fill(250,204,100);
    ellipse(450,150,300,250); //head//
    rect(225,275,450,600) //body//
    fill(c3);
    ellipse(400,140,50,20); //left eye//
    ellipse(500,140,50,20); // right eye//
    fill(c2);
    circle(400,137,15); //left pupil//
    circle(500,137,15); //right pupil//
    fill (c4)
    triangle(420,180,450,150,450,180); //nose//
    line(390,219,410,227); //left smile line//
    line(410,227,460,227); //middle smile line//
    line(460,227,490,219); //right smile line//
    line(365,125,395,115); //left bottom eyebrow//
    line(395,115,420,112); //left top eyebrow//
    line(480,112,505,115); //right top eyebrow//
    line(505,115,535,125); //right bottom eyebrow//
    fill (c5)
    rect(225,350,450,600); //blue shirt//
    point(500,180); //little dot//
    fill (c6)
    textSize(50);
    text('Emi', 800, 970);
  }