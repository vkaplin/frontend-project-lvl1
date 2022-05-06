import getRandomNumber from '../brain-core.js';
import startGame from '../index.js';

const getProgression = (a, b) => {
  const array = [];
  let curretnNumber = a && a > 0 ? a : 1;
  const number = b && b > 0 ? b : 1;

  for (let i = 0; i < 10; i += 1) {
    if (i !== 0) {
      curretnNumber += number;
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
  const answer = progression[randomNumber];

  progression[randomNumber] = '..';

  const question = `Question: ${progression.join(' ')}`;

  return [question, String(answer)];
};

export default () => startGame(description, generateRound);
