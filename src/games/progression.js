import getRandomNumber from '../utils.js';
import startGame from '../index.js';

const description = 'What number is missing in the progression?';

const getProgression = (startNumber, step, maxLength) => {
  const array = [];
  let curretnNumber = startNumber;

  for (let i = 0; i < maxLength; i += 1) {
    if (i !== 0) {
      curretnNumber += step;
    }
    array.push(curretnNumber);
  }
  return array;
};

const generateRound = () => {
  const maxLength = 10;
  const minLength = 1;

  const startNumber = getRandomNumber(minLength, maxLength);
  const step = getRandomNumber(minLength, maxLength);
  const progression = getProgression(startNumber, step, maxLength);
  const randomIndex = getRandomNumber(minLength, maxLength - 1);
  const answer = progression[randomIndex].toString();

  progression[randomIndex] = '..';

  const question = `Question: ${progression.join(' ')}`;

  return [question, answer];
};

export default () => startGame(description, generateRound);
