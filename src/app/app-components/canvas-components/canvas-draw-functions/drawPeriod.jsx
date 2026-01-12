export const drawPeriod = (context, period, calculateXPosition, stackLevel) => {
  const startX = calculateXPosition(period.startDate);
  const endX = calculateXPosition(period.endDate);

  const rectHeight = 12; // changes how tall are periods - change rectHeight also in canvasHooks!
  const paddingBetweenLevels = 5;

  // Let the first number (22 rn) be rectheight + 10; it changes periods distance from the timeline
  // not making it rectheit + 10 because it may wary
  let rectY = -(22 + stackLevel * (rectHeight + paddingBetweenLevels));

  const radius = 5;

  context.beginPath();
  context.moveTo(startX + radius, rectY);
  context.lineTo(endX - radius, rectY);
  context.quadraticCurveTo(endX, rectY, endX, rectY + radius);
  context.lineTo(endX, rectY + rectHeight - radius);
  context.quadraticCurveTo(
    endX,
    rectY + rectHeight,
    endX - radius,
    rectY + rectHeight
  );
  context.lineTo(startX + radius, rectY + rectHeight);
  context.quadraticCurveTo(
    startX,
    rectY + rectHeight,
    startX,
    rectY + rectHeight - radius
  );
  context.lineTo(startX, rectY + radius);
  context.quadraticCurveTo(startX, rectY, startX + radius, rectY);
  context.closePath();

  context.fillStyle = period.color;
  context.fill();
};

// Tekst
/*
  context.fillStyle = "white"; // Kolor tekstu
  context.font = "12px Arial";
  context.fillText(period.label, startX + 5, rectY + rectHeight / 1.5); // Tekst wydarzenia
  */
