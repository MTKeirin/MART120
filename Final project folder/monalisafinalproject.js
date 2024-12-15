
function setup() {
    createCanvas(1000,1000);
}

function draw() {
   var c2 = color(0, 204, 204);//teal
   var c3 = color (216, 118, 70);//light brown
   var c4 = color(0,0,0,);//black
   var c5 = color (176,145,141);//medium brown
   var c6 = color (255,231,189);//tan
   var c7 = color (129,95,36);//dark brown
   var c8 = color (255,255,218)//pale yellow
   var c9 = color (255,102,178);//pink!

   background(c2);
   fill (c3);
   rect(0,500,1000,500);//scenery
   fill (c4);
   rect(200,800,600,200); //lap


fill (c7);
rect (375,75,250,400);//behind head hair
rect(375,75,50,400);// strand behind head stage left
   fill (c6);
   rect (450,400,100,100);//neck
   rect(350,475,275,225);//chest
   ellipse(500,250,250,325);//head

   fill (c4);
   rect(250,475,100,325);//stage left arm
   rect(350,600,275,300);//shirt
   rect(625,475,100,325);//stage right arm

   fill (c5); 
   rect(250,750,275,100);//lower stage left
   rect(525,750,200,100);//lower stage right

   fill (c6);
   rect(515,770, 100,100);//stage right hand
   rect(525,750,100,100);//stage left hand
   
   fill (c7)
   rect(600,75,50,400);//strand infront of head stage right
   rect(375,75,250,75);//top of hair

   //facial features//
   fill (c3);
   triangle(475,325,500,225,500,325);//nose
   fill(c8);
   ellipse(450,230,50,25);//left eye
   ellipse(550,230,50,25);// right eye
   fill(c7);
   circle(460,230,20);//left iris
   circle(560,230,20);//right iris
   line(460,350,475,355);//line segment d
   line(475,355,515,355);//line segment e
   line(515,355,520,350);//line segment f

   fill(c9);
   textSize(50);
   text('Emi', 800, 970);

   textSize(50);
   text('Cubic Lisa', 50,50);
}