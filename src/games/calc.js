import { getRandomNumber } from '../brain-core.js';
import startGame from '../index.js';

const description = 'What is the result of the expression?';
const getRandomSimbol = () => {
  const simbolArray = ['*', '-', '+'];
  const number = Math.floor(Math.random() * 3);
  return simbolArray[number];
};

const getCorrectAnswerCalc = (numberOne, numberTwo, symbol) => {
  switch (symbol) {
    case '+':
      return numberOne + numberTwo;
    case '-':
      return numberOne - numberTwo;
    case '*':
      return numberOne * numberTwo;
    default:
      console.log('unknown symbol');
      return null;
  }
};

const generateRound = () => {
  const maxRandomNumber = 100;
  const minRandomNumber = 1;
  const numberOne = getRandomNumber(minRandomNumber, maxRandomNumber);
  const numberTwo = getRandomNumber(minRandomNumber, maxRandomNumber);
  const symbol = getRandomSimbol();
  const answer = getCorrectAnswerCalc(numberOne, numberTwo, symbol);
  const question = `Question: ${numberOne} ${symbol} ${numberTwo}`;
  return [question, answer];
};

export default () => startGame(description, generateRound);
