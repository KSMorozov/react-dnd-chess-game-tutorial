import React, { Component } from 'react';
import Board from './components/Board/Board';

export default class App extends Component {
  render() {
    return <Board knightPosition={[4, 0]}/>;
  }
}
