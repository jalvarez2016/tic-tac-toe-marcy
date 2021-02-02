class Board {
  constructor(table) {
    this.table = table;
    this.boardState = [[], [], []];
    this.player = 'O';
    this.winner = null;
  }

  initBoard() {
    const places = this.table.querySelectorAll('td');
    places.forEach((place, ind) => {
      if (this.boardState[0].length < 3) {
        this.boardState[0].push(place);
      } else if (this.boardState[1].length < 3) {
        this.boardState[1].push(place);
      } else if (this.boardState[2].length < 3) {
        this.boardState[2].push(place);
      }
      console.log(this.boardState);
    });
  }

  changeTurn() {
    this.player = this.player === 'O' ? 'X' : 'O';
  }

  updateBoard(e) {
    const places = this.table.querySelectorAll('td');
    places.forEach((places) => {
      // update boardstate & table
      // this.
    });
    this.changeTurn();
  }

  checkWin() {}
}

// if (this.matrix[0][0] === this.matrix[0][1]
//   && this.matrix[0][0] === this.matrix[0][2]
//   && this.matrix[0][0] !== undefined) {
//   this.renderWinner(this.elMatrix[0][0], this.elMatrix[0][1], this.elMatrix[0][2]);
// } else if (this.matrix[1][0] === this.matrix[1][1]
//   && this.matrix[1][0] === this.matrix[1][2]
//   && this.matrix[1][0] !== undefined) {
//   this.renderWinner(this.elMatrix[1][0], this.elMatrix[1][1], this.elMatrix[1][2]);
// } else if (this.matrix[2][0] === this.matrix[2][1]
//   && this.matrix[2][0] === this.matrix[2][2]
//   && this.matrix[2][0] !== undefined) {
//   this.renderWinner(this.elMatrix[2][0], this.elMatrix[2][1], this.elMatrix[2][2]);
// } else if (this.matrix[0][0] === this.matrix[1][0]
//   && this.matrix[0][0] === this.matrix[2][0]
//   && this.matrix[0][0] !== undefined) {
//   this.renderWinner(this.elMatrix[0][0], this.elMatrix[1][0], this.elMatrix[2][0]);
// } else if (this.matrix[0][1] === this.matrix[1][1]
//   && this.matrix[0][1] === this.matrix[2][1]
//   && this.matrix[0][1] !== undefined) {
//   this.renderWinner(this.elMatrix[0][1], this.elMatrix[1][1], this.elMatrix[2][1]);
// } else if (this.matrix[0][2] === this.matrix[1][2]
//   && this.matrix[0][2] === this.matrix[2][2]
//   && this.matrix[0][2] !== undefined) {
//   this.renderWinner(this.elMatrix[0][2], this.elMatrix[1][2], this.elMatrix[2][2]);
// } else if (this.matrix[0][0] === this.matrix[1][1]
//   && this.matrix[0][0] === this.matrix[2][2]
//   && this.matrix[0][0] !== undefined) {
//   this.renderWinner(this.elMatrix[0][0], this.elMatrix[1][1], this.elMatrix[2][2]);
// } else if (this.matrix[0][2] === this.matrix[1][1]
//   && this.matrix[0][2] === this.matrix[2][0]
//   && this.matrix[0][2] !== undefined) {
//   this.renderWinner(this.elMatrix[0][2], this.elMatrix[1][1], this.elMatrix[2][0]);
// }
// if (this.moveCount === 9 && this.winner === null) {
//   this.winner = 'Draw';
//   this.draws += 1;
//   this.updateCounters();
//   this.gameEnd();
// }
