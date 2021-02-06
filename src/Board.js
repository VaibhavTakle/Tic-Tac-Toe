import React, { Component } from "react";
import Square from "./Square";
import "./index.css";

const calculateWinner = (squares) => {
  const lines = [
    //horizontal
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    //verticle
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    //diagonal
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return "";
};

class Board extends Component {
  state = {
    squares: ["", "", "", "", "", "", "", "", ""],
    xIsNext: true,
  };

  handleReset = () => {
    this.setState({ squares: ["", "", "", "", "", "", "", "", ""] });
  };

  handleClick = (num) => () => {
    if (calculateWinner(this.state.squares) || this.state.squares[num]) {
      return;
    }
    const newSquares = [...this.state.squares];

    //const newSquares = this.state.squares.slice()
    newSquares[num] = this.state.xIsNext ? "x" : "o";
    this.setState({
      squares: newSquares,
      xIsNext: !this.state.xIsNext,
    });
  };
  render() {
    const { squares, xIsNext } = this.state;
    const winner = calculateWinner(this.state.squares);
    let status;
    const tie = this.state.squares;
    if (winner) {
      status = `winner : ${winner}`;
    } else if (
      tie[0] !== "" &&
      tie[1] !== "" &&
      tie[2] !== "" &&
      tie[3] !== "" &&
      tie[4] !== "" &&
      tie[5] !== "" &&
      tie[6] !== "" &&
      tie[7] !== "" &&
      tie[8] !== ""
    ) {
      status = "Game is Tie";
    } else {
      status = `Next Step: ${xIsNext ? "x" : "o"}`;
    }
    return (
      <div className="Board">
        <h1>{status}</h1>
        <div className="Row">
          <Square value={squares[0]} onClick={this.handleClick(0)} />
          <Square value={squares[1]} onClick={this.handleClick(1)} />
          <Square value={squares[2]} onClick={this.handleClick(2)} />
        </div>

        <div className="Row">
          <Square value={squares[3]} onClick={this.handleClick(3)} />
          <Square value={squares[4]} onClick={this.handleClick(4)} />
          <Square value={squares[5]} onClick={this.handleClick(5)} />
        </div>
        <div className="Row">
          <Square value={squares[6]} onClick={this.handleClick(6)} />
          <Square value={squares[7]} onClick={this.handleClick(7)} />
          <Square value={squares[8]} onClick={this.handleClick(8)} />
        </div>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

export default Board;
