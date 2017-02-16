 //George Mosher, rehsom@gmail.com, 2/13/2017
 //For this sketch I used a design for a little sculpture I made in middle school. The only similarities I carried over were a 
 //masked blue man with a little creature on a leash, but the actual designs for the characters are completely new. I started out
 //feeling like it was frustrating and convoluted to code an image, but shortly after I started, I got the hang of it and started 
 //really seeing where I could go with it. I like the idea of using math to plot out which visual elements go where, and I really liked
 //that creating art introduced me more to coding. I am excited to see what I can do later on, because I feel like I learned pretty
 //fast. Hopefully I can figure out how to implement this avatar into a later game that I create, either in this class or in the future.

function setup() {
createCanvas(1000, 700);
}

function man() {
stroke(1);
    fill(0); //neck
    rect(255, 330, 20, 30);
fill(13, 44, 105); //head
    ellipse(300, 200, 300, 300);
fill(150, 85, 0); //mask
    ellipse(340, 200, 250, 280);
    fill(245, 140, 4);
    ellipse(350, 200, 250, 280);
//eyes
    fill(186, 0, 0);
    ellipse(280, 230, 47, 42);
    ellipse(450, 230, 42, 37);
    fill(0);
    ellipse(280, 230, 40, 35);
    ellipse(450, 230, 35, 30);
    fill(255);
    ellipse(280, 230, 30, 25);
    ellipse(450, 230, 25, 20);
fill(0); //maskstrap
    rect(150, 195, 76, 23);   
fill(0); //teeth
    line(350, 338, 350, 300);
    line(365, 338, 365, 300);
    line(380, 335, 380, 300);
    line(395, 330, 395, 300);
//body
    fill(0);
    ellipse(250, 450, 150, 200);
    ellipse(260, 480, 155, 150);
   
//Rhand
    ellipse(120, 500, 24, 37);
    fill(13, 44, 105);
    ellipse(112, 513, 4, 25); //finger
    ellipse(117, 517, 4, 25);
    ellipse(122, 518, 4, 28);
    ellipse(128, 514, 4, 25);
    beginShape();
    vertex(129, 490);
    vertex(140, 505);
    vertex(138, 506);
    vertex(127, 496);
    endShape();
    noStroke();
    ellipse(120, 500, 23, 35); //palm
    stroke(1);
   
//RightArm
    fill(0)
    beginShape();
    vertex(220, 360);
    vertex(120, 390);
    vertex(110, 490);
    vertex(130, 488);
    vertex(140, 410);
    vertex(210, 390);
    endShape();
    
var ex = 360
var ey = 420
var EX = 353
var EY = 443

var wx = 445
var wy = 435
var WX = 443
var WY = 452

var armpit = 260

var thumb = 450
var fingers = 458
var palm = 449
var leash = 452

var connector1 = 460
var connector2 = 457

        if(mouseX<448){
            ex = mouseX-100;
            EX = mouseX-110;
            wx = mouseX-4;
            WX = mouseX-4;
            thumb = mouseX;
            palm = mouseX;
            fingers = mouseX+10;
            leash = mouseX+2;
            connector1 = mouseX+5;
            connector2 = mouseX+10;
                } else{
                    ex = 360;
                }
    ////////////////////////////
       if(mouseX<400){
                armpit = mouseX-130;
                    } else{
                    armpit = 260;
                    }
// LHand
    fill(13, 44, 105);
    ellipse(palm, 443, 35, 20); //palm
    fill(88, 13, 13);
    rect(leash, 430, 8, 25);//leash
    fill(13, 44, 105);
    ellipse(fingers, 443, 18, 5); //fingers
    ellipse(fingers, 452, 15, 4);
    ellipse(fingers, 448, 18, 5);
    ellipse(fingers, 438, 18, 5);
    ellipse(thumb, 438, 5, 15);


//LeftArm
    fill(0)
    beginShape();
    vertex(260, 350); //shoulder
    vertex(ex, ey); //elbow
    vertex(wx, wy); //wrist
    vertex(WX, WY); //wrist
    vertex(EX, EY); //elbow
    vertex(armpit, 380); //armpit
    endShape(0);   
      
//leash   
    fill(74, 9, 9);
    stroke(1);    
    quad(connector1, 430, mouseX, mouseY, mouseX, mouseY, connector2, 433);
    

//rightleg
 fill(0);
    beginShape();
    vertex(210, 518);
    vertex(225, 600);
    vertex(210, 665);
    vertex(225, 668);
    vertex(240, 600);
    vertex(237, 518);
    endShape();
    
//leftleg
    fill(0);
    beginShape();
    vertex(280, 518);
    vertex(300, 590);
    vertex(290, 655);
    vertex(303, 655);
    vertex(315, 590);
    vertex(306, 518);
    endShape();
    
//leftfoot
    beginShape();
    fill(80);
    quad(210, 663, 223, 663, 240, 680, 210, 680);
    endShape();
//rightfoot
    beginShape();
    fill(80);
    quad(290, 655, 303, 655, 320, 672, 290, 672);
}
function monster() {
fill(162, 92, 31);
    rect(mouseX-32, mouseY+15, 20.5, 60); //798, 615
    ellipse(mouseX-22, mouseY+73, 20, 20); //808, 673
    //backfrontlegs
    ellipse(mouseX+18, mouseY+74, 21, 21);
    rect(mouseX+8, mouseY+42, 20, 35); 
    noStroke();
    ellipse(mouseX+18, mouseY+74, 20, 20);
    rect(mouseX-32, mouseY+15, 20, 60);
    stroke(1);
//outline
    rect(mouseX-8, mouseY+45, 21, 35);
    ellipse(mouseX+3, mouseY+76, 21, 21);

        fill(162, 92, 31);
    ellipse(mouseX, mouseY, 123, 103);
    ellipse(mouseX-40, mouseY+73, 22, 22)
    rect(mouseX-52, mouseY+15, 23, 60);
//realmonster
    noStroke();
        fill(185, 107, 38);
    ellipse(mouseX, mouseY, 120, 100); //830, 600
    fill(100, 6, 6);
    ellipse(mouseX+15, mouseY, 105, 80);
//monsterbod
    fill(185, 107, 38);
    rect(mouseX-50, mouseY+25, 20, 50);
    ellipse(mouseX-40, mouseY+73, 20, 20);
    rect(mouseX-7, mouseY+45, 20, 35);
    ellipse(mouseX+3, mouseY+76, 20, 20);
//monsterhead
    fill(162, 92, 31);
    stroke(1);
    ellipse(mouseX+30, mouseY, 100, 85);
    noStroke();
//monsterface
    noStroke();
    fill(240, 154, 154);
    ellipse(mouseX, mouseY+5, 19, 19);
    ellipse(mouseX+75, mouseY+3, 16, 16);
    stroke(1);
    fill(150, 0, 0);
    ellipse(mouseX, mouseY+5, 15, 15);
    ellipse(mouseX+75, mouseY+3, 12, 12);
    noStroke();
    fill(255);
    ellipse(mouseX-3, mouseY+3, 3, 5);
    ellipse(mouseX+73, mouseY, 2, 4);
    
//monstermouth
    stroke(1);
    triangle(mouseX+30, mouseY+17, mouseX+40, mouseY+15, mouseX+35, mouseY+27);
    triangle(mouseX+40, mouseY+15, mouseX+49, mouseY+16, mouseX+45, mouseY+27);
    triangle(mouseX+21, mouseY+21, mouseX+30, mouseY+17, mouseX+26, mouseY+27);
    triangle(mouseX+49, mouseY+16, mouseX+56, mouseY+18, mouseX+53, mouseY+26);
//bottomteeth
    triangle(mouseX+26, mouseY+27, mouseX+30, mouseY+17, mouseX+35, mouseY+27);
    triangle(mouseX+35, mouseY+27, mouseX+40, mouseY+15, mouseX+45, mouseY+27);
    triangle(mouseX+45, mouseY+27, mouseX+49, mouseY+16, mouseX+53, mouseY+26);
}

function draw() {
    background(230);
    man();
    monster();
}
