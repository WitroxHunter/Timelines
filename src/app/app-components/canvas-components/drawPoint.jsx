export const drawPoint = (context, point, isHovered = false, xPosition) => {
    const yPosition = 0;
    context.fillStyle = isHovered ? "blue" : "red";
    context.beginPath();
    context.arc(xPosition, yPosition, 5, 0, 2 * Math.PI);
    context.fill();
  };
  