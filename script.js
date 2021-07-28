'use strict';
/* console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent='Correct Number!';
document.querySelector('.guess').value=23; */

let secretNumber=Math.trunc(Math.random()*20)+1;
let score=20;
let highscore=0;

const displayMessage=function(message){
    document.querySelector('.message').textContent=message;
}

document.querySelector('.check').addEventListener('click',function(){
    const guess=Number(document.querySelector('.guess').value);
    // console.log(guess,typeof guess);
    if(!guess){
        displayMessage('No number!');
    }
    else if(guess==secretNumber){
        if(highscore<score){
            highscore=score;
            document.querySelector('.highscore').textContent=highscore;
        }
        displayMessage('Correct Number!');
        document.querySelector('.number').textContent=secretNumber;
        document.querySelector('body').style.backgroundColor='#60b347';
        document.querySelector('.number').style.width='30rem';
    }
    else if(guess!=secretNumber){
        displayMessage(guess>secretNumber?'Too High':'To Low');
        score--;
        document.querySelector('.score').textContent=score;
        document.querySelector('.highscore').textContent=highscore;
        if(score==0){
            displayMessage('You Lost The Game.');
        }
    }  
})

document.querySelector('.again').addEventListener('click',function(){
    secretNumber=Math.trunc(Math.random()*20)+1;
    score=20;
    displayMessage('Start guessing...');
    document.querySelector('.number').textContent='?';
    document.querySelector('.score').textContent=score;
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.guess').value='';
    document.querySelector('.number').style.width='15rem';
})