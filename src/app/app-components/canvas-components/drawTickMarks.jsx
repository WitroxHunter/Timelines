export const drawTickMarks = (context, startDate, endDate, calculateXPosition, scale) => {
    const tickHeight = 10; 
  
    let currentDate = new Date(startDate);
    currentDate.setDate(1);
  
    while (currentDate <= endDate) {
      const xPosition = calculateXPosition(currentDate) * scale;

      context.lineWidth = 5;
      context.beginPath();
      context.moveTo(xPosition, 0);
      context.lineTo(xPosition, tickHeight);
      context.strokeStyle = "#555555";
      context.stroke();

      // Drawing months
      if(scale >= 1.5 ) {
      context.font = "12px 'Source Sans 3'";
      context.fillStyle = "#FFFFFF";
      context.textAlign = "center";
      context.fillText(
        currentDate.toLocaleDateString('pl-PL', { month: 'short', year: 'numeric' }),
        xPosition,
        tickHeight + 12 + 2 // Umiejscawiamy tekst poniżej kreski
      );
      }
  
      currentDate.setMonth(currentDate.getMonth() + 1);
    }
  };
  