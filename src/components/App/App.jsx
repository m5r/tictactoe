import React, { Component } from 'react';
import './App.css';
import { Grid } from '../Grid';
import { Header } from '../Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: [],
    };
  }

  render() {
    return (
      <div className='App'>
        <Header />
        <div className='container'>
          <Grid />
        </div>
        <footer>
          <div className='' />
        </footer>
      </div>
    );
  }
}

export default App;
