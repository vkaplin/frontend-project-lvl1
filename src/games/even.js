import getRandomNumber from '../utils.js';
import startGame from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

const generateRound = () => {
  const minRandomNumber = 1;
  const maxRandomNumber = 100;
  const number = getRandomNumber(minRandomNumber, maxRandomNumber);
  const answer = isEven(number) ? 'yes' : 'no';
  const question = `Question: ${number}`;

  return [question, answer];
};

export default () => startGame(description, generateRound);
