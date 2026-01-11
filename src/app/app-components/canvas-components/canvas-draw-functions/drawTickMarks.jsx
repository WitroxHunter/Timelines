export const drawTickMarks = (
  context,
  startDate,
  endDate,
  calculateXPosition,
  scale,
  interval
) => {
  const tickHeight = 10;
  const fontSize = 12;

  let currentDate = new Date(startDate);

  switch (interval) {
    case "month":
      currentDate.setDate(1);
      break;
    case "year":
      currentDate.setMonth(0);
      currentDate.setDate(1);
      break;
    case "week":
      const dayOfWeek = currentDate.getDay();
      currentDate.setDate(
        currentDate.getDate() - (dayOfWeek === 0 ? 6 : dayOfWeek - 1)
      );
      break;
    case "day":
      break;
    case "without tickmarks":
      return;
    default:
      return;
  }

  while (currentDate <= endDate) {
    const xPosition = calculateXPosition(currentDate) * scale;

    if (xPosition >= 0) {
      context.lineWidth = 5;
      context.beginPath();
      context.moveTo(xPosition, 0);
      context.lineTo(xPosition, tickHeight);
      context.strokeStyle = "#555555";
      context.stroke();

      if (scale >= 1.3) {
        context.font = `${fontSize}px 'Source Sans 3'`;
        context.fillStyle = "#FFFFFF";
        context.textAlign = "center";

        switch (interval) {
          case "month":
            context.fillText(
              currentDate.toLocaleDateString("pl-PL", {
                month: "short",
                year: "numeric",
              }),
              xPosition,
              tickHeight + fontSize + 2
            );
            break;
          case "week":
            context.fillText(
              currentDate.toLocaleDateString("pl-PL", {
                day: "numeric",
                month: "short",
              }),
              xPosition,
              tickHeight + fontSize + 2
            );
            break;
          case "year":
            context.fillText(
              currentDate.toLocaleDateString("pl-PL", { year: "numeric" }),
              xPosition,
              tickHeight + fontSize + 2
            );
            break;
          case "day":
            context.fillText(
              currentDate.toLocaleDateString("pl-PL", {
                day: "numeric",
                month: "short",
                year: "numeric",
              }),
              xPosition,
              tickHeight + fontSize + 2
            );
            break;
          default:
            break;
        }
      }
    }

    switch (interval) {
      case "month":
        currentDate.setMonth(currentDate.getMonth() + 1);
        break;
      case "week":
        currentDate.setDate(currentDate.getDate() + 7);
        break;
      case "year":
        currentDate.setFullYear(currentDate.getFullYear() + 1);
        break;
      case "day":
        currentDate.setDate(currentDate.getDate() + 1);
        break;
      default:
        break;
    }
  }
};

