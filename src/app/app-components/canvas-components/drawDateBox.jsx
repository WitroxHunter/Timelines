export const drawDateBox = (context, date, xPosition, timelineWidth, alignRight = false) => {
    const yPosition = 0;
    const textMargin = 7;
    const borderRadius = 5;
    const boxMargin = 10;
  
    const formattedDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
  
    context.font = "12px 'Source Sans 3'";
    const textWidth = context.measureText(formattedDate).width;
  
    const boxWidth = textWidth + 2 * textMargin;
    const boxHeight = 20;
  
    if (alignRight) {
      xPosition = timelineWidth + boxMargin;
    } else {
      xPosition = 0 - boxWidth - boxMargin;
    }
  
    context.fillStyle = "white";
    context.beginPath();
    context.moveTo(xPosition + borderRadius, yPosition - 10);
    context.lineTo(xPosition + boxWidth - borderRadius, yPosition - 10);
    context.arc(xPosition + boxWidth - borderRadius, yPosition - 10 + borderRadius, borderRadius, -Math.PI / 2, 0);
    context.lineTo(xPosition + boxWidth, yPosition - 10 + boxHeight - borderRadius);
    context.arc(xPosition + boxWidth - borderRadius, yPosition - 10 + boxHeight - borderRadius, borderRadius, 0, Math.PI / 2);
    context.lineTo(xPosition + borderRadius, yPosition - 10 + boxHeight);
    context.arc(xPosition + borderRadius, yPosition - 10 + boxHeight - borderRadius, borderRadius, Math.PI / 2, Math.PI);
    context.lineTo(xPosition, yPosition - 10 + borderRadius);
    context.arc(xPosition + borderRadius, yPosition - 10 + borderRadius, borderRadius, Math.PI, 1.5 * Math.PI);
    context.closePath();
    context.fill();
  
    context.fillStyle = "black";
    const textX = xPosition + textMargin;
    const textY = yPosition + 4;
  
    context.fillText(formattedDate, textX, textY);
  };
  