import { getRandomNumber } from '../brain-core.js';

function getCorrectAnswerEven() {
    const maxRandomNumber = 100;
    const numberOne = getRandomNumber(maxRandomNumber);
    let result;
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    console.log(`Question: ${numberOne}`);

    if (numberOne % 2 === 0) {
        result = 'yes';
    } else {
        result = 'no';
    }
    return result;
}

export default getCorrectAnswerEven;
