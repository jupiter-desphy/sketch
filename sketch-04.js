const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1080, 1080 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    const cols = 4;
    const rows = 3;
    const numCells = cols * rows;

    const gridW = width * 0.8;
    const gridH = height * 0.8;
    const cellW = gridW / cols;
    const cellH = gridH / rows;
    const margX = (width - gridW) * .5;
    const margY = (height - gridH) * .5;

    for (i = 0; i < numCells; i++) {
      const col = i % cols;
      const row = Math.floor(i / cols);
    }

  };
};

canvasSketch(sketch, settings);
