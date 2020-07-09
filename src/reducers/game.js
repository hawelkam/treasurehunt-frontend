import { RECEIVE_BOARD, CHECK_CELLS } from '../actions/game';

export default function questions (state = {}, action) {
    switch (action.type) {
        case RECEIVE_BOARD:
            return {
                ...state,
                ...action.board
            }
        case CHECK_CELLS:
                const { cells } = action; 
                cells.cellValues.forEach(element => {
                    state = {
                        ...state,
                        cells: [
                            ...state.cells.slice(0, element.id - 1),
                            element,
                            ...state.cells.slice(element.id)
                        ], 
                    }
                })
                return {
                    ...state,
                    rounds: cells.round,
                    treasureFound: cells.treasuresFound
                }
        default:
            return state;
    }
}