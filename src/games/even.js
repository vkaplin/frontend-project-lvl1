import { getRandomNumber } from '../brain-core.js';

function getCorrectAnswerEven() {
    const maxRandomNumber = 100;
    const numberOne = getRandomNumber(maxRandomNumber);

    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    console.log(`Question: ${numberOne}`);

    if (numberOne % 2 === 0) {
        return 'yes';
    } else {
        return 'no';
    }
}

export default getCorrectAnswerEven;
