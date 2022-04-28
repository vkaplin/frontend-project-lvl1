import { getRandomNumber } from '../brain-core.js';

function getRandomSimbol() {
    const simbolArray = ['*', '-', '+'];
    const number = Math.floor(Math.random() * 3);
    return simbolArray[number];
}

function getCorrectAnswerCalc() {
    const maxRandomNumber = 100;
    const numberOne = getRandomNumber(maxRandomNumber);
    const numberTwo = getRandomNumber(maxRandomNumber);
    const symbol = getRandomSimbol();
    let answer;
    console.log('What is the result of the expression?');
    console.log(`Question: ${numberOne} ${symbol} ${numberTwo}`);

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
            answer = null;
    }
    return answer;
}

export default getCorrectAnswerCalc;
