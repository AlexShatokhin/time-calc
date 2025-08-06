/**
 * Валидирует рабочее время (должно быть от 0.01 до 24.00 часов)
 * @param workTime - рабочее время в десятичном формате
 * @returns true если время валидно, false если нет
 */
export const validateWorkTime = (workTime: number): boolean => {
  return workTime > 0 && workTime <= 24;
};

/**
 * Валидирует формат времени (00,00 или 00.00)
 * @param timeString - строка времени
 * @returns true если формат валиден, false если нет
 */
export const validateTimeFormat = (timeString: string): boolean => {
  const timeRegex = /^\d{1,2}[,.]\d{1,2}$/;
  return timeRegex.test(timeString);
};

/**
 * Нормализует строку времени (заменяет запятую на точку)
 * @param timeString - строка времени
 * @returns нормализованная строка
 */
export const normalizeTimeString = (timeString: string): string => {
  return timeString.replace(',', '.');
};

/**
 * Фильтрует ввод, оставляя только цифры, запятые и точки
 * @param input - входная строка
 * @returns отфильтрованная строка
 */
export const filterTimeInput = (input: string): string => {
  return input.replace(/[^0-9,.]/g, '');
};

/**
 * Валидирует часы (0-23)
 * @param hours - часы
 * @returns true если валидны, false если нет
 */
export const validateHours = (hours: number): boolean => {
  return hours >= 0 && hours <= 23;
};

/**
 * Валидирует минуты (0-59)
 * @param minutes - минуты
 * @returns true если валидны, false если нет
 */
export const validateMinutes = (minutes: number): boolean => {
  return minutes >= 0 && minutes <= 59;
};
