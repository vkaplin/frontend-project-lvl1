import getRandomNumber from '../brain-core.js';
import startGame from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getCorrectAnswer = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const generateRound = () => {
  const minRandomNumber = 1;
  const maxRandomNumber = 100;
  const number = getRandomNumber(minRandomNumber, maxRandomNumber);
  const answer = getCorrectAnswer(number);
  const question = `Question: ${number}`;
  return [question, answer];
};

export default () => startGame(description, generateRound);
