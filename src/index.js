import { getUserName, checkAnswer, getUserAnswer } from './brain-core.js';
import { games } from './games-type.js';

import getCorrectAnswerCalc from './games/calc.js';
import getCorrectAnswerEven from './games/even.js';
import getCorrectAnswerGCD from './games/gcd.js';
import getCorrectAnswerPrime from './games/prime.js';
import getCorrectAnswerProgression from './games/progression.js';

function startGame(gameType) {
  let curretnAttempt = 0;
  let answerIsCorrect = false;
  const userName = getUserName();

  console.log('Welcome to the Brain Games!');
  console.log(`Hello, ${userName}`);

  do {
    let correctAnswer;

    switch (gameType) {
      case games.calc:
        correctAnswer = getCorrectAnswerCalc();
        break;
      case games.even:
        correctAnswer = getCorrectAnswerEven();
        break;
      case games.gcd:
        correctAnswer = getCorrectAnswerGCD();
        break;
      case games.progression:
        correctAnswer = getCorrectAnswerProgression();
        break;
      case games.prime:
        correctAnswer = getCorrectAnswerPrime();
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
