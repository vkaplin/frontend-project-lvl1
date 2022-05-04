import { getRandomNumber } from '../brain-core.js';
import startGame from '../index.js';

const checkPime = (number) => {
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
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const generateRound = () => {
  const maxRandomNumber = 100;
  const minRandomNumber = 1;
  const numberOne = getRandomNumber(minRandomNumber, maxRandomNumber);
  const answer = checkPime(numberOne);
  const question = `Question: ${numberOne}`;
  return [question, answer];
};

export default () => startGame(description, generateRound);
