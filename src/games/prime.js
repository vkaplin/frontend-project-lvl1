import getRandomNumber from '../utils.js';
import startGame from '../index.js';

const isPrime = (number) => {
  let result = true;
  const max = Math.sqrt(number);
  let i = 2;
  while (i < max) {
    if (number % i < 1) {
      result = false;
      break;
    }
    i += 1;
  }
  return result;
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const generateRound = () => {
  const maxRandomNumber = 100;
  const minRandomNumber = 1;

  const numberOne = getRandomNumber(minRandomNumber, maxRandomNumber);
  const answer = isPrime(numberOne) ? 'yes' : 'no';
  const question = `Question: ${numberOne}`;

  return [question, answer];
};

export default () => startGame(description, generateRound);
