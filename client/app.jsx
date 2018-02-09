import React from 'react';
import checkBoard from './gamelogic.js';

const boardStyle = {
  'height': '1000px',
  'width': '1000px',
  'borderStyle': 'solid',
  'borderWidth': '2px'
};

class Board extends React.Component {
  constructor() {
    super();
    this.state = {
      'turn': 0,
      'gaming': false,
      'board': [
  ['o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o'],
]
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleGenerateBoard = this.handleGenerateBoard.bind(this);
  }

  handleClick(e) {
    let targetCol = Number(e.target.id.substring(3, 4));
    let board = this.state.board;
    for (let i = board.length-1; i >= 0; i--) {
      if (board[i][targetCol] === 'o') {
        let move = document.getElementById(`row${i}`).childNodes[targetCol];
        let newBoard = [...board];
        if (this.state.turn % 2 === 0) {
          newBoard[i][targetCol] = 'y';
          move.style.backgroundColor = 'yellow';
        } else {
          newBoard[i][targetCol] = 'r';
          move.style.backgroundColor = 'red';
        }
        this.setState({'board': newBoard});
        let check = checkBoard(this.state.board);
        if (check === 'Red Wins' || check === 'Yellow Wins') {
          document.getElementById('board').innerHTML = check
        }
        if (this.state.turn === 42 && check === `It's a tie!!`) {
          document.getElementById('board').innerHTML = check
        }
        break;
      }
    };
    this.setState({
      'turn': this.state.turn + 1
    });
  };

  handleGenerateBoard(e) {
    this.setState({
      gaming: true
    });
    for (let i = 0; i < this.state.board.length; i++) {
      let row = document.createElement('div');
      row.className = 'row';
      row.id = `row${i}`;
      for (let j = 0; j < this.state.board[i].length; j++) {
        let empty = document.createElement('div');
        empty.className = 'empty';
        empty.id = `col${j}`;
        empty.onclick = this.handleClick;
        row.appendChild(empty);
      }
      document.getElementById('board').appendChild(row);
    }
  }

  render() {
    return (
      <div>
        {
          this.state.gaming ? (
            <h1>Make a move!</h1>
            ) : (
            <button onClick={(e) => {this.handleGenerateBoard(e)}}>New Game</button>
            )
        }
        <div id="board" className="board" style={boardStyle}></div>
      </div>
      )
  }
}

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      'game': 'status',
      'spaces left': 'number'
    }
  }
  render(){
    return (
      <div>
        <Board />
      </div>
      )
  }
};

export default App;