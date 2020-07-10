import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setPlayername } from '../../actions/player'
import { handleReceiveBoard } from '../../actions/game'

class StartGame extends Component {
    state = {
        playerInput: ''
    }

    handleChange = (e) => {
        this.setState({
            playerInput: e.target.value
        })
    }

    startGame = () => {
        const { dispatch, gameState } = this.props
        dispatch(setPlayername(this.state.playerInput))
        dispatch(handleReceiveBoard(this.state.playerInput))
        gameState('started')
    }

    render() {
        return (
            <div>
                <h2>Your name:</h2>
                <input type="text" value={this.state.playerInput} onChange={(e) => this.handleChange(e)}></input>
                <button onClick={this.startGame} className="btn" disabled={this.state.playerInput === ''}>Start game</button>
            </div>
        )
    }
}
  
export default connect()(StartGame);