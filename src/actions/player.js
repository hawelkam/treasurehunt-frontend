export const SET_PLAYERNAME = 'SET_PLAYERNAME';

export function setPlayername(playerName) {
    return {
        type: SET_PLAYERNAME,
        playerName
    }
}