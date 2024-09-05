export const drawTimelineEndLines = (context, xPosition, finishHorizontal) => {
    context.strokeStyle = "#555555";
    context.lineWidth = 2;
  
    context.beginPath();
    context.moveTo(xPosition, -5);
    context.lineTo(xPosition, 5);
    context.stroke();
  
    context.beginPath();
    context.moveTo(xPosition, 0); 
    context.lineTo(xPosition + finishHorizontal, 0); 
    context.stroke();
  };
  