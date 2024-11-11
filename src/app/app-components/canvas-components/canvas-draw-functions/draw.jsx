import { drawTimeline } from "./drawTimeline";
import { drawTimelineEndLines } from "./drawTimelineEndLines";
import { drawDateBox } from "./drawDateBox";
import { drawPoint } from "./drawPoint";
import { drawPeriod } from "./drawPeriod";
import { drawTickMarks } from "./drawTickMarks";

export const draw = (context, offset, scale, timelineWidth, points, periods, hoveredPoint, startDate, endDate, calculateXPosition, preferences) => {
  context.clearRect(0, 0, context.canvas.width, context.canvas.height);
  context.save();
  context.translate(offset.x, offset.y);

  const scaledTimelineWidth = timelineWidth * scale;

  drawTickMarks(context, startDate, endDate, calculateXPosition, scale, preferences.tickmarks);

  drawTimeline(context, scaledTimelineWidth); 
  drawTimelineEndLines(context, -6, 16); 
  drawTimelineEndLines(context, timelineWidth * scale + 6, -6); 
  
  const pointsByDate = {};
  points.forEach((point) => {
    const xPosition = calculateXPosition(point.date) * scale;
    if (!pointsByDate[xPosition]) {
      pointsByDate[xPosition] = [];
    }
    pointsByDate[xPosition].push(point);
  });

  // Rysowanie punktów i linii między nimi, jeśli są na tej samej dacie
  Object.keys(pointsByDate).forEach((xPosition) => {
    pointsByDate[xPosition].forEach((point, layer) => {
      const isHovered = hoveredPoint === point;
      drawPoint(context, point, isHovered, parseFloat(xPosition), layer);
    });
  });

  periods.forEach((period) => {
    drawPeriod(context, period, (date) => calculateXPosition(date) * scale, period.stackLevel);
  });

  context.restore();
  context.save();
  context.translate(offset.x, offset.y);

  const startDateXPosition = calculateXPosition(startDate) * scale;
  const endDateXPosition = calculateXPosition(endDate) * scale;

// Wywołanie drawDateBox z preferencjami
drawDateBox(context, startDate, startDateXPosition, scaledTimelineWidth, offset, false, preferences.datebox);
drawDateBox(context, endDate, endDateXPosition - 60, scaledTimelineWidth, offset, true, preferences.datebox);


  context.restore(); 
};
