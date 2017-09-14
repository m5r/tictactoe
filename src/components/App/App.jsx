import React, { Component } from 'react';
import classNames from 'classnames';
import './App.css';
import { Grid } from '../Grid';
import { Header } from '../Header';
import { Footer } from '../Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: new Array(9).fill(0),
      playerIcon: 0,
      turnPlayer: 0,
    };
  }

  startNewGame(newPlayerIcon) {
    this.setState({
      board: new Array(9).fill(0),
      playerIcon: newPlayerIcon,
      turnPlayer: 1,
    });
  }

  makeMove(position, player) {
    this.setState(prevState => {
      const newBoard = prevState.board;
      newBoard[position] = player;

      return {
        board: newBoard,
        turnPlayer: -prevState.turnPlayer,
      };
    });
  }

  render() {
    const { board, playerIcon, turnPlayer } = this.state;

    return (
      <div className={classNames('App', { computerTurn: playerIcon !== turnPlayer })}>
        <Header />
        <div className='container'>
          <Grid
            board={board}
            playerIcon={playerIcon}
            makeMove={(position, player) => this.makeMove(position, player)}
            turnPlayer={turnPlayer}
          />
        </div>
        <Footer
          playerIcon={playerIcon}
          onSelectIcon={icon => this.startNewGame(icon)}
          turnPlayer={turnPlayer}
        />
      </div>
    );
  }
}

export default App;
