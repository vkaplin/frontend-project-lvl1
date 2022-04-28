import { getRandomNumber } from '../brain-core.js';

function checkPime(number) {
  let result = 'yes';
  if (number > 2) {
    const max = Math.sqrt(number);
    let i = 2;
    while (i < max) {
      if (number % i === 0) {
        result = 'no';
        break;
      }
      i += 1;
    }
  }

  return result;
}

function getCorrectAnswerPrime() {
  const maxRandomNumber = 100;
  const numberOne = getRandomNumber(maxRandomNumber);

  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  console.log(`Question: ${numberOne}`);

  return checkPime(numberOne);
}

export default getCorrectAnswerPrime;
