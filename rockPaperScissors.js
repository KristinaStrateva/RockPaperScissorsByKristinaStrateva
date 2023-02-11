function rockPaperScissors(playerTurn) {
    const rock = 'Rock';
    const paper = 'Paper';
    const scissors = 'Scissors';

    if (playerTurn === 'r' || playerTurn === 'rock') {
        playerTurn = rock;
    } else if (playerTurn === 'p' || playerTurn === 'paper') {
        playerTurn = paper;
    } else if (playerTurn === 's' || playerTurn === 'scissors') {
        playerTurn = scissors;
    } else {
        console.log('Invalid input. Try Agagin...');
    }

    console.log(`You choose ${playerTurn}`);

    let computerRandomNumber = Math.floor(Math.random() * 3) + 1;
    let computerChoice = '';

    if (computerRandomNumber === 1) {
        computerChoice = rock;
    } else if (computerRandomNumber === 2) {
        computerChoice = paper;
    } else if (computerRandomNumber === 3) {
        computerChoice = scissors;
    }

    console.log(`The computer chooses ${computerChoice}`);

    if ((playerTurn === 'Rock' && computerChoice === 'Scissors') || (playerTurn === 'Paper' && computerChoice === 'Rock') || (playerTurn === 'Scissors' && computerChoice === 'Paper')) {
        console.log('\x1b[95mYou win! \x1b[0m');
    } else if ((playerTurn === 'Rock' && computerChoice === 'Paper') || (playerTurn === 'Paper' && computerChoice === 'Scissors') || (playerTurn === 'Scissors' && computerChoice === 'Rock')) {
        console.log('\x1b[95mYou lose! \x1b[0m');
    } else {
        console.log('\x1b[95mThis game was a draw! \x1b[0m');
    }
}

rockPaperScissors('rock');
