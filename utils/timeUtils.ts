/**
 * Конвертирует десятичное время в часы и минуты
 * @param decimalTime - время в десятичном формате (например, 8.5)
 * @returns объект с часами и минутами
 */
export const convertDecimalToTime = (decimalTime: number | string) => {
  const timeValue = typeof decimalTime === 'string' ? parseFloat(decimalTime) : decimalTime;
  const hours = Math.floor(timeValue);
  const minutes = Math.round((timeValue - hours) * 60);
  return { 
    hours: hours.toString().padStart(2, '0'), 
    minutes: minutes.toString().padStart(2, '0') 
  };
};

/**
 * Конвертирует часы и минуты в десятичное время
 * @param hours - часы
 * @param minutes - минуты
 * @returns время в десятичном формате
 */
export const convertTimeToDecimal = (hours: number, minutes: number): number => {
  return hours + (minutes / 60);
};

/**
 * Добавляет время к заданному времени
 * @param startHours - начальные часы
 * @param startMinutes - начальные минуты
 * @param addHours - часы для добавления
 * @param addMinutes - минуты для добавления
 * @returns объект с результирующими часами и минутами
 */
export const addTime = (startHours: number, startMinutes: number, addHours: number, addMinutes: number) => {
  let totalMinutes = startMinutes + addMinutes;
  let totalHours = startHours + addHours + Math.floor(totalMinutes / 60);
  totalMinutes = totalMinutes % 60;
  totalHours = totalHours % 24;

  return {
    hours: totalHours,
    minutes: totalMinutes,
  };
};

/**
 * Вычитает время из заданного времени
 * @param startHours - начальные часы
 * @param startMinutes - начальные минуты
 * @param subHours - часы для вычитания
 * @param subMinutes - минуты для вычитания
 * @returns объект с результирующими часами и минутами
 */
export const subtractTime = (startHours: number, startMinutes: number, subHours: number, subMinutes: number) => {
  let totalMinutes = startHours * 60 + startMinutes;
  let subtractMinutes = subHours * 60 + subMinutes;

  let resultMinutes = (totalMinutes - subtractMinutes + 1440) % 1440; // 1440 - минут в сутках

  const hours = Math.floor(resultMinutes / 60);
  const minutes = resultMinutes % 60;

  return { hours, minutes };
};

/**
 * Форматирует время с ведущими нулями
 * @param hours - часы
 * @param minutes - минуты
 * @returns отформатированная строка времени
 */
export const formatTime = (hours: number | string, minutes: number | string): string => {
  const h = typeof hours === 'string' ? hours : hours.toString();
  const m = typeof minutes === 'string' ? minutes : minutes.toString();
  return `${h.padStart(2, '0')}:${m.padStart(2, '0')}`;
};

/**
 * Валидирует время
 * @param hours - часы
 * @param minutes - минуты
 * @returns true если время валидно, false если нет
 */
export const isValidTime = (hours: number, minutes: number): boolean => {
  return hours >= 0 && hours <= 23 && minutes >= 0 && minutes <= 59;
};
