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
    if (playerChoice === "rock")
    {
        if (computerChoice === "rock")
        {
            return "It's draw!";
        }
        else if (computerChoice === "paper")
        {
            return "Paper beats rock, you lose!"
        }
        else
        {
            return "Rock beats scissors, you win!";
        }
    }
    else if (playerChoice === "paper")
    {
        if (computerChoice === "rock")
        {
            return "Paper beats rock, you win!";
        }
        else if (computerChoice === "paper")
        {
            return "It's draw!"
        }
        else
        {
            return "Scissors beat paper, you lose!";
        }
    }
    else
    {
        if (computerChoice === "rock")
        {
            return "Rock beats scissors, you lose!";
        }
        else if (computerChoice === "paper")
        {
            return "Scissors beat paper, you win!"
        }
        else
        {
            return "It's draw!";
        }
    }
}