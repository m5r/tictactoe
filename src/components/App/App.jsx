import React, { Component } from 'react';
import classNames from 'classnames';
import './App.css';
import { Grid } from '../Grid';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { checkWin, computeBestPossibleMove, emptySpots, whoWon } from '../../ai/minimax';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: new Array(9).fill(0),
      playerIcon: 0,
      turnPlayer: 0,
    };
  }

  componentWillUpdate(nextProps, nextState) {
    const { playerIcon, turnPlayer, board } = nextState;

    if (turnPlayer !== playerIcon) {
      setTimeout(() => {
        const positionToMoveTo = computeBestPossibleMove({ board, player: playerIcon });
        this.makeMove(positionToMoveTo, turnPlayer);
      }, 500);
    }
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

    const isGameFinished = checkWin({ board, player: playerIcon }) ||
      checkWin({ board, player: -playerIcon }) ||
      emptySpots(board).length === 0;
    const winner = whoWon(board);
    const endGameMessage =
      isGameFinished ?
        winner === 0 ?
          'It\'s a draw.' :
          winner === playerIcon ?
            'You win.' :
            'I win.' :
        null;
    const playable = isGameFinished ? !isGameFinished : turnPlayer === playerIcon;

    return (
      <div className={classNames('App', { computerTurn: playerIcon !== turnPlayer })}>
        <Header />
        <div className='container'>
          <Grid
            board={board}
            playerIcon={playerIcon}
            makeMove={(position, player) => this.makeMove(position, player)}
            playable={playable}
          />
        </div>
        <Footer
          playerIcon={playerIcon}
          onSelectIcon={icon => this.startNewGame(icon)}
          turnPlayer={turnPlayer}
          endGameMessage={endGameMessage}
        />
      </div>
    );
  }
}

export default App;
