import React, { Component } from 'react';
import './App.css';
import { Grid } from '../Grid';
import { Header } from '../Header';
import { Footer } from '../Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: new Array(9).fill(0),
      message: 'Who starts?',
      playerIcon: 0,
    };
  }

  setPlayerIcon(newPlayerIcon) {
    const newMessage = newPlayerIcon === 1 ? 'Your turn' : 'Wait for it';

    this.setState({
      board: new Array(9).fill(0),
      message: newMessage,
      playerIcon: newPlayerIcon,
    });
  }

  render() {
    const { board, message, playerIcon } = this.state;

    return (
      <div className='App'>
        <Header />
        <div className='container'>
          <Grid
            board={board}
            playerIcon={playerIcon}
          />
        </div>
        <Footer
          message={message}
          onSelectIcon={icon => this.setPlayerIcon(icon)}
        />
      </div>
    );
  }
}

export default App;
