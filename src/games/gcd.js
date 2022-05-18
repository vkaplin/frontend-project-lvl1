import getRandomNumber from '../utils.js';
import startGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGCD = (a, b) => {
  if (b !== 0) {
    return getGCD(b, a % b);
  }
  return a;
};

const generateRound = () => {
  const maxRandomNumber = 100;
  const minRandomNumber = 1;

  const numberOne = getRandomNumber(minRandomNumber, maxRandomNumber);
  const numberTwo = getRandomNumber(minRandomNumber, maxRandomNumber);
  const answer = getGCD(numberOne, numberTwo).toString();
  const question = `Question: ${numberOne} ${numberTwo}`;

  return [question, answer];
};

export default () => startGame(description, generateRound);
