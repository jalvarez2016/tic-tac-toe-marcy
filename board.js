class Board {
  constructor(table) {
    this.table = table;
    this.boardState = [[], [], []];
    this.player = 'O';
    this.countMoves = 0;
    this.winner = null;
    this.wins = {
      O: 0,
      X: 0,
    };
  }

  initBoard() {
    const places = this.table.querySelectorAll('td');
    places.forEach((place, ind) => {
      place.addEventListener('click', this.updateBoard.bind(this));
      if (this.boardState[0].length < 3) {
        this.boardState[0].push(place);
      } else if (this.boardState[1].length < 3) {
        this.boardState[1].push(place);
      } else if (this.boardState[2].length < 3) {
        this.boardState[2].push(place);
      }
    });
  }

  changeTurn() {
    this.player = this.player === 'O' ? 'X' : 'O';
    this.countMoves += 1;
    const event = new CustomEvent('change-player');
    document.dispatchEvent(event);
  }

  updateBoard(e) {
    if (!e.target.innerText && this.winner === null) {
      e.target.innerText = this.player;
      this.checkWin();
      this.changeTurn();
    }
  }

  renderWinner(el1, el2, el3) {
    this.winner = this.player;
    this.wins[this.player] += 1;
    const event = new CustomEvent('update-scoreboard');
    document.dispatchEvent(event);
  }

  reset() {
    const places = this.table.querySelectorAll('td');
    places.forEach((place) => {
      place.innerText = '';
    });
    this.countMoves = 0;
    const event = new CustomEvent('reset');
    document.dispatchEvent(event);
  }

  checkWin() {
    if (this.boardState[0][0].innerText === this.boardState[0][1].innerText
        && this.boardState[0][0].innerText === this.boardState[0][2].innerText
        && this.boardState[0][0].innerText !== '') {
      this.renderWinner(this.boardState[0][0].innerText, this.boardState[0][1].innerText, this.boardState[0][2].innerText);
    } else if (this.boardState[1][0].innerText === this.boardState[1][1].innerText
        && this.boardState[1][0].innerText === this.boardState[1][2].innerText
        && this.boardState[1][0].innerText !== '') {
      this.renderWinner(this.boardState[1][0].innerText, this.boardState[1][1].innerText, this.boardState[1][2].innerText);
    } else if (this.boardState[2][0].innerText === this.boardState[2][1].innerText
        && this.boardState[2][0].innerText === this.boardState[2][2].innerText
        && this.boardState[2][0].innerText !== '') {
      this.renderWinner(this.boardState[2][0].innerText, this.boardState[2][1].innerText, this.boardState[2][2].innerText);
    } else if (this.boardState[0][0].innerText === this.boardState[1][0].innerText
        && this.boardState[0][0].innerText === this.boardState[2][0].innerText
        && this.boardState[0][0].innerText !== '') {
      this.renderWinner(this.boardState[0][0].innerText, this.boardState[1][0].innerText, this.boardState[2][0].innerText);
    } else if (this.boardState[0][1].innerText === this.boardState[1][1].innerText
        && this.boardState[0][1].innerText === this.boardState[2][1].innerText
        && this.boardState[0][1].innerText !== '') {
      this.renderWinner(this.boardState[0][1].innerText, this.boardState[1][1].innerText, this.boardState[2][1].innerText);
    } else if (this.boardState[0][2].innerText === this.boardState[1][2].innerText
        && this.boardState[0][2].innerText === this.boardState[2][2].innerText
        && this.boardState[0][2].innerText !== '') {
      this.renderWinner(this.boardState[0][2].innerText, this.boardState[1][2].innerText, this.boardState[2][2].innerText);
    } else if (this.boardState[0][0].innerText === this.boardState[1][1].innerText
        && this.boardState[0][0].innerText === this.boardState[2][2].innerText
        && this.boardState[0][0].innerText !== '') {
      this.renderWinner(this.boardState[0][0].innerText, this.boardState[1][1].innerText, this.boardState[2][2].innerText);
    } else if (this.boardState[0][2].innerText === this.boardState[1][1].innerText
        && this.boardState[0][2].innerText === this.boardState[2][0].innerText
        && this.boardState[0][2].innerText !== '') {
      this.renderWinner(this.boardState[0][2].innerText, this.boardState[1][1].innerText, this.boardState[2][0].innerText);
    }
    if (this.countMoves === 9 && this.winner === null) {
      this.winner = 'Draw';
      // this.draws += 1;
      // this.updateCounters();
      // this.gameEnd();
    }
  }
}

//
