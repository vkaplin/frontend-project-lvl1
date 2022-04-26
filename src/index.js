import { getUserName,
        getRandomNumber,
        checkAnswer,
        geCorrectAnswer,
        getUserAnswer,
        getRandomSimbol } from './brain-core.js';

import { games } from './games-type.js';

function startGame(gameType) {
    let curretnAttempt = 0;
    let answerIsCorrect = false;
    const userName = getUserName();

    console.log('Welcome to the Brain Games!');
    console.log(`Hello, ${userName}`);

    switch (gameType) {
        case games.even:
            console.log('Answer "yes" if the number is even, otherwise answer "no".');
            break;
        case games.calc:
            console.log('What is the result of the expression?');
            break;
        default:
            console.log('type not found');
    }

    do {
        const numberOne = getRandomNumber();
        const numberTwo = getRandomNumber();
        const simbol = getRandomSimbol();
        const correctAnswer = geCorrectAnswer(gameType, numberOne, numberTwo, simbol);

        switch (gameType) {
            case games.calc:
                console.log(`Question: ${numberOne} ${simbol} ${numberTwo}`);
                break;
            case games.even:
                console.log(`Question: ${numberOne}`);
                break;
            default:
                console.log('type not found');
        }

        const userAnswer = getUserAnswer();
        answerIsCorrect = checkAnswer(correctAnswer, userAnswer);

        if (curretnAttempt === 2 && answerIsCorrect) {
            console.log(`Congratulations, ${userName}!`);
        } else if (answerIsCorrect) {
            console.log('Correct!');
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${userName}!`);
        }

        curretnAttempt += 1;
    } while (curretnAttempt < 3 && answerIsCorrect);
}

export default startGame;
