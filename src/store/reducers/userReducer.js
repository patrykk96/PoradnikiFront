import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    user: [],
    error: null,
    loading: false
}

const getUserStart = ( state ) => {
        return updateObject( state, { 
        loading: true});
}

const getUserSuccess = ( state, action ) => {
       return updateObject( state, {
        error: null, loading: false,
        user: action.response});
}

const getUserFailed = ( state, action ) => {
    return updateObject( state, {
        error: action.error,
        loading: false});
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_USER_START: return getUserStart(state);
        case actionTypes.GET_USER_SUCCESS: return getUserSuccess(state, action);
        case actionTypes.GET_USER_FAILED: return getUserFailed(state, action);

        default: 
            return state;
    }
}

export default userReducer;