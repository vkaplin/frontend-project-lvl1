import getRandomNumber from '../utils.js';
import startGame from '../index.js';

const description = 'What is the result of the expression?';

const calculate = (numberOne, numberTwo, operator) => {
  switch (operator) {
    case '+':
      return numberOne + numberTwo;
    case '-':
      return numberOne - numberTwo;
    case '*':
      return numberOne * numberTwo;
    default:
      throw new Error(`Operator - ${operator}, doesn't supported`);
  }
};

const operators = ['*', '-', '+'];

const generateRound = () => {
  const maxRandomNumber = 100;
  const minRandomNumber = 1;

  const numberOne = getRandomNumber(minRandomNumber, maxRandomNumber);
  const numberTwo = getRandomNumber(minRandomNumber, maxRandomNumber);
  const operator = operators[getRandomNumber(0, operators.length - 1)];
  const question = `Question: ${numberOne} ${operator} ${numberTwo}`;
  const answer = calculate(numberOne, numberTwo, operator).toString();

  return [question, answer];
};

export default () => startGame(description, generateRound);
