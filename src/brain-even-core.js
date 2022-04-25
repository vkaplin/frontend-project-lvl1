import readlineSync from 'readline-sync';

export {
    getUserName,
    getRandomNumber,
    checkAnswer,
    getUserAnswer,
    geCorrectAnswer
}

function getUserName() {
    const userName = readlineSync.question('May I have your name?  ');
    return userName;
}

function getUserAnswer(){
    const answer = readlineSync.question('Your answer: ');
    return answer;
}

function getRandomNumber(){
    return Math.floor(Math.random() * 100);
}

function checkAnswer(answer, userAnswer){
    if(answer === userAnswer){
        return true;
    }else{
        return false;
    }
}

function geCorrectAnswer(number){
    if(number % 2 === 0){
        return 'yes';
    }else{
        return 'no';
    }
}
