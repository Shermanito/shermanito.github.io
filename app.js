let userScore = 0;
let compScore = 0;
const scoreBoard_div = document.querySelector(".scroe-board")
const userScore_span = document.getElementById('user-score')
const compScore_span = document.getElementById('comp-score')
const result_p = document.querySelector('.result > p')
const rock_div = document.getElementById('r')
const paper_div = document.getElementById('p')
const scissors_div = document.getElementById('s')
const gamePlays_div = document.getElementById('gamePlays')



//-------------- --value Functions----------------------
function covertToWord(letter){
  if (letter === 'r') return `Rock`
  if (letter === 'p') return 'Paper'
    if (letter === 's') return 'Scissors'
}
// ------- computer gennerated random choice- -------
function getComputerChoice(){
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() *3);
  return choices[randomNumber];
}
// ---- - - -- --- --number or games func - --------

let gameNumber = 0;


// ------- ------ Outputs/ Wins loses & Draws-----------

const smallUserWord = '(user)'.fontsize(3).sub()
const smallCompWord = '(comp)'.fontsize(3).sub()

function win(userChoice, computerChoice){
  userScore++
  userScore_span.innerHTML = userScore;
  result_p.innerHTML = `${covertToWord(userChoice)}${smallUserWord} beats ${covertToWord(computerChoice)}${smallCompWord} You WIN! 🔥`
  document.getElementById(userChoice).classList.add('greenGlow');
  setTimeout( function(){document.getElementById(userChoice).classList.remove('greenGlow')}, 700);
}

function lose(userChoice, computerChoice){
  compScore++
  compScore_span.innerHTML = compScore;
result_p.innerHTML = `${covertToWord(userChoice)}${smallUserWord} beats ${covertToWord(computerChoice)}${smallCompWord} You Lose 💩`
document.getElementById(userChoice).classList.add('redGlow');
setTimeout( function(){document.getElementById(userChoice).classList.remove('redGlow')}, 700);
}

function draw(userChoice, computerChoice){
  console.log('Its a DRAW!')
  result_p.innerHTML = `Its a Draw 🤷‍♂️`
  document.getElementById(userChoice).classList.add('greyGlow');
  setTimeout( function(){document.getElementById(userChoice).classList.remove('greyGlow')}, 700);
}
//---------- -- Game Logic/ Comparison------- ---
function game(userChoice){
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case 'rs':
    case 'pr':
    case 'sp':
      win(userChoice, computerChoice);
      break;
    case 'sr':
    case 'rp':
    case 'ps':
      lose(userChoice, computerChoice);
      break;
      case 'rr':
      case 'pp':
      case 'ss':
        draw(userChoice, computerChoice);
      break;
  }
}


function main() {
    rock_div.addEventListener('click', function() {
    game('r');
    gameNumber++
    gamePlays_div.innerHTML= `number of games: ${gameNumber}`;
  })

  paper_div.addEventListener('click', function() {
    game('p')
    gameNumber++
    gamePlays_div.innerHTML= `number of games: ${gameNumber}`;
  })

  scissors_div.addEventListener('click', function() {
    game('s')
    gameNumber++
    gamePlays_div.innerHTML= `number of games: ${gameNumber}`;
  })
}

main();
