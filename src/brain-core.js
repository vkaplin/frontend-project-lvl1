import readlineSync from 'readline-sync';

function getUserName() {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?  ');
  console.log(`Hello, ${userName}`);
  return userName;
}

function getUserAnswer() {
  const answer = readlineSync.question('Your answer: ');
  return answer;
}

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

function checkAnswer(answer, userAnswer) {
  let result = false;
  if (answer && userAnswer && answer.toString() === userAnswer.toString()) {
    result = true;
  }
  return result;
}

export {
  getUserName,
  getRandomNumber,
  checkAnswer,
  getUserAnswer,
};
