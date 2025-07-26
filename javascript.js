console.log("Hello World!")

let round_number = 0;
let humanScore = 0;
let tieScore = 0
let computerScore = 0;
let mainhumanChoice = null;

const rock_button = document.querySelector("#rock-button");
const papper_button = document.querySelector("#paper-button");
const scissors_button = document.querySelector("#scissors-button");

scissors_button.addEventListener('click', getHumanChoice);
rock_button.addEventListener('click', getHumanChoice);
papper_button.addEventListener('click', getHumanChoice);

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getComputerChoice() {
  let cpu_selected_choice = getRandomInt(3);
  console.log(`CPU selected "${cpu_selected_choice}".`);

  return cpu_selected_choice;
}

function getHumanChoice(value) {
  const selectedValue = value.target.value;
  console.log(`Player selected "${selectedValue}".`);
  mainhumanChoice = parseInt(selectedValue);
  round_number++;

  if(round_number <= 5){
    player_selected_option_check();
  }
  else {
    round_number = 0;
    const game_log = document.querySelector("#game-log");
    game_log.textContent = `GAME ENDED | PLAYER SCORE:${humanScore} | TIES:${tieScore} | CPU SCORE:${computerScore} | SCORES WILL BE RESET`;
    humanScore = 0;
    tieScore = 0;
    computerScore = 0;
  }
}


function playRound(humanChoice, computerChoice) {
  let cpu_selected_choice;
  let human_selected_choice;
  let quote;

  if (humanChoice == computerChoice){
    quote = "TIE"
    tieScore++;
  }else if (humanChoice == 0 && computerChoice == 1){
    quote = "CPU wins"
    computerScore++;
  }else if (humanChoice == 1 && computerChoice == 0){
     quote = "Human wins"
    humanScore++;
  }else if (humanChoice == 2 && computerChoice == 0) {
    quote = "CPU wins"
    computerScore++;
  }else if (humanChoice == 0 && computerChoice == 2) {
    quote = "Human wins"
    humanScore++;
  }else if (humanChoice == 1 && computerChoice == 2){
     quote = "CPU wins"
    computerScore++;
  }else if (humanChoice == 2 && computerChoice == 1) {
    quote = "Human wins"
    humanScore++;
  }

  switch (humanChoice) {
    case 0:
      human_selected_choice = "rock"
      break;
    case 1:
      human_selected_choice = "paper"
      break;
    case 2:
      human_selected_choice = "scissors"
      break;
  }

  switch (computerChoice) {
    case 0:
      cpu_selected_choice = "rock"
      break;
    case 1:
      cpu_selected_choice = "paper"
      break;
    case 2:
      cpu_selected_choice = "scissors"
      break;
  }

  console.log(human_selected_choice);
  console.log(cpu_selected_choice);

  const game_log = document.querySelector("#game-log");
  game_log.textContent = `ROUND:${round_number} | You selected: ${human_selected_choice} | CPU seleceted: ${cpu_selected_choice} | ${quote} | PLAYER SCORE:${humanScore} | TIES:${tieScore} | CPU SCORE:${computerScore}`;



}

function player_selected_option_check() {
  if (mainhumanChoice != null || mainhumanChoice != undefined) {
    playRound(mainhumanChoice, getComputerChoice())
  }
}


function playGame() {
  playRound(mainhumanChoice, getComputerChoice)
}





