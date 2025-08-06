import { declineHours, declineMinutes } from './textDeclension';
import { convertDecimalToTime } from './timeUtils';

/**
 * Форматирует время с правильными склонениями
 * @param decimalTime - время в десятичном формате
 * @returns отформатированная строка с правильными склонениями
 */
export const formatTimeWithDeclension = (decimalTime: number | string): string => {
  const { hours, minutes } = convertDecimalToTime(decimalTime);
  const hoursNum = parseInt(hours, 10);
  const minutesNum = parseInt(minutes, 10);

  const hoursText = declineHours(hoursNum);
  const minutesText = declineMinutes(minutesNum);

  return `${hoursNum} ${hoursText} ${minutesNum} ${minutesText}`;
};

/**
 * Форматирует время для отображения в UI
 * @param hours - часы
 * @param minutes - минуты
 * @returns отформатированная строка для UI
 */
export const formatDisplayTime = (hours: number | string, minutes: number | string): string => {
  const h = typeof hours === 'string' ? parseInt(hours, 10) : hours;
  const m = typeof minutes === 'string' ? parseInt(minutes, 10) : minutes;

  return `${h.toString().padStart(2, '0')} ${declineHours(h)} ${m.toString().padStart(2, '0')} ${declineMinutes(m)}`;
};
