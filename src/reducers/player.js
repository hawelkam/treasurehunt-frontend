import { SET_PLAYERNAME } from '../actions/player';

export default function questions (state = null, action) {
    switch (action.type) {
        case SET_PLAYERNAME:
            return action.playerName
            
        default:
            return state;
    }
}