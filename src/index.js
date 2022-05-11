import readlineSync from 'readline-sync';

const roundsCount = 3;

const startGame = (description, generateRound) => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name?  ');

  console.log(`Hello, ${userName}`);
  console.log(description);

  for (let i = 0; i < roundsCount; i += 1) {
    const [question, answer] = generateRound();

    console.log(question);

    const userAnswer = readlineSync.question('Your answer: ');

    if (answer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${userName}!`);

      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default startGame;
