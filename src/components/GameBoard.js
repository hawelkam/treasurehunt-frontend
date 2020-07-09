import React from 'react'
import GameCell from './GameCell'

const GameBoard = ({cells, toggleCell}) => {
    return (
        <div className="board">
            {cells && cells.map(cell => (
                <GameCell key={cell.id} cell={cell} toggleCell={toggleCell} />
            ))}
        </div>
    )
}

export default GameBoard

