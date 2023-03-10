const canvasSketch = require("canvas-sketch");
const math = require('canvas-sketch-util/math');
const random = require('canvas-sketch-util/random');

const settings = {
  dimensions: [1080, 1080],
};

const degToRad = (degrees) => {
  return (degrees / 180) * Math.PI;
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);

    context.fillStyle = "black";

    const cx = width * 0.5;
    const cy = height * 0.5;
    const w = width * 0.01;
    const h = height * 0.1;

    const num = random.range(12, 120);
    const radius = width * 0.3;

    for (i = 0; i < num; i++) {
      const slice = degToRad(360) / num;
      const angle = slice * i;

      let x = cx + radius * Math.sin(angle);
      let y = cy + radius * Math.cos(angle);

      context.save();
      context.translate(x, y);
      context.rotate(-angle);
      context.scale(random.range(.1, 2), random.range(3, -3));

      context.beginPath();
      context.rect(-w * 0.5, random.range(0, -h * 0.5), w, h);
      context.fill();
      context.restore();

      context.save();
      context.translate(cx, cy);
      context.rotate(-angle);

      context.lineWidth = random.range(5, 20);
      
      context.beginPath();
      context.arc(0, 0, radius *random.range(0.7, 2.5), slice * random.range(1, -8), slice * random.range(0, 5));
      context.stroke();

      context.restore();
    }
  };
};

canvasSketch(sketch, settings);
