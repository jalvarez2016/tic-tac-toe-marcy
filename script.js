const game = new Board(document.getElementById('board'));
game.initBoard();

const roundCounter = document.getElementById('roundCounter');
const currentPlayer = document.getElementById('currentPlayer');
const oWins = document.getElementById('oWins');
const xWins = document.getElementById('xWins');
const draws = document.getElementById('draws');
const resetButton = document.getElementById('reset');

const changePlayer = () => {
  currentPlayer.textContent = game.player;
};

const updateScoreboard = () => {
  oWins.textContent = game.wins.O;
  xWins.textContent = game.wins.X;
  // draws.textContent = game.wins['draws']
};

document.addEventListener('update-scoreboard', updateScoreboard);
document.addEventListener('change-player', changePlayer);
resetButton.addEventListener('click', game.reset.bind(game));
