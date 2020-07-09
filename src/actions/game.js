import { _getBoardState, _checkCells } from '../utils/gameApi';

export const RECEIVE_BOARD = 'RECEIVE_BOARD';
export const CHECK_CELLS = 'CHECK_CELLS';

function receiveBoard(board) {
    return {
        type: RECEIVE_BOARD,
        board
    }
}

function checkCells(cells) {
    return {
        type: CHECK_CELLS,
        cells
    }
}

export function handleReceiveBoard(playerName) {
    return (dispatch) => {
        return _getBoardState(playerName).then((board) => dispatch(receiveBoard(board)));
    }
}

export function handleCheckCells(playerName, cells) {
    return (dispatch) => {
        return _checkCells(playerName, cells).then((c) => {
            dispatch(checkCells(c))
        });
    }
}