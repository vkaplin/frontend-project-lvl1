import readlineSync from 'readline-sync';

function getUserName() {
  const userName = readlineSync.question('May I have your name?  ');
  return userName;
}

function getUserAnswer() {
  const answer = readlineSync.question('Your answer: ');
  return answer;
}

function getRandomNumber(maxNumber) {
  return Math.floor(Math.random() * maxNumber);
}

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