/*
  jednak uzywam tego wiec ten komentarz jest niepotrzebny

Tygodnie działające od poniedziałków
export const drawTickMarks = (context, startDate, endDate, calculateXPosition, scale, interval) => {
    const tickHeight = 10; 
    const fontSize = 12;  
  
    let currentDate = new Date(startDate);
  
    switch (interval) {
      case "month":
        currentDate.setDate(1); 
        break;
      case "week":
        const dayOfWeek = currentDate.getDay();
        currentDate.setDate(currentDate.getDate() - (dayOfWeek === 0 ? 6 : dayOfWeek - 1));  
        break;
      case "year":
        currentDate.setMonth(0);
        currentDate.setDate(1);  
        break;
      case "day":
        break;
      case "without tickmarks":
        return;
      default:
        //console.warn("Nieznany interwał:", interval);
        return;
    }
  
    while (currentDate <= endDate) {
      const xPosition = calculateXPosition(currentDate) * scale;
  
      context.lineWidth = 5;
      context.beginPath();
      context.moveTo(xPosition, 0); 
      context.lineTo(xPosition, tickHeight); 
      context.strokeStyle = "#555555";
      context.stroke();
  
      if (scale >= 1.3) {
        context.font = ${fontSize}px 'Source Sans 3';
        context.fillStyle = "#FFFFFF";
        context.textAlign = "center";
  
        switch (interval) {
          case "month":
            context.fillText(
              currentDate.toLocaleDateString('pl-PL', { month: 'short', year: 'numeric' }),
              xPosition,
              tickHeight + fontSize + 2
            );
            break;
          case "week":
            context.fillText(
              currentDate.toLocaleDateString('pl-PL', { day: 'numeric', month: 'short' }),
              xPosition,
              tickHeight + fontSize + 2
            );
            break;
          case "year":
            context.fillText(
              currentDate.toLocaleDateString('pl-PL', { year: 'numeric' }),
              xPosition,
              tickHeight + fontSize + 2
            );
            break;
          case "day":
            context.fillText(
              currentDate.toLocaleDateString('pl-PL', { day: 'numeric', month: 'short', year: 'numeric' }),
              xPosition,
              tickHeight + fontSize + 2
            );
            break;
          default:
            break;
        }
      }

      switch (interval) {
        case "month":
          currentDate.setMonth(currentDate.getMonth() + 1);
          break;
        case "week":
          currentDate.setDate(currentDate.getDate() + 7);
          break;
        case "year":
          currentDate.setFullYear(currentDate.getFullYear() + 1);
          break;
        case "day":
          currentDate.setDate(currentDate.getDate() + 1);
          break;
        default:
          break;
      }
    }
  }; */

/* 
tygodnie dzialajace od startu timelinu

export const drawTickMarks = (context, startDate, endDate, calculateXPosition, scale, interval) => {
  const tickHeight = 10; 
  const fontSize = 12;  

  let currentDate = new Date(startDate);

  // Dopasowanie currentDate bez cofanego przesunięcia
  switch (interval) {
    case "month":
      currentDate.setDate(1); 
      break;
    case "year":
      currentDate.setMonth(0);
      currentDate.setDate(1);  
      break;
    case "week":
      break;
    case "day":
      break;
    case "without tickmarks":
      return;
    default:
      return;
  }

  while (currentDate <= endDate) {
    const xPosition = calculateXPosition(currentDate) * scale;

    // Sprawdzanie, czy tickmark jest w granicach linii czasu
    if (xPosition >= 0) {
      context.lineWidth = 5;
      context.beginPath();
      context.moveTo(xPosition, 0); 
      context.lineTo(xPosition, tickHeight); 
      context.strokeStyle = "#555555";
      context.stroke();

      if (scale >= 1.3) {
        context.font = `${fontSize}px 'Source Sans 3'`;
        context.fillStyle = "#FFFFFF";
        context.textAlign = "center";

        switch (interval) {
          case "month":
            context.fillText(
              currentDate.toLocaleDateString('pl-PL', { month: 'short', year: 'numeric' }),
              xPosition,
              tickHeight + fontSize + 2
            );
            break;
          case "week":
            context.fillText(
              currentDate.toLocaleDateString('pl-PL', { day: 'numeric', month: 'short' }),
              xPosition,
              tickHeight + fontSize + 2
            );
            break;
          case "year":
            context.fillText(
              currentDate.toLocaleDateString('pl-PL', { year: 'numeric' }),
              xPosition,
              tickHeight + fontSize + 2
            );
            break;
          case "day":
            context.fillText(
              currentDate.toLocaleDateString('pl-PL', { day: 'numeric', month: 'short', year: 'numeric' }),
              xPosition,
              tickHeight + fontSize + 2
            );
            break;
          default:
            break;
        }
      }
    }

    // Przechodzenie do kolejnej daty na podstawie interwału
    switch (interval) {
      case "month":
        currentDate.setMonth(currentDate.getMonth() + 1);
        break;
      case "week":
        currentDate.setDate(currentDate.getDate() + 7);
        break;
      case "year":
        currentDate.setFullYear(currentDate.getFullYear() + 1);
        break;
      case "day":
        currentDate.setDate(currentDate.getDate() + 1);
        break;
      default:
        break;
    }
  }
};

*/
