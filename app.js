const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const inputRange = document.getElementById('canvas-width');

canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = inputRange.value;

let isDrawing = false;

const handleDraw = () => {
  isDrawing = true;
};
const handleCancelDraw = () => {
  isDrawing = false;
}

canvas.addEventListener("mousedown", handleDraw);
canvas.addEventListener("mouseup", handleCancelDraw);
canvas.addEventListener("mouseleave", handleCancelDraw);

canvas.addEventListener("mousemove", (event) => {
  if (isDrawing) {
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
  } else ctx.moveTo(event.offsetX, event.offsetY);
});
