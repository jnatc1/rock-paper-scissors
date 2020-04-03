let computerPlay = () => {
  let randoNum = Math.floor((Math.random() * 3) + 1);
  switch (randoNum) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
  }
};
let playRound= () => {
  let playerSelection = prompt("Enter Rock, Paper, or Scissors, ensure you enter one of the three, or you'll automatically lose.").toLowerCase();
  let computerSelection = computerPlay();
  if (playerSelection === 'rock' && computerSelection === 'scissors') {
    alert("Player wins!");
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    alert("Player wins!");
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    alert("Player wins!");
  } else if (playerSelection === computerSelection) {
    alert("We have a draw");
  } else {
    alert("Player loses, computer wins!");
  }
};
function game() {
  let count = 0;
  while (count < 5) {
    playRound();
    count++;
  }
  console.log(`The total count is: ${count}`);
}
game();


