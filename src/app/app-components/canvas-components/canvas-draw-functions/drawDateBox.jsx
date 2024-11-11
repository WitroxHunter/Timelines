export const drawDateBox = (
  context,
  date,
  xPosition,
  timelineWidth,
  offset,
  alignRight = false,
  dateboxPreference = "dd-mm-yyyy"
) => {
  const yPosition = 0;
  const textMargin = 5;
  const borderRadius = 5;
  const boxMargin = 15;

  // Funkcja dopełniająca zerem
  const padWithZero = (number) => number.toString().padStart(2, "0");

  // Wybór formatu daty na podstawie preferencji
  let formattedDate;
  switch (dateboxPreference) {
    case "year":
      formattedDate = `${date.getFullYear()}`;
      break;
    case "mm-yyyy":
      formattedDate = `${padWithZero(date.getMonth() + 1)}.${date.getFullYear()}`;
      break;
    case "mm-dd-yyyy":
      formattedDate = `${padWithZero(date.getMonth() + 1)}.${padWithZero(date.getDate())}.${date.getFullYear()}`;
      break;
    case "dd-mm-yyyy":
    default:
      formattedDate = `${padWithZero(date.getDate())}.${padWithZero(date.getMonth() + 1)}.${date.getFullYear()}`;
      break;
  }

  context.font = "bold 16px 'Source Sans 3'";
  const textWidth = context.measureText(formattedDate).width;

  const boxWidth = textWidth + 2 * textMargin;
  const boxHeight = 24;

  const canvasWidth = context.canvas.width;

  if (alignRight) {
    xPosition = timelineWidth + boxMargin;
  } else {
    xPosition -= boxWidth + boxMargin;
  }

  const adjustedXPosition = xPosition + offset.x;

  if (adjustedXPosition + boxWidth > canvasWidth - 15) {
    xPosition = canvasWidth - boxWidth - boxMargin - offset.x;
  }

  if (adjustedXPosition < boxMargin) {
    xPosition = boxMargin - offset.x;
  }

  context.fillStyle = "white";
  context.beginPath();
  context.moveTo(xPosition + borderRadius, yPosition - 10);
  context.lineTo(xPosition + boxWidth - borderRadius, yPosition - 10);
  context.arc(
    xPosition + boxWidth - borderRadius,
    yPosition - 10 + borderRadius,
    borderRadius,
    -Math.PI / 2,
    0
  );
  context.lineTo(
    xPosition + boxWidth,
    yPosition - 10 + boxHeight - borderRadius
  );
  context.arc(
    xPosition + boxWidth - borderRadius,
    yPosition - 10 + boxHeight - borderRadius,
    borderRadius,
    0,
    Math.PI / 2
  );
  context.lineTo(xPosition + borderRadius, yPosition - 10 + boxHeight);
  context.arc(
    xPosition + borderRadius,
    yPosition - 10 + boxHeight - borderRadius,
    borderRadius,
    Math.PI / 2,
    Math.PI
  );
  context.lineTo(xPosition, yPosition - 10 + borderRadius);
  context.arc(
    xPosition + borderRadius,
    yPosition - 10 + borderRadius,
    borderRadius,
    Math.PI,
    1.5 * Math.PI
  );
  context.closePath();
  context.fill();

  context.fillStyle = "black";
  const textX = xPosition + textMargin;
  const textY = yPosition + 6.5;

  context.fillText(formattedDate, textX, textY);
};
