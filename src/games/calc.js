import getRandomNumber from '../brain-core.js';
import startGame from '../index.js';

const description = 'What is the result of the expression?';

const getCorrectAnswerCalc = (numberOne, numberTwo, symbol) => {
  let answer = '';
  switch (symbol) {
    case '+':
      answer = numberOne + numberTwo;
      break;
    case '-':
      answer = numberOne - numberTwo;
      break;
    case '*':
      answer = numberOne * numberTwo;
      break;
    default:
      throw new Error(`Operator - ${symbol}, doesn't supported`);
  }
  return String(answer);
};

const generateRound = () => {
  const maxRandomNumber = 100;
  const minRandomNumber = 1;
  const numberOne = getRandomNumber(minRandomNumber, maxRandomNumber);
  const numberTwo = getRandomNumber(minRandomNumber, maxRandomNumber);
  const operators = ['*', '-', '+'];
  const operator = operators[getRandomNumber(0, operators.length - 1)];
  const answer = getCorrectAnswerCalc(numberOne, numberTwo, operator);
  const question = `Question: ${numberOne} ${operator} ${numberTwo}`;
  return [question, answer];
};

export default () => startGame(description, generateRound);
