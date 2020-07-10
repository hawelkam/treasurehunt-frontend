import React from 'react'

const GameCell = ({cell, toggleCell}) => {
    return (
        <button className="cell" id={cell.id} onClick={toggleCell} disabled={cell.value !== ''}>{cell.value}</button>
    )
}

export default GameCell
