class TicTacToe {
    constructor() {
      this.field = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
      ];
      this.curr_player = 'x';
      this.finished = false;
      this.winner = null;
      this.no_terns = false;
    }

    getCurrentPlayerSymbol() {
      return this.curr_player;
    }

    nextTurn(rowIndex, columnIndex) {
      if (!this.field[rowIndex][columnIndex]) {
        this.field[rowIndex][columnIndex] = this.curr_player;
        this.curr_player = this.curr_player === 'x' ? 'o' : 'x';
      }
    }

    isFinished() {
      if (this.getWinner() || this.noMoreTurns()) return true;
      return false;
    }

    getWinner() {
      for (let i=0; i<3; i++) {
        if ((this.field[i][0] === 'x' && this.field[i][1] === 'x' && this.field[i][2] === 'x') || 
            (this.field[0][i] === 'x' && this.field[1][i] === 'x' && this.field[2][i] === 'x')) return 'x';
        if ((this.field[i][0] === 'o' && this.field[i][1] === 'o' && this.field[i][2] === 'o') ||
            (this.field[0][i] === 'o' && this.field[1][i] === 'o' && this.field[2][i] === 'o')) return 'o';
      }
      if ((this.field[0][0] === 'x' && this.field[1][1] === 'x' && this.field[2][2] === 'x') ||
          (this.field[0][2] === 'x' && this.field[1][1] === 'x' && this.field[2][0] === 'x')) return 'x';
      if ((this.field[0][0] === 'o' && this.field[1][1] === 'o' && this.field[2][2] === 'o') ||
          (this.field[0][2] === 'o' && this.field[1][1] === 'o' && this.field[2][0] === 'o')) return 'o';
      return null;
    }

    noMoreTurns() {
      for (let i=0; i<3; i++) {
        if (this.field[i].includes(null)) return false;
      }
      return true;
    }

    isDraw() {
      if (!this.getWinner() && this.noMoreTurns()) return true;
      return false;
    }

    getFieldValue(rowIndex, colIndex) {
      return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
