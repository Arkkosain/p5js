let canvasW = 400;
let canvasH = 400;
let w = 30;
let h = 30;
let sizeX;
let sizeY;
let grid;

function setup() {
  createCanvas(canvasW, canvasH);

  sizeX = canvasW/w;
  sizeY = canvasH/h;

  // initialize
  grid = new Array(w);
  for (let i=0; i<w; i++) {
    grid[i] = new Array(h);
    for (let j=0; j<h; j++) {
      grid[i][j] = [0,0,0];
    }
  }
}

function draw() {
  background(20);
  
  // color at cursor
  let i = int(min(max(0,mouseX/sizeX),w-1));
  let j = int(min(max(0,mouseY/sizeY),h-1));
  grid[i][j] = [random(120), random(100,255), random(120)];

  // 
  for (let i=w-1; i>=0; i--) {
    for (let j=h-1; j>=0; j--) {
      if (i==0 || j==0) {
        grid[i][j] = [0, 0, 0];
      } else {
        grid[i][j] = grid[i-1][j-1];
      }
    }
  }

  // draw
  for (let i=0; i<w; i++) {
    for (let j=0; j<h; j++) {
      fill(grid[i][j]);
      let s = ((grid[i][j][0] + grid[i][j][1] + grid[i][j][2]) / 40) + 4;
      circle(i*sizeX+sizeX/2, j*sizeY+sizeY/2, s);
    }
  }
}
