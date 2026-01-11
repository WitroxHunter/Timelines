export const drawPoint = (
  context,
  point,
  isHovered = false,
  xPosition,
  layer = 0
) => {
  const yPosition = layer * 16 + 16;

  // gray connection line
  if (layer > -1) {
    context.strokeStyle = "#555555";
    context.lineWidth = 3;
    context.beginPath();
    context.moveTo(xPosition, yPosition - 10.8);
    context.lineTo(xPosition, yPosition);
    context.stroke();
  }

  // point
  context.fillStyle = isHovered ? "blue" : point.color;
  context.beginPath();
  context.arc(xPosition, yPosition, 6, 0, 2 * Math.PI);
  context.fill();
};
