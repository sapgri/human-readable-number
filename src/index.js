module.exports = function toReadable(number) {
  const num = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
  };

  const hundreds =
    number > 99 ? `${num[Math.floor(number / 100)]} hundred` : '';
  let units = number % 10;
  let tens = number % 100;

  if (number % 100 === 0) {
    units = '';
    tens = '';
  }

  if (tens < 20 || tens % 10 === 0) {
    units = '';
    tens = num[tens];
  }

  if (tens > 19 && tens % 10) {
    tens = num[Math.floor(tens / 10) * 10];
    units = num[units];
  }

  return number ? [hundreds, tens, units].join(' ').trim() : num[0];
};
