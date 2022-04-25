#!/usr/bin/env node
import {getUserName, 
        getRandomNumber, 
        checkAnswer,
        geCorrectAnswer,
        getUserAnswer} from '../src/brain-even-core.js';

function startGame(){
    let curretnAttempt = 0;
    let answerIsCorrect = false;
    const userName = getUserName();

    console.log('Welcome to the Brain Games!');
    console.log(`Hello, ${userName}`);
    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    do{
        const curretnNumber = getRandomNumber();
        console.log(`Question: ${curretnNumber}`);
        
        const userAnswer = getUserAnswer();
        const correctAnswer = geCorrectAnswer(curretnNumber);

        answerIsCorrect = checkAnswer(correctAnswer, userAnswer);

        if(curretnAttempt ===2 &&  answerIsCorrect){
            console.log(`Congratulations, ${userName}!`);
        }else if(answerIsCorrect){
            console.log('Correct!');
        }else{          
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${userName}!`);
        }

        curretnAttempt +=1;

    }while(curretnAttempt <3 && answerIsCorrect )

}

startGame();


