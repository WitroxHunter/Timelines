export const drawPoint = (context, point, isHovered = false, xPosition, layer = 0) => {
  const yPosition = layer * 15; // Ustawiamy odstęp między punktami
  
  // Rysowanie szarej linii, jeśli punkt jest częścią stosu (layer > 0)
  if (layer > 0) {
    context.strokeStyle = "#555555";
    context.lineWidth = 3;
    context.beginPath();
    context.moveTo(xPosition, yPosition - 10.1); // Połączenie z poprzednim punktem
    context.lineTo(xPosition, yPosition);
    context.stroke();
  }

  // Rysowanie samego punktu
  context.fillStyle = isHovered ? "blue" : point.color;
  context.beginPath();
  context.arc(xPosition, yPosition, 5, 0, 2 * Math.PI);
  context.fill();
};
