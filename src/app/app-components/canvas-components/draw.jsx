import { drawTimeline } from "./drawTimeline";
import { drawTimelineEndLines } from "./drawTimelineEndLines";
import { drawDateBox } from "./drawDateBox";
import { drawPoint } from "./drawPoint";
import { drawPeriod } from "./drawPeriod";

export const draw = (context, offset, scale, timelineWidth, points, periods, hoveredPoint, startDate, endDate, calculateXPosition) => {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    context.save();
    context.translate(offset.x, offset.y);
    context.scale(scale, scale);
    //console.log("uzyto draw")
    drawTimelineEndLines(context, -6, 6);
    drawTimelineEndLines(context, timelineWidth + 6, -6);
  
    drawTimeline(context, timelineWidth);
  
    points.forEach((point) => {
      const isHovered = hoveredPoint === point;
      drawPoint(context, point, isHovered, calculateXPosition(point.date));
    });

    points.forEach((point) => {
      const isHovered = hoveredPoint === point;
      drawPoint(context, point, isHovered, calculateXPosition(point.date));
    });

    periods.sort((a, b) => a.startDate - b.startDate);

    let layers = [];

    periods.forEach((currentPeriod) => {
      let assignedLayer = -1;

      for (let i = 0; i < layers.length; i++) {
        const layer = layers[i];
        const conflict = layer.some(period =>
          !(currentPeriod.endDate < period.startDate || currentPeriod.startDate > period.endDate)
        );

        if (!conflict) {
          assignedLayer = i;
          break;
        }
      }

      if (assignedLayer === -1) {
        assignedLayer = layers.length;
        layers.push([]);
      }

      layers[assignedLayer].push(currentPeriod);
      currentPeriod.stackLevel = assignedLayer;
    });

    periods.forEach((period) => {
      drawPeriod(context, period, calculateXPosition, period.stackLevel);
    });
    
  
    const dateBoxMargin = 65;
    drawDateBox(context, startDate, 0 - dateBoxMargin, timelineWidth);
    drawDateBox(context, endDate, timelineWidth + dateBoxMargin - 60, timelineWidth, true);
  
    context.restore();
  };