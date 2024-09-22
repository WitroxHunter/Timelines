export const drawTimeline = (context, timelineWidth) => {
    context.strokeStyle = "#555555";
    context.lineWidth = 10;
    const yPosition = 0;
    context.beginPath();
    context.moveTo(0, yPosition);
    context.lineTo(timelineWidth, yPosition);
    context.stroke();
  };
  