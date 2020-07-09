import React from 'react'

const LeaderboardItem = ({playerName, rounds}) => {
    return (
        <tr>
            <td className="leaderboard__player">{playerName}</td>
            <td className="leaderboard__score">{rounds}</td>
        </tr>
    )
}

export default LeaderboardItem
