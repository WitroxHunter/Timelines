export const drawPeriod = (context, period, calculateXPosition, stackLevel) => {
  const startX = calculateXPosition(period.startDate);
  const endX = calculateXPosition(period.endDate);
  const rectHeight = 25; // Height of the rectangle
  const paddingBetweenLevels = 7; // Space between stacked periods

  // Adjust Y position based on stack level
  let rectY = 0;
  if(stackLevel > 0) {
    rectY = -(3 + stackLevel * (rectHeight + paddingBetweenLevels)); 
  } else {
    rectY = -(35 + stackLevel * (rectHeight + paddingBetweenLevels)); 
  }
  console.log(`Rysowanie periodu na poziomie: ${stackLevel}, rectY: ${rectY}`);

  const radius = 5; // Corner rounding radius

  context.beginPath();
  context.moveTo(startX + radius, rectY);
  context.lineTo(endX - radius, rectY);
  context.quadraticCurveTo(endX, rectY, endX, rectY + radius);
  context.lineTo(endX, rectY + rectHeight - radius);
  context.quadraticCurveTo(endX, rectY + rectHeight, endX - radius, rectY + rectHeight);
  context.lineTo(startX + radius, rectY + rectHeight);
  context.quadraticCurveTo(startX, rectY + rectHeight, startX, rectY + rectHeight - radius);
  context.lineTo(startX, rectY + radius);
  context.quadraticCurveTo(startX, rectY, startX + radius, rectY);
  context.closePath();

  context.fillStyle = "green";
  context.fill();
};





  // Tekst
  /*
  context.fillStyle = "white"; // Kolor tekstu
  context.font = "12px Arial";
  context.fillText(period.label, startX + 5, rectY + rectHeight / 1.5); // Tekst wydarzenia
  */