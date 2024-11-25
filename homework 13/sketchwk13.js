// rectangle character x and y//
var characterX = 100;
var characterY = 100;
// key codes for each letter//
var w = 87; 
var s = 83;
var a = 65;
var d = 68;


//var for size//
var shapeXs = [];
var shapeYs = [];
var diameters = [];

var shapeXSpeeds = [];
var shapeYSpeeds = [];

//grey circle thingy (keep)//
var mouseShapeX;
var mouseShapeY;
var mouseShapeSpeedX;
var mouseShapeSpeedY;
// Flag to check if the player has won//
var gameWon = false;

var colors = []; // Array to hold colors for each UFO

//random color generator for UFOs//
function randomColor() {
    var r = random(255); // Random value for red
    var g = random(255); // Random value for green
    var b = random(255); // Random value for blue
    return color(r, g, b); // Return the random color
}

//sets up Unidentified Flying Objects//
function setup() {
    createCanvas(500, 600);
    
    // Initialize UFOs and random colors
    for (var i = 0; i < 50; i++) {
        shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) - 2);
        shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) - 2);
        shapeXs[i] = getRandomNumber(500);
        shapeYs[i] = getRandomNumber(600);
        diameters[i] = getRandomNumber(30);

        // Generate random color for each UFO and store it
        colors[i] = randomColor();
    }
     
    createCharacter(100, 350);
}

//keep//
function draw() {
    background(170, 2, 2); // Red background
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

    // creates random speed for all UFOs
    for (var i = 0; i < shapeXs.length; i++) {
        // Use the pre-generated color from the colors array
        fill(colors[i]);  // Use the color assigned earlier

        // Draw the UFOs (random colors only happen once)
        circle(shapeXs[i], shapeYs[i], diameters[i]);

        // Update the speeds for UFO movement
        shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

        // Move the UFOs
        shapeXs[i] += shapeXSpeeds[i];
        shapeYs[i] += shapeYSpeeds[i];

        // Check boundaries for UFOs and wrap around the screen if necessary
        if (shapeXs[i] > width) {
            shapeXs[i] = 0;
        }
        if (shapeXs[i] < 0) {
            shapeXs[i] = width;
        }
        if (shapeYs[i] > height) {
            shapeYs[i] = 0;
        }
        if (shapeYs[i] < 0) {
            shapeYs[i] = height;
        }
    }

    // Randomly move the mouse-clicked object
    if (mouseShapeX !== undefined && mouseShapeY !== undefined) {
        fill(120, 130, 140);
        circle(mouseShapeX, mouseShapeY, 25);

        // Update the position based on the speed
        mouseShapeX += mouseShapeSpeedX;
        mouseShapeY += mouseShapeSpeedY;

        // Check boundaries for the mouse-clicked object and wrap around if needed
        if (mouseShapeX > width) {
            mouseShapeX = 0;
        }
        if (mouseShapeX < 0) {
            mouseShapeX = width;
        }
        if (mouseShapeY > height) {
            mouseShapeY = 0;
        }
        if (mouseShapeY < 0) {
            mouseShapeY = height;
        }
    }

    // If the game is won, display the win message and stop further updates
    if (gameWon) {
        fill(0);
        stroke(5);
        textSize(30);
        text("You Win!", width / 2 - 50, height / 2 - 50);
        return;
    }

    // Stops character from appearing on screen if it wins
    if (characterX < 50 && characterY > height - 50) {
        gameWon = true; // Set the flag to true when the player reaches the exit area
    }
}

// Handle character movement
function characterMovement() {
    // stops character movement after it wins
    if (gameWon) return;

    // codes for keys
    if (keyIsDown(w)) {
        characterY -= 10;   
    }
    if (keyIsDown(s)) {
        characterY += 10;   
    }
    if (keyIsDown(a)) {
        characterX -= 10;   
    }
    if (keyIsDown(d)) {
        characterX += 10;   
    }
    if (characterX > width) {
        characterX = 0;
    }
    if (characterX < 0) {
        characterX = width;
    }
    if (characterY > height) {
        characterY = 0;
    }
    if (characterY < 0) {
        characterY = height;
    }
}

function createCharacter(x, y) {
    characterX = x;
    characterY = y;
}

// main character energy
function drawCharacter() {
    fill(23, 40, 123);  // dark blue
    rect(characterX - 12.5, characterY - 12.5, 25, 25);  
}

function createBorders(thickness) {
    // Top border (full width)
    rect(0, 0, width, thickness);

    // Left border shortened for exit
    rect(0, 0, thickness, height - 50); 
    // Bottom border (full width)
    rect(0, height - thickness, width, thickness);  

    // Right border (full height)
    rect(width - thickness, 0, thickness, height); 
}

function mouseClicked() {
    // When mouse is clicked, set position for grey circle
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;

    // Add random speed to the object for movement
    mouseShapeSpeedX = random(-3, 3);  // Random speed in x direction
    mouseShapeSpeedY = random(-3, 3);  // Random speed in y direction
}

function getRandomNumber(number) {
    return Math.floor(Math.random() * number) + 10;
}