import getRandomNumber from '../brain-core.js';
import startGame from '../index.js';

function getGCD(a, b) {
  if (b !== 0) {
    return getGCD(b, a % b);
  }
  return a;
}
const description = 'Find the greatest common divisor of given numbers.';

const generateRound = () => {
  const maxRandomNumber = 100;
  const minRandomNumber = 1;
  const numberOne = getRandomNumber(minRandomNumber, maxRandomNumber);
  const numberTwo = getRandomNumber(minRandomNumber, maxRandomNumber);
  const answer = getGCD(numberOne, numberTwo);
  const question = `Question: ${numberOne} ${numberTwo}`;
  return [question, String(answer)];
};

export default () => startGame(description, generateRound);
