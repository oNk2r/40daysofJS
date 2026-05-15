/**
 * Rock, Paper, Scissors Game
 * 
 * Assumptions:
 * - The game is played between a user and the computer.
 * - The user can choose between "rock", "paper", or "scissors".
 * - The computer will randomly select one of the three options.
 * - we have to compare the user's choice with the computer's choice to determine the winner.
 * - we need to announce the result of the game (win, lose, or draw) to the user.
 * - after the game, we can ask the user if they want to play again.
 */

function rockPaperScissors() {
    console.log("Welcome to Rock, Paper, Scissors!");

    const userChoicePrompt = prompt("Please enter your choice (rock, paper, or scissors):").toLowerCase();

    let userChoice;
    let computerChoice = Math.floor(Math.random() * 3) + 1;

    switch (userChoicePrompt) {
        case "rock":
            userChoice = 1;
            break;
        case "paper":
            userChoice = 2;
            break;
        case "scissors":
            userChoice = 3;
            break;
        default:
            console.log("Invalid choice. Please enter rock, paper, or scissors.");
            return;
    }
    console.log(`You chose: ${userChoicePrompt}`);
    console.log("Computer chose:",computerChoice === 1 ? "rock" : computerChoice === 2 ? "paper" : "scissors");

    if (userChoice === computerChoice) {
        console.log("It's a draw!");
    }
    else if ((userChoice === 1 && computerChoice === 3) ||
             (userChoice === 2 && computerChoice === 1) ||
             (userChoice === 3 && computerChoice === 2)) {
        console.log("You win!");
    }
    else {
        console.log("You lose!");
    }

    const playAgainPrompt = prompt("Do You Want to Play Again? (yes/no)")
    const playAgain = playAgainPrompt ? playAgainPrompt.toLowerCase() : "no";

    if (playAgain === "yes") {
        rockPaperScissors();
    } else {
        console.log("Thanks for Playing! See you Next Time")
    }
}

rockPaperScissors();