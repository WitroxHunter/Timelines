export const drawTimelineEndLines = (context, xPosition, finishHorizontal) => {
    context.strokeStyle = "#555555";
    
    context.lineWidth = 3;
    context.beginPath();
    context.moveTo(xPosition, -8);
    context.lineTo(xPosition, 8);
    context.stroke();

    context.lineWidth = 10;
    context.beginPath();
    context.moveTo(xPosition, 0); 
    context.lineTo(xPosition + finishHorizontal, 0); 
    context.stroke();
  };
  