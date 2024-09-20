import { drawTimeline } from "./drawTimeline";
import { drawTimelineEndLines } from "./drawTimelineEndLines";
import { drawDateBox } from "./drawDateBox";
import { drawPoint } from "./drawPoint";
import { drawPeriod } from "./drawPeriod";

export const draw = (context, offset, scale, timelineWidth, points, periods, hoveredPoint, startDate, endDate, calculateXPosition) => {
  context.clearRect(0, 0, context.canvas.width, context.canvas.height);
  context.save();

  // Skalowanie tylko na osi X (wszerz)
  context.translate(offset.x, offset.y);

  // Zmieniamy skalowanie ręczne zamiast context.scale
  const scaledTimelineWidth = timelineWidth * scale;

  // Rysowanie timeline i końcowych linii z uwzględnieniem skali
  drawTimelineEndLines(context, -6 * scale, 6 * scale);
  drawTimelineEndLines(context, (timelineWidth + 6) * scale, -6 * scale);
  drawTimeline(context, scaledTimelineWidth);  // Skaluje szerokość timeline

  // Rysowanie punktów
  points.forEach((point) => {
    const isHovered = hoveredPoint === point;
    const xPosition = calculateXPosition(point.date) * scale;
    drawPoint(context, point, isHovered, xPosition);
  });

  // Rysowanie periodów (skalowanych ręcznie)
  periods.forEach((period) => {
    const periodXPosition = calculateXPosition(period.startDate) * scale;
    drawPeriod(context, period, (date) => calculateXPosition(date) * scale, period.stackLevel);
  });

  context.restore(); // Zatrzymanie tłumaczenia

  // Rysowanie dateBoxów (bez skalowania)
  context.save();
  context.translate(offset.x, offset.y);

  const canvasWidth = context.canvas.width;
  const dateBoxMargin = 10;

  const startDateXPosition = calculateXPosition(startDate) * scale;
  const endDateXPosition = calculateXPosition(endDate) * scale;

  // Sprawdzamy, czy startDate wychodzi poza ekran i obliczamy pozycję
  let startDateXClamped = startDateXPosition;
  if (startDateXPosition < dateBoxMargin) {
      startDateXClamped = dateBoxMargin; // Przyklejamy do lewej krawędzi
  }

  // Sprawdzamy, czy endDate wychodzi poza ekran i obliczamy pozycję
  let endDateXClamped = endDateXPosition;
  if (endDateXPosition + 100 > canvasWidth) { // 100 to szerokość dateBox
      endDateXClamped = canvasWidth - 100 - dateBoxMargin; // Przyklejamy do prawej krawędzi
  }

  // Rysowanie dateBox dla startDate
  drawDateBox(context, startDate, startDateXClamped - 60, scaledTimelineWidth);

  // Rysowanie dateBox dla endDate
  drawDateBox(context, endDate, endDateXClamped - 60, scaledTimelineWidth, true);

  context.restore(); // Zatrzymanie tłumaczeń i resetowanie contextu
};

