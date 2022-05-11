import getRandomNumber from '../utils.js';
import startGame from '../index.js';

const getProgression = (a, b) => {
  const array = [];
  let curretnNumber = a;

  for (let i = 0; i < 10; i += 1) {
    if (i !== 0) {
      curretnNumber += b;
    }
    array.push(curretnNumber);
  }
  return array;
};

const description = 'What number is missing in the progression?';

const generateRound = () => {
  const maxRandomNumber = 10;
  const minRandomNumber = 1;

  const numberOne = getRandomNumber(minRandomNumber, maxRandomNumber);
  const numberTwo = getRandomNumber(minRandomNumber, maxRandomNumber);
  const progression = getProgression(numberOne, numberTwo);
  const randomNumber = getRandomNumber(minRandomNumber, maxRandomNumber - 1);
  const answer = String(progression[randomNumber]);

  progression[randomNumber] = '..';

  const question = `Question: ${progression.join(' ')}`;

  return [question, answer];
};

export default () => startGame(description, generateRound);
