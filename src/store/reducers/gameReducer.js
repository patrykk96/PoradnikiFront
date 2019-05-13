import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    error: null,
    response: null,
    loading: false,
    games: []
}

const addGameStart = ( state ) => {
        return updateObject( state, { 
        loading: true});
}

const addGameSuccess = ( state, action ) => {
       return updateObject( state, {
        error: null, loading: false,
        response: action.response});
}

const addGameFailed = ( state, action ) => {
    return updateObject( state, {
        error: action.error,
        loading: false});
}

const getGamesStart = ( state ) => {
    return updateObject( state, { 
    loading: true});
}

const getGamesSuccess = ( state, action ) => {
   return updateObject( state, {
    error: null, loading: false, 
    games: action.games
});
}

const getGamesFailed = ( state, action ) => {
return updateObject( state, {
    error: action.error,
    loading: false});
}

const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_GAME_START: return addGameStart(state);
        case actionTypes.ADD_GAME_SUCCESS: return addGameSuccess(state, action);
        case actionTypes.ADD_GAME_FAILED: return addGameFailed(state, action);

        case actionTypes.GET_GAMES_START: return getGamesStart(state);
        case actionTypes.GET_GAMES_SUCCESS: return getGamesSuccess(state, action);
        case actionTypes.GET_GAMES_FAILED: return getGamesFailed(state, action);

        default: 
            return state;
    }
}

export default gameReducer;