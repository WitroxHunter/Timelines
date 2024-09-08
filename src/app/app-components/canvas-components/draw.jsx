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
    console.log("uzyto draw")
    drawTimelineEndLines(context, -6, 6);
    drawTimelineEndLines(context, timelineWidth + 6, -6);
  
    drawTimeline(context, timelineWidth);
  
    points.forEach((point) => {
      const isHovered = hoveredPoint === point;
      drawPoint(context, point, isHovered, calculateXPosition(point.date));
    });

    const calculateStackLevel = (currentPeriod, periods) => {
      let level = 0;
    
      periods.forEach((period) => {
        // Zainicjuj stackLevel, jeśli go nie ma
        if (typeof period.stackLevel === "undefined") {
          period.stackLevel = 0;
        }
    
        if (period !== currentPeriod) {
          const overlap = (
            currentPeriod.startDate <= period.endDate &&
            currentPeriod.endDate >= period.startDate
          );
    
          // Only increase level if periods overlap
          if (overlap) {
            level = Math.max(level, period.stackLevel + 1);
          }
        }
      });
    
      return level;
    };
    
  
    periods.forEach((period) => {
      period.stackLevel = calculateStackLevel(period, periods);
    });

    periods.forEach((period) => {
      drawPeriod(context, period, calculateXPosition, period.stackLevel);
    });
    
  
    const dateBoxMargin = 65;
    drawDateBox(context, startDate, 0 - dateBoxMargin, timelineWidth);
    drawDateBox(context, endDate, timelineWidth + dateBoxMargin - 60, timelineWidth, true);
  
    context.restore();
  };