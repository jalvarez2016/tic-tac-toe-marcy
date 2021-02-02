const game = new Board(document.getElementById('board'));
game.initBoard();

const roundCounter = document.getElementById('roundCounter');
const currentPlayer = document.getElementById('currentPlayer');
const oWins = document.getElementById('oWins');
const xWins = document.getElementById('xWins');
const draws = document.getElementById('draws');
