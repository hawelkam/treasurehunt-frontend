import React, { Component } from 'react'
import { _getLeaderboard } from '../utils/gameApi'
import LeaderboardItem from './LeaderboardItem'

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
                <h2>Congratulations! You've won!</h2>
                <br />
                <h2>LEADERBOARD</h2>
                <table>
                    <tr>
                        <th className="leaderboard__player">Player Name</th>
                        <th className="leaderboard__score">Score</th>
                    </tr>
                    {this.state.leaderboard && this.state.leaderboard.map((result, index) => (
                        <LeaderboardItem key={index} playerName={result.playerName} rounds={result.rounds} />
                    ))}
                </table>
                <button className="btn" onClick={() => this.props.gameState("not started")}>Start new game</button>
            </div>
        )
    }
}
