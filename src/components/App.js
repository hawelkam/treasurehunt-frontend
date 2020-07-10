import React, { Component } from 'react';
import './App.css';
import './StartGame/StartGame'
import StartGame from './StartGame/StartGame';
import Game from './Game/Game'
import Leaderboard from './Leaderboard/Leaderboard'

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
          <StartGame gameState={this.changeGameState} />
        ) : this.state.gameState === 'started' ? (
            <Game gameState={this.changeGameState}/>
          ) : (<Leaderboard gameState={this.changeGameState} />) 
        }
      </div>
    );
  }
}

export default App;
