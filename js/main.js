//Функция, возвращающая случайное целое число из переданного диапазона включительно. Источник:https://learn.javascript.ru/task/random-int-min-max
function getRandomInteger (min, max) {
  if (min>=0) {
    const rand = Math.floor(Math.random() * (max-min+1))+min;
    // eslint-disable-next-line no-console
    console.log(rand);
    return rand;
  }
}
getRandomInteger(10, 5);

// Если max <= min, то по сути промежуток не меняется. Поэтому, наверное, функция будет вести себя так же.
//Функция для проверки максимальной длины строки.
function getTruncateText(line , lineLength) {
  const maxLength = 140;
  if (lineLength < maxLength) {
    // eslint-disable-next-line no-console
    console.log(true);
    return lineLength;
  }

  // eslint-disable-next-line no-console
  console.log(false);
  return lineLength;
}
getTruncateText(20, 130);
