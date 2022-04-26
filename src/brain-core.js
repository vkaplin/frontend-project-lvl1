import readlineSync from 'readline-sync';
import { games } from './games-type.js';

function getUserName() {
    const userName = readlineSync.question('May I have your name?  ');
    return userName;
}

function getUserAnswer() {
    const answer = readlineSync.question('Your answer: ');
    return answer;
}

function getRandomNumber() {
    return Math.floor(Math.random() * 100);
}

function checkAnswer(answer, userAnswer) {
    if (toString(answer) === userAnswer) {
        return true;
    } else {
        return false;
    }
}

function geCorrectAnswer(gameType, numberOne, numberTwo, symbol) {
    let result;

    if (gameType === games.even) {
        if (numberOne % 2 === 0) {
            result = 'yes';
        } else {
            result = 'no';
        }
    } else if (gameType === games.calc) {
        switch (symbol) {
            case '+':
                result = numberOne + numberTwo;
                break;
            case '-':
                result = numberOne - numberTwo;
                break;
            case '*':
                result = numberOne * numberTwo;
                break;
            default:
                result = null;
        }
    }

    return result;
}

function getRandomSimbol() {
    const simbolArray = ['*', '-', '+'];
    const number = Math.floor(Math.random() * 3);
    return simbolArray[number];
}

export {
    getUserName,
    getRandomNumber,
    checkAnswer,
    getUserAnswer,
    geCorrectAnswer,
    getRandomSimbol,
};
