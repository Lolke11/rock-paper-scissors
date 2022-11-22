let playerScore = 0;
let computerScore = 0;

function getComputerChoice()
{
    randomNumber = Math.floor(Math.random() * 3) + 1;
    choice = "scissors";
    
    if (randomNumber === 1)
    {
        choice = "rock";
    }
    else if (randomNumber === 2)
    {
        choice = "paper";
    }

    return choice;
}

function playRound(playerChoice, computerChoice)
{
    if (playerScore === 5)
    {
        return 'YOU WIN!!!';
    }
    else if (computerScore === 5)
    {
        return 'YOU LOSE!!!';
    }
    
    if (playerChoice === "rock")
    {
        if (computerChoice === "rock")
        {
            return "It's draw!";
        }
        else if (computerChoice === "paper")
        {
            computerScore++;
            return "Paper beats rock, you lose!";
        }
        else
        {
            playerScore++;
            return "Rock beats scissors, you win!";
        }
    }
    else if (playerChoice === "paper")
    {
        if (computerChoice === "rock")
        {
            playerScore++;
            return "Paper beats rock, you win!";
        }
        else if (computerChoice === "paper")
        {
            return "It's draw!";
        }
        else
        {
            computerScore++;
            return "Scissors beat paper, you lose!";
        }
    }
    else
    {
        if (computerChoice === "rock")
        {
            computerScore++;
            return "Rock beats scissors, you lose!";
        }
        else if (computerChoice === "paper")
        {
            playerScore++;
            return "Scissors beat paper, you win!";
        }
        else
        {
            return "It's draw!";
        }
    }
}

const container = document.querySelector('.container');

const buttonRock = document.createElement('button');
buttonRock.textContent = 'ROCK';

const buttonPaper = document.createElement('button');
buttonPaper.textContent = 'PAPER';

const buttonScissors = document.createElement('button');
buttonScissors.textContent = 'SCISSORS';

const div = document.createElement('div');

const playerScoreDiv = document.createElement('div');
playerScoreDiv.textContent = 'Player points: ' + playerScore;

const computerScoreDiv = document.createElement('div');
computerScoreDiv.textContent = 'Computer points: ' + computerScore;


container.appendChild(buttonRock);
container.appendChild(buttonPaper);
container.appendChild(buttonScissors);
container.appendChild(div);
container.appendChild(playerScoreDiv);
container.appendChild(computerScoreDiv);

buttonRock.addEventListener('click', () => {
    div.textContent = playRound('rock', getComputerChoice());
    playerScoreDiv.textContent = 'Player points: ' + playerScore;
    computerScoreDiv.textContent = 'Computer points: ' + computerScore;
});
buttonPaper.addEventListener('click', () => {
    div.textContent = playRound('paper', getComputerChoice());
    playerScoreDiv.textContent = 'Player points: ' + playerScore;
    computerScoreDiv.textContent = 'Computer points: ' + computerScore;
});
buttonScissors.addEventListener('click', () => {
    div.textContent = playRound('scissors', getComputerChoice());
    playerScoreDiv.textContent = 'Player points: ' + playerScore;
    computerScoreDiv.textContent = 'Computer points: ' + computerScore;
});