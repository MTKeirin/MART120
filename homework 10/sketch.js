var headX = 450;  
var headY = 150;  
var headDirection = 1;

var bodyX = 225 
var bodyY = 275
var bodyDirection = 1;

var lpupilX = 400
var lpupilY = 140
var lpupilDirection = 1; 

var rpupilX = 500
var rpupilY = 140
var rpupilDirection = 1;

var dotX = 500;
var dotY = 600;
var dotDirectionX = 1; 
var dotDirectionY = 1; 

var titleBaseSize = 50;
var titleTextSizeValue = titleBaseSize;
var titleSizeFactor = 5;
var titleTextSizeDirection = 1;

var movement;

function setup() {
    createCanvas(900,1000);
    movement = floor(random() * 7) + 1;
  }
  


  function draw() {
    background(220);
    c2 = color(150,75,0);
    c3 = color(500)
    c4 = color(255,192,203)
    c5 = color(150,200,500)
    c6 = color(800,10,10)
    
    
    //hair//
    fill(c2);
    rect(310,130,280,450); 
    
    //head//
    fill(250, 204, 100); 
    ellipse(headX, headY, 300, 250);  
    
    
    headX += headDirection * movement;
    if (headX <= 150 || headX >= 750) {  
        headDirection *= -1;
    }
    //body
    rect(bodyX,bodyY,450,600);
    bodyX += bodyDirection * movement;
    if (bodyX <= 150 || bodyX >= 750) {
        bodyDirection*= -1;
    }

    //left eye//
    fill(c3);
    ellipse(400,140,50,20); 
    //right eye//
    ellipse(500,140,50,20); 
    //left pupil//
    fill(c2);
    circle(lpupilX,lpupilY,15); 
    lpupilY += lpupilDirection * movement;
    if (lpupilY <= 10 || lpupilY >=200) {
        lpupilDirection*= -1;
    }
    //right pupil//
    circle(rpupilX,rpupilY,15); 
    rpupilY += rpupilDirection * movement;
    if (rpupilY <= 10 || rpupilY >=200) {
        rpupilDirection*= -1;
    }



    //nose//
    fill (c4)
    triangle(420,180,450,150,450,180); 

    line(390,219,410,227); //left smile line//
    line(410,227,460,227); //middle smile line//
    line(460,227,490,219); //right smile line//
    line(365,125,395,115); //left bottom eyebrow//
    line(395,115,420,112); //left top eyebrow//
    line(480,112,505,115); //right top eyebrow//
    line(505,115,535,125); //right bottom eyebrow//

    //blue shirt//
    fill (c5)
    rect(225,350,450,600); 
    //little dot//
    stroke(0);
    strokeWeight(10);
    point(dotX,dotY); 
    dotX += dotDirectionX * movement;  
    dotY += dotDirectionY * movement;  

    
    if (dotX <= 0 || dotX >= width) {
        dotDirectionX *= -1;
    }
    if (dotY <= 0 || dotY >= height) {
        dotDirectionY *= -1;
    }
    fill (c6)
    textSize(50);
    text('Emi', 800, 970);
    
    //title//
    fill (c5)
    textSize(titleTextSizeValue);
    text('Self portrait', 50, 50);

    titleTextSizeValue *= titleTextSizeDirection;

    //this should in theory make it grow and shrink. No errors appear and I can't find a way to make it work so??//
    if (titleTextSizeValue >= titleBaseSize * titleSizeFactor || titleTextSizeValue <= titleBaseSize) {
       titleTextSizeDirection *= -1;
    }
  }