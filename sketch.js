// changing the way you scroll using the pmouseX to get the drection of the drag


let bigSeal;
let greg;
let mj;
let smallSeal;
let lishu;
let thousandChars;
let thousandPinyin;
let thousandEnglish;
let words = [];
let prln = 0;
let xcor = 20;
let ycor;
//let hsk1chars = ['你','好','吗','哥','龙'];

function preload() {
  bigSeal = loadFont('Jinwen big seal character Font-Traditional Chinese.ttf');
  lishu = loadFont('Cai Yunhan Li shu.TTF');
  //smallSeal = loadFont('Mini zhuan shu ti Font-Traditional Chinese.ttf');
  thousandChars = loadStrings('qianziwen8b8.txt');
  thousandPinyin = loadStrings('qianziwenpinyin1b1.txt');
  //thousandEnglish = loadStrings('qianziwenEnglish8b8.txt');
  onebyoneChar = loadStrings('qianziwen1b1.txt');
}



function setup() {
  createCanvas(windowWidth, windowHeight);

  textAlign(CENTER);

  for (let i = 0; i < 1000; i++) {
  
    prln += 0.15;
    xcor += 60;
    ycor = constrain(noise(prln)*height,200,height-100); // so it does not go off the scren
    words[i] = new TextChunk(i, xcor, ycor);
    //print(words[i]);
  }

  textSize(70);

}

function draw() {
  background(204, 204, 34);

  textSize(80);
  rectMode(CENTER);
  for (let i = 0; i < 1000; i++) {
    words[i].display();
  }

}

function mouseDragged() {

  if (mouseX < pmouseX) {


    for (let i = 0; i < 1000; i++) {
      words[i].moveLeft();
    }


  } else {

    for (let i = 0; i < 1000; i++) {
      words[i].moveRight();
    }


  }



}