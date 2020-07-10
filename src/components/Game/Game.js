import React, { Component } from 'react'
import { connect } from 'react-redux'
import GameBoard from './GameBoard'
import { handleCheckCells } from '../../actions/game'

class Game extends Component {
    state = {
        selectedCells: []
    }

    componentDidUpdate() {
        if (this.props.game.treasureFound === 3) {
            this.props.gameState("finished")
        }
    }

    toggleCell = (e) => {
        const cellId = e.target.id
        if (this.state.selectedCells.includes(cellId)) {
            this.uncheckCell(cellId)
        } else if (this.state.selectedCells.length === 3) {
            console.log("Too many checks!")
        } else {
            this.setState(prevState => ({
                selectedCells: [...prevState.selectedCells, cellId]
              }))
              document.getElementById(cellId).classList.add("selected");
            }
    }

    uncheckCell = (cellId) => {
        this.setState(prevState => ({
            selectedCells: prevState.selectedCells.filter(item => item !== cellId)
        }))
        document.getElementById(cellId).classList.remove("selected");
    }

    checkCells = () => {
        const { dispatch } = this.props
        dispatch(handleCheckCells(this.props.player, this.state.selectedCells))
        this.state.selectedCells.map(cell => this.uncheckCell(cell))
    }

    render() {
        return (
            <div>
                <h2>Player: {this.props.player}</h2>
                <h3>Round {this.props.game.rounds + 1}</h3>
                <h4>Select up to 3 cells</h4>
                <GameBoard cells={this.props.game.cells} toggleCell={this.toggleCell}/>
                <button className="btn" onClick={this.checkCells}>Check cells</button>
            </div>
        )
    }
}

function mapStateToProps ( { player, game }) {
    return {
      player,
      game
    }
  }
  
export default connect(mapStateToProps)(Game);