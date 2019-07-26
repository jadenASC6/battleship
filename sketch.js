// The board should be a 10x10 grid.
// When the grid loads it should have 'ships' laid out in certain positions, which are unknown to the user.
// When the user clicks on a box, it should change color revealing whether or not it is a 'hit'.
// Bonus:
// Create a way for the user to reset the board
// Create a way to track the user's score
let num_of_boxes_in_coloumn = 10;
let num_of_boxes_in_row = 10;
let box_height; 
let box_width;
//let ship = rect(0, 0, 60, 60);
//shipPos = 
let xPos;
let yPos;
let color;
let color2;
let color3;
let color4;
let color5;
let red = [225,0,0];
let blue = [0,30,112];
function setup() {
    createCanvas(600, 600);
    background(0,0,0);
    box_height = height/num_of_boxes_in_coloumn;
    box_width = width/num_of_boxes_in_row;
    color = blue;
    color2 = blue;
    color3 = blue;
    color4 = blue;
    color5 = blue;
}

function draw() {
    for (let i = 0; i < num_of_boxes_in_row + 1; i++) {
        const x = i*box_width;
        for (let j = 0; j < num_of_boxes_in_coloumn + 1; j++) {
            const y = j*box_height;
            fill(0,30,112);
            rect(x,y,box_width,box_height);
            Ship(1,1, color);
            Ship(1, 2, color2);
            Ship(10, 10, color3);
            Ship(7, 8, color4);
            Ship(10, 6, color5);
        }
    }
    //fill(ships)
}

function Ship(x, y, colorN){
    fill(colorN);
    rect(box_width*(x-1), box_height*(y-1), box_width, box_height);
    //console.log('in box')
}

function notShip() {
    
}

function mouseClicked(){ 
    if (mouseX < 60 && mouseX > 0 && mouseY < 60 && mouseY > 0 ){
        color = red;
    } else if (mouseX < 60 && mouseX > 0 && mouseY < 120 && mouseY > 60 ){
        color2 = red; 
    // else if( mouse X )
    } else if (mouseX < 600 && mouseX > 540 && mouseY < 600 && mouseY > 540 ){
        color3 = red;     
    } else if (mouseX > 360 && mouseX <  420 && mouseY > 320 && mouseY < 360){
        color4 = red;
    } else if (mouseX < 600 && mouseX >  540 && mouseY > 420 && mouseY < 480){
        color5 = red;
    }
    // if (mouseX > 0 && mouseX < 60 && ){
        
    // }
    //     if (mouseX < 60 && mouseX > 0 && mouseY > 0 && mouseY < 60) {
    //         fill(255, 0, 0);
    //         circle(0 + box_width/2, 0 + box_height/2, box_width/4);
    //     } else {
    //         console.log('nothing');
    //     }
    
}