import React, { Component } from 'react';
import './App.css';
import './components/StartPage'
import StartPage from './components/StartPage';
import Game from './components/Game'
import Leaderboard from './components/Leaderboard'

class App extends Component {
  state = {
    gameState: 'not started'
  }

  changeGameState = (gameState) => {
    this.setState({
      gameState
    })
  }

  render() {
    return (
      <div className="container">
        <h1>Treasure Hunt</h1>
        { this.state.gameState === 'not started' ? (
          <StartPage gameState={this.changeGameState} />
        ) : this.state.gameState === 'started' ? (
            <Game gameState={this.changeGameState}/>
          ) : (<Leaderboard gameState={this.changeGameState} />) 
        }
      </div>
    );
  }
}

export default App;
