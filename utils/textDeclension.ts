/**
 * Склоняет слово "час" в зависимости от числа
 * @param hours - количество часов
 * @returns правильное склонение слова "час"
 */
export const declineHours = (hours: number): string => {
  const lastDigit = hours % 10;
  const lastTwoDigits = hours % 100;

  // Для 11, 12, 13, 14 - "часов"
  if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
    return 'часов';
  }

  // Для 1 - "час"
  if (lastDigit === 1) {
    return 'час';
  }

  // Для 2, 3, 4 - "часа"
  if (lastDigit >= 2 && lastDigit <= 4) {
    return 'часа';
  }

  // Для остальных - "часов"
  return 'часов';
};

/**
 * Склоняет слово "минута" в зависимости от числа
 * @param minutes - количество минут
 * @returns правильное склонение слова "минута"
 */
export const declineMinutes = (minutes: number): string => {
  const lastDigit = minutes % 10;
  const lastTwoDigits = minutes % 100;

  // Для 11, 12, 13, 14 - "минут"
  if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
    return 'минут';
  }

  // Для 1 - "минута"
  if (lastDigit === 1) {
    return 'минута';
  }

  // Для 2, 3, 4 - "минуты"
  if (lastDigit >= 2 && lastDigit <= 4) {
    return 'минуты';
  }

  // Для остальных - "минут"
  return 'минут';
};
