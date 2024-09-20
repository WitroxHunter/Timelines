import { drawTimeline } from "./drawTimeline";
import { drawTimelineEndLines } from "./drawTimelineEndLines";
import { drawDateBox } from "./drawDateBox";
import { drawPoint } from "./drawPoint";
import { drawPeriod } from "./drawPeriod";

export const draw = (context, offset, scale, timelineWidth, points, periods, hoveredPoint, startDate, endDate, calculateXPosition) => {
  context.clearRect(0, 0, context.canvas.width, context.canvas.height);
  context.save();
  context.translate(offset.x, offset.y);

  const scaledTimelineWidth = timelineWidth * scale;

  drawTimeline(context, scaledTimelineWidth); 
  drawTimelineEndLines(context, -6, 16); 
  drawTimelineEndLines(context, timelineWidth * scale + 6, -6); 

  points.forEach((point) => {
    const isHovered = hoveredPoint === point;
    const xPosition = calculateXPosition(point.date) * scale;
    drawPoint(context, point, isHovered, xPosition);
  });

  periods.forEach((period) => {
    drawPeriod(context, period, (date) => calculateXPosition(date) * scale, period.stackLevel);
  });

  context.restore();
  context.save();
  context.translate(offset.x, offset.y);

  const canvasWidth = context.canvas.width;
  const dateBoxMargin = 10;
  const dateBoxWidth = 100; 

  const startDateXPosition = calculateXPosition(startDate) * scale;
  const endDateXPosition = calculateXPosition(endDate) * scale;

  let startDateXClamped = startDateXPosition;
  if (startDateXPosition < dateBoxMargin) {
    startDateXClamped = dateBoxMargin; 
  }

  let endDateXClamped = endDateXPosition;
  if (endDateXPosition + dateBoxWidth > canvasWidth - dateBoxMargin) { 
    endDateXClamped = canvasWidth - dateBoxWidth - dateBoxMargin;
  }

  drawDateBox(context, startDate, startDateXClamped - 60, scaledTimelineWidth);
  drawDateBox(context, endDate, endDateXClamped - 60, scaledTimelineWidth, true);


  context.restore(); 
};

