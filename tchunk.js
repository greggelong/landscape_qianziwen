class TextChunk {
  constructor(ind,x,y) {
    this.ind = ind;
     
    this.x =  x;
    this.y = y;
    
    
     

  }
  moveLeft() { //remember we neeed to move 1000 at a time when triggered by drag
    this.x -= 20;
  }
  moveRight() {
    this.x += 20;
  }

  display() {
    if (mouseX >= this.x-40 && mouseX <=this.x+40 && mouseY >= this.y-40 && mouseY <=this.y+40) {
       
       fill(34, 204, 204);
       textFont('ARIAl');
       noStroke();
       text(thousandPinyin[this.ind], this.x, 100);
       textFont(lishu);
    } else {
     textFont(bigSeal); //this variable is defined in sketch but globalally it is still avalable
      
    }
    fill(0);
    rectMode(CENTER);
    text(onebyoneChar[this.ind], this.x, this.y);
    fill(34, 204, 119,220); //ocher   stroke(34, 204, 119,220); // green
    rectMode(CORNER);
    strokeWeight(10);
    stroke(204, 119, 34,220); // green   fill(204, 119, 34,220); //ocher
    rect(this.x,this.y+10,80,height);
    


  }

}