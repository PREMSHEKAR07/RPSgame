let score = JSON.parse(localStorage.getItem('score'))
||{
    Wins: 0,
    Losses : 0,
    Ties: 0
};



updateScoreElement();

function updateScoreElement(){
    document.querySelector('.js-score').innerHTML = `Wins: ${score.Wins}, Losses: ${score.Losses}, Ties: ${score.Ties}`;
}

function pickComputerMove(){
    const randomNumber = Math.random();
    let computerMove = ''

    if(randomNumber< (1/3)){
        computerMove = 'rock';
    }
    else if(randomNumber>= (1/3) && randomNumber < (2/3)){
        computerMove = 'paper';
    }
    else if(randomNumber >= (2/3) && randomNumber< (1)){
        computerMove = 'scissors';
    }
    return computerMove;
}

function game(choice){
    const computerMove = pickComputerMove();
    let result = ''
    if(choice === 'rock'){
        if(computerMove === 'scissors'){
            result = 'You Win';
        }
        else if(computerMove === 'paper'){
            result = 'You Lose';
        }
        else if(computerMove === 'rock'){
            result = 'You Tie';
        }
    }
    else if(choice === 'paper'){
        if(computerMove === 'rock'){
            result = 'You Win';
        }
        else if(computerMove === 'scissors'){
            result = 'You Lose';
        }
        else if(computerMove === 'paper'){
            result = 'You Tie';
        }
    }
    else if(choice === 'scissors'){
        if(computerMove === 'paper'){
            result = 'You Win';
        }
        else if(computerMove === 'rock'){
            result = 'You Lose';
        }
        else if(computerMove === 'scissors'){
            result = 'You Tie';
        }
    }

    if(result === 'You Win'){
        score.Wins += 1;
    }
    else if(result === 'You Lose'){
        score.Losses += 1;
    }
    else if(result === 'You Tie'){
        score.Ties += 1;
    }

    localStorage.setItem('score' , JSON.stringify(score));

    document.querySelector('.js-moves').innerHTML = `Your Move:- ${document.querySelector('.' + choice + '-icon').innerHTML}, Computer Move:- ${document.querySelector('.' + computerMove + '-icon').innerHTML}`;
    document.querySelector('.js-result').innerHTML = result;
    updateScoreElement();
    // document.querySelector('.js-score').innerHTML = result;
}