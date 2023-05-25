const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = 5;

let isDrawing = false;

const handleDrawing = (flag) => {
  isDrawing = flag;
};

canvas.addEventListener("mousedown", () => handleDrawing(true));
canvas.addEventListener("mouseup", () => handleDrawing(false));
canvas.addEventListener("mouseleave", () => handleDrawing(false));

canvas.addEventListener("mousemove", (event) => {
  if (isDrawing) {
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
  } else ctx.moveTo(event.offsetX, event.offsetY);
});
