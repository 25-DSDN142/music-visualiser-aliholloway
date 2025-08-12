
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  colorMode(HSB, 100);
  background(255);
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER);
  textSize(24);
  strokeWeight(9);
  stroke(drum, 80, 80);


  let drumMap = map(drum, 0, 100, 30, 90);
  let lengthOfLine = 300;
  let lineStart = 100;
  let lineEnd = lineStart + lengthOfLine;


  for(let i =1; i <= 5; i++){
     let lineStep = i*30;
     line(lineStart, lineStep, lineEnd, lineStep);

  }


}