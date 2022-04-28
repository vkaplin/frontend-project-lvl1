import { getRandomNumber } from '../brain-core.js';

function getProgression(a, b) {
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
}

function getCorrectAnswerProgression() {
    const maxRandomNumber = 10;
    const numberOne = getRandomNumber(maxRandomNumber);
    const numberTwo = getRandomNumber(maxRandomNumber);
    const progression = getProgression(numberOne, numberTwo);
    const randomNumber = getRandomNumber(maxRandomNumber);
    const answer = progression[randomNumber];

    progression[randomNumber] = '..';

    console.log('What number is missing in the progression?');
    console.log(`Question: ${progression.join(' ')}`);

    return answer;
}

export default getCorrectAnswerProgression;
