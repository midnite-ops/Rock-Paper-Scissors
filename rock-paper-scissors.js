const myScore = {
    wins: 0,
    losses: 0,
    ties: 0
}
function myMove(pickedMove){
    const computerMove = pickedComputerMove();
    let result = '';

    if(pickedMove === 'Rock'){
        if(computerMove === 'Rock'){
            result = 'You tie';
        }else if(computerMove === 'Paper'){
            result = 'You lose';
        }else if(computerMove === 'Scissors'){
            result = 'You win';
        }
    }else if(pickedMove === 'Paper'){
        if(computerMove === 'Rock'){
            result = 'You win';
        }else if(computerMove === 'Paper'){
            result = 'You tie';
        }else if(computerMove === 'Scissors'){
            result = 'You lose';
        }
    }else if(pickedMove === 'Scissors'){
        if(computerMove === 'Rock'){
            result = 'You lose';
        }else if(computerMove === 'Paper'){
            result = 'You win';
        }else if(computerMove === 'Scissors'){
            result = 'You tie';
        }
    }

    if(result === 'You win'){
        myScore.wins += 1;
    }else if(result === 'You lose'){
        myScore.losses += 1;
    }else if(result === 'You tie'){
        myScore.ties += 1;
    }
    const jsText = document.querySelector('.js-move');
    jsText.innerHTML = `You: <img class = "game" src = 'images/${pickedMove}.png'> Jesse: <img class = "game" src = images/${computerMove}.png>`

    const jsText2 = document.querySelector('.js-outcome');
    jsText2.innerHTML = `${result}`;

    jsResult();
}

function jsResult(){
    const jsText = document.querySelector('.js-result');

    jsText.innerHTML = `Wins: ${myScore.wins}, Losses: ${myScore.losses}, Ties: ${myScore.ties}`;
}

function pickedComputerMove(){
    const randomNumber = Math.random();
    let computerMove = '';
    if(randomNumber > 0  &&  randomNumber <= 1/3){
        computerMove = 'Rock';
    }else if(randomNumber > 1/3  &&  randomNumber <= 2/3){
        computerMove = 'Paper';
    }else if(randomNumber > 2/3  && randomNumber <= 1){
        computerMove ='Scissors';
    }
    return computerMove;
}
