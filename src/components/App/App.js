import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Grid } from '../Grid';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header>
          <img src={logo} className='logo' alt='logo' />
          <h2>Welcome to React</h2>
        </header>
        <div className='container'>
          <Grid />
        </div>
        <footer>
          <div className=''>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
