import { drawTimeline } from "./drawTimeline";
import { drawTimelineEndLines } from "./drawTimelineEndLines";
import { drawDateBox } from "./drawDateBox";
import { drawPoint } from "./drawPoint";
import { drawPeriod } from "./drawPeriod";
import { drawTickMarks } from "./drawTickMarks";

export const draw = (context, offset, scale, timelineWidth, points, periods, hoveredPoint, startDate, endDate, calculateXPosition) => {
  context.clearRect(0, 0, context.canvas.width, context.canvas.height);
  context.save();
  context.translate(offset.x, offset.y);

  const scaledTimelineWidth = timelineWidth * scale;

  // Najpierw rysujemy kreski i daty pod osią czasu
  drawTickMarks(context, startDate, endDate, calculateXPosition, scale);

  // Potem rysujemy oś czasu i inne elementy
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

  const startDateXPosition = calculateXPosition(startDate) * scale;
  const endDateXPosition = calculateXPosition(endDate) * scale;

  drawDateBox(context, startDate, startDateXPosition, scaledTimelineWidth, offset);
  drawDateBox(context, endDate, endDateXPosition - 60, scaledTimelineWidth, offset, true);

  context.restore(); 
};
