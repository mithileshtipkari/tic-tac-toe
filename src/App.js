import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './components/Game'
import "./style.css";

class App extends Component {
  render() {
    return (
      <div>
        <div className="headline">Tic - Tac - Toe</div>
        <p className="description">Tic-tac-toe, noughts and crosses, or Xs and Os is a paper-and-pencil game for two players, X and O, who take turns marking the spaces in a 3×3 grid. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row is the winner.</p>
        <div className="link">
          <a href="https://en.wikipedia.org/wiki/Tic-tac-toe">wikipedia</a>
        </div>
        <div className="text">
          <Game />
        </div>
      </div>
    );
  }
}

export default App;
