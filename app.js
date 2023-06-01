const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const inputRange = document.getElementById('canvas-width');
const inputColor = document.getElementById('canvas-color');

canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = inputRange.value;

let isDrawing = false;

const handleDraw = () => {
  isDrawing = true;
};
const handleCancelDraw = () => {
  isDrawing = false;
  ctx.beginPath();
};
const handleMove = event => {
  if (isDrawing) {
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
  } else ctx.moveTo(event.offsetX, event.offsetY);
};

canvas.addEventListener("mousedown", handleDraw);
canvas.addEventListener("mouseup", handleCancelDraw);
canvas.addEventListener("mouseleave", handleCancelDraw);
canvas.addEventListener("mousemove", handleMove);

const handleWidth = event => {
  ctx.lineWidth = event.target.value;
};
const handleColor = event => {
  ctx.strokeStyle = event.target.value;
  ctx.fillStyle = event.target.value;
};

inputRange.addEventListener('change', handleWidth);
inputColor.addEventListener('change', handleColor);