import { getRandomNumber } from '../brain-core.js';

function getGCD(a, b) {
    if (b !== 0) {
        return getGCD(b, a % b);
    }
    return a;
}

function getCorrectAnswerGCD() {
    const maxRandomNumber = 100;
    const numberOne = getRandomNumber(maxRandomNumber);
    const numberTwo = getRandomNumber(maxRandomNumber);

    console.log('Find the greatest common divisor of given numbers.');
    console.log(`Question: ${numberOne} ${numberTwo}`);

    return getGCD(numberOne, numberTwo);
}

export default getCorrectAnswerGCD;
