import readlineSync from 'readline-sync';
import { getUserName } from './brain-core.js';

function startGame(description, generateRound) {
  const roundsCount = 3;
  const userName = getUserName();

  console.log(`${description}`);

  for (let i = 0; i < roundsCount; i += 1) {
    const [question, answer] = generateRound();

    console.log(`${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (answer.toString() === userAnswer.toString()) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log(`Congratulations, ${userName}!`);
  }
}

export default startGame;
