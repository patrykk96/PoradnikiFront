import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    error: null,
    response: null,
    loading: false,
    games: [],
    game: []
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
//==========================================

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

//==========================================

const editGameStart = ( state ) => {
    return updateObject( state, { 
    loading: true});
}

const editGameSuccess = ( state, action ) => {
   return updateObject( state, {
    error: null, loading: false, 
    response: action.response
});
}

const editGameFailed = ( state, action ) => {
    return updateObject( state, {
        error: action.error,
        loading: false});
    }

//==========================================

const deleteGameStart = ( state ) => {
    return updateObject( state, { 
    loading: true});
}

const deleteGameSuccess = ( state, action ) => {
   return updateObject( state, {
    error: null, loading: false, 
    response: action.response
});
}

const deleteGameFailed = ( state, action ) => {
    return updateObject( state, {
        error: action.error,
        loading: false});
    }

//==========================================


const getGameStart = ( state ) => {
    return updateObject( state, { 
    loading: true});
}

const getGameSuccess = ( state, action ) => {
    return updateObject( state, {
    error: null, loading: false, 
    response: action.response
});
}

const getGameFailed = ( state, action ) => {
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

        case actionTypes.EDIT_GAME_START: return editGameStart(state);
        case actionTypes.EDIT_GAME_SUCCESS: return editGameSuccess(state, action);
        case actionTypes.EDIT_GAME_FAILED: return editGameFailed(state, action);

        case actionTypes.DELETE_GAME_START: return deleteGameStart(state);
        case actionTypes.DELETE_GAME_SUCCESS: return deleteGameSuccess(state, action);
        case actionTypes.DELETE_GAME_FAILED: return deleteGameFailed(state, action);

        case actionTypes.GET_GAME_START: return getGameStart(state);
        case actionTypes.GET_GAME_SUCCESS: return getGameSuccess(state, action);
        case actionTypes.GET_GAME_FAILED: return getGameFailed(state, action);

        default: 
            return state;
    }
}

export default gameReducer;