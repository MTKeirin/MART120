// rectangle character x and y//
var characterX = 100;
var characterY = 100;
// key codes for each letter//
var w = 87; 
var s = 83;
var a = 65;
var d = 68;

// x and y for shape 1//
var shapeX = 30;
var shapeY = 50;
var shapeXSpeed;
var shapeYSpeed;

// x and y for shape 2//
var shape2X = 100;
var shape2Y = 200;
var shape2XSpeed;
var shape2YSpeed;

//grey circle thingy//
var mouseShapeX;
var mouseShapeY;
// Flag to check if the player has won//
var gameWon = false;

function setup() {
    createCanvas(500, 600);
    shapeXSpeed = Math.floor(Math.random() * 5) + 1; //speed for shape 1//
    shapeYSpeed = Math.floor(Math.random() * 5) + 1;
    shape2XSpeed = Math.floor(Math.random() * 5) + 1;  // speed for shape 2//
    shape2YSpeed = Math.floor(Math.random() * 5) + 1;  
    createCharacter(100, 350);
}

function draw() {
    background(170,2,2);
    stroke(0);
    fill(0);

    // Call createBorders function//
    createBorders(20);

    // Exit message//
    textSize(16);
    text("EXIT", 50, height - 50);  //placed bottom left//

    //creates character functions//
    drawCharacter();
    characterMovement();

    // shape 1 function//
    fill(24,10,44);
    circle(shapeX, shapeY, 10);

    //get random speed for shape 1//
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

    //move shape//
    shapeX += shapeXSpeed;
    shapeY += shapeYSpeed;

    // wrap around for shape 1//
    if(shapeX > width) {
        shapeX = 0;
    }
    if(shapeX < 0) {
        shapeX = width;
    }
    if(shapeY > height) {
        shapeY = 0;
    }
    if(shapeY < 0) {
        shapeY = height;
    }

    // shape 2 (beeeg)//
    fill(60,0,70);
    circle(shape2X, shape2Y, 100);

    // Wrap around for shape 2//
    if(shape2X > width) {
        shape2X = 0;
    }
    if(shape2X < 0) {
        shape2X = width;
    }
    if(shape2Y > height) {
        shape2Y = 0;
    }
    if(shape2Y < 0) {
        shape2Y = height;
    }

    // Move shape 2//
    shape2X += shape2XSpeed;
    shape2Y += shape2YSpeed;

    // If the game is won, display the win message and stop further updates//
    if (gameWon) {
        fill(0);
        stroke(5);
        textSize(30);
        text("You Win!", width / 2 - 50, height / 2 - 50);
        return;
    }

    // Stops character from appearing on screen if it wins//
    if (characterX < 50 && characterY > height - 50) {
        gameWon = true; // Set the flag to true when the player reaches the exit area//
    }

    // Create the grey circle based on mouse click
    fill(120,130,140);
    circle(mouseShapeX, mouseShapeY, 25);
}

function characterMovement() {
    // stops character movement after it wins//
    if (gameWon) return;

    // codes for  keys//
    if(keyIsDown(w)) {
        characterY -= 10;   
    }
    if(keyIsDown(s)) {
        characterY += 10;   
    }
    if(keyIsDown(a)) {
        characterX -= 10;   
    }
    if(keyIsDown(d)) {
        characterX += 10;   
    }

    // character wrap around//
    if(characterX > width) {
        characterX = 0;
    }
    if(characterX < 0) {
        characterX = width;
    }
    if(characterY > height) {
        characterY = 0;
    }
    if(characterY < 0) {
        characterY = height;
    }
}

function createCharacter(x, y) {
    characterX = x;
    characterY = y;
}

// main character energy//
function drawCharacter() {
    fill(23,40,123);  // dark blue//
    rect(characterX - 12.5, characterY - 12.5, 25, 25);  
}

function createBorders(thickness) {
    // Top border (full width)//
    rect(0, 0, width, thickness);

    // Left border shortened for exit//
    rect(0, 0, thickness, height - 50); 
    // Bottom border (full width)//
    rect(0, height - thickness, width, thickness);  

    // Right border (full height)//
    rect(width - thickness, 0, thickness, height); 
}

function mouseClicked() {
    // When mouse is clicked, set position for grey circle
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}