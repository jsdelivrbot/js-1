var x = 30;
var y = 200;
var d = true;
var speedslider, rSlider, gSlider, bSlider, bgrSlider, bggSlider, bgbSlider;

function setup() {
  createCanvas(710, 400);
  textSize(15)
  noStroke();

  rSlider = createSlider(0, 255, 100);
  rSlider.position(20, 20);
  gSlider = createSlider(0, 255, 0);
  gSlider.position(20, 40);
  bSlider = createSlider(0, 255, 255);
  bSlider.position(20, 60);
  speedslider = createSlider(0, 255, 100);
  speedslider.position(20, 80);

  bgrSlider = createSlider(0, 255, 100);
  bgrSlider.position(300, 40);
  bggSlider = createSlider(0, 255, 100);
  bggSlider.position(300, 60);
  bgbSlider = createSlider(0, 255, 100);
  bgbSlider.position(300, 80);
}


function mouseWheel(event) {
  if (y < height - 30){
    if (y > 30) {
        y += event.delta/10;
    }
  }
}

function draw() {
  speed = speedslider.value()/30;
  background(bgrSlider.value(),bggSlider.value(),bgbSlider.value());
  if (y > height - 30){
    y = height - 31
  }
  if (y < 30){
    y = 31
  }
  if (x > width - 30) {
    d = false;
  }
  if (x < 30) {
    d = true;
  }
  if (d == true) {
    x = x + speed
  }
  if (d == false){
    x = x - speed
  }
  if (bgrSlider.value() - 5 < rSlider.value()){
    if (bgrSlider.value() + 5 > rSlider.value()){
      if (bggSlider.value() - 5 < gSlider.value()){
        if (bggSlider.value() + 5 > gSlider.value()){
          if (bgbSlider.value() - 5 < bSlider.value()){
            if (bgbSlider.value() + 5 > bSlider.value()){
              if (rSlider.value() > 200){
                fill(rSlider.value() - 50,gSlider.value() - 50,bSlider.value() - 50)
              }
              if (gSlider.value() > 200){
                fill(rSlider.value() - 50,gSlider.value() - 50,bSlider.value() - 50)
              }
              if (bSlider.value() > 200){
                fill(rSlider.value() - 50,gSlider.value() - 50,bSlider.value() - 50)
              }
              else{
                fill(rSlider.value() + 50,gSlider.value() + 50,bSlider.value() + 50)
              }
              ellipse(x, y, 62, 62);
            }
          }
        }
      }
    }
  }
  fill(rSlider.value(),gSlider.value(),bSlider.value())
  ellipse(x, y, 60, 60);
  fill(0,0,0)
  if (bgrSlider.value() < 50){
    if (bggSlider.value() < 50){
      if (bgbSlider.value() < 50){
        fill(255,255,255)
      }
    }
  }
  text("Background", 320, 25)

  text("red (" + str(rSlider.value()) + ")", 165, 25);
  text("green (" + str(gSlider.value()) + ")", 165, 45);
  text("blue (" + str(bSlider.value()) + ")", 165, 65);
  text("speed (" + str(speedslider.value()) + ")", 165, 85);

  text("red (" + str(bgrSlider.value()) + ")", 445, 45);
  text("green (" + str(bggSlider.value()) + ")", 445, 65);
  text("blue (" + str(bgbSlider.value()) + ")", 445, 85);

  text("x (" + str(Math.round(x)) + ")", 550, 45);
  text("y (" + str(Math.round(y)) + ")", 550, 65);
}
