import React, { Component } from 'react'
import { _getLeaderboard } from '../utils/gameApi'

export default class Leaderboard extends Component {
    state = {
        leaderboard: ''
    }

    componentDidMount () {
        _getLeaderboard().then(res => {
            this.setState({
                leaderboard: res
            })
        })
    }

    render() {
        return (
            <div>
                <h2>LEADERBOARD</h2>
                <ul>
                    {this.state.leaderboard && this.state.leaderboard.map((result, index) => (
                        <li key={index}>{result.playerName} : {result.rounds}</li>
                    ))}
                </ul>
                <button onClick={() => this.props.gameState("not started")}>Start new game</button>
            </div>
        )
    }
}
