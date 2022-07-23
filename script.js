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