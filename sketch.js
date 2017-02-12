function setup() {
createCanvas(1000, 700);
}

function draw() {
 stroke(1);
   background(200);
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
    
// LHand
    fill(13, 44, 105);
    ellipse(449, 443, 35, 20); //palm
    fill(88, 13, 13);
    rect(452, 430, 8, 25);//leash
    fill(13, 44, 105);
    ellipse(458, 443, 18, 5); //fingers
    ellipse(458, 452, 15, 4);
    ellipse(458, 448, 18, 5);
    ellipse(458, 438, 18, 5);
    ellipse(450, 438, 5, 15);
    
//LeftArm
    fill(0)
    beginShape();
    vertex(260, 350);
    vertex(360, 420);
    vertex(445, 435);
    vertex(443, 452);
    vertex(353, 443);
    vertex(260, 380);
    endShape(0);   
    

//rightleg
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

//monster
    //backlegs
    fill(162, 92, 31);
    rect(798, 615, 20.5, 60);
    ellipse(808, 673, 20, 20);
    //backfrontlegs
    ellipse(848, 674, 21, 21);
    rect(838, 642, 20, 35);
    noStroke();
    ellipse(848, 674, 20, 20);
    rect(798, 615, 20, 60);
    stroke(1);
//outline
    rect(822, 645, 21, 35);
    ellipse(833, 676, 21, 21);

    fill(162, 92, 31);
    ellipse(830, 600, 123, 103);
    ellipse(790, 673, 22, 22)
    rect(778, 615, 23, 60);
//realmonster
    noStroke();
    fill(185, 107, 38);
    ellipse(830, 600, 120, 100);
//leash
    fill(74, 9, 9);
    stroke(1);    
    quad(460, 430, 820, 575, 817, 578, 457, 433);
    fill(100, 6, 6);
    ellipse(845, 600, 105, 80);
//monsterhead
    fill(162, 92, 31);
    stroke(1);
    ellipse(850, 600, 100, 85);
    noStroke();
//monsterbod
    fill(185, 107, 38);
    rect(780, 625, 20, 50);
    ellipse(790, 673, 20, 20);
    rect(823, 645, 20, 35);
    ellipse(833, 676, 20, 20);
    
//monsterface
    noStroke();
    fill(240, 154, 154);
    ellipse(830, 605, 19, 19);
    ellipse(897, 603, 16, 16);
    stroke(1);
    fill(150, 0, 0);
    ellipse(830, 605, 15, 15);
    ellipse(897, 603, 12, 12);
    noStroke();
    fill(255);
    ellipse(827, 603, 3, 5);
    ellipse(895, 600, 2, 4);
    
//monstermouth
    stroke(1);
    triangle(860, 617, 870, 615, 865, 627);
    triangle(870, 615, 879, 616, 875, 627);
    triangle(851, 621, 860, 617, 856, 627);
    triangle(879, 616, 886, 618, 883, 626);
//bottomteeth
    triangle(856, 627, 860, 617, 865, 627);
    triangle(865, 627, 870, 615, 875, 627);
    triangle(875, 627, 879, 616, 883, 626);
}
