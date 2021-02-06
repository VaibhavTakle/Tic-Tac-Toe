import React, { Component } from "react";
import Board from "./Board";
import "./index.css";
class Game extends Component {
  render() {
    return (
      <div className="Game">
        <Board />
      </div>
    );
  }
}

export default Game;
