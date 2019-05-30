import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    email: null,
    token: null,
    error: null,
    response: null,
    confirmAccount: null,
    resetPasswordResult: null,
    changePasswordResult: null,
    loading: false
}

const registerStart = ( state ) => {
        return updateObject( state, { 
        loading: true});
}

const registerSuccess = ( state, action ) => {
       return updateObject( state, {
        error: null, loading: false,
        response: action.response});
}

const registerFailed = ( state, action ) => {
    return updateObject( state, {
        error: action.error,
        loading: false});
}

const loginStart = ( state ) => {
    return updateObject( state, { 
        error: null, 
        loading: true});
}

const loginSuccess = ( state, action ) => {
    return updateObject( state, {
        token: action.token,
        error: null, loading: false});
}

const loginFailed = ( state, action ) => {
    return updateObject( state, {
        error: action.error,
        loading: false });
}

const logout = ( state ) => {
    return updateObject( state, {
        token: null});
}

const confirmAccountStart = ( state ) => {
    return updateObject( state, { 
        error: null, 
        loading: true});
}

const confirmAccountSuccess = ( state, action ) => {
    return updateObject( state, {
        confirmAccount: action.confirmAccount,
        error: null, loading: false});
}

const confirmAccountFailed = ( state, action ) => {
    return updateObject( state, {
        confirmAccount: action.confirmAccount,
        loading: false });
}

const resetPasswordStart = ( state ) => {
    return updateObject( state, { 
        error: null, 
        loading: true});
}

const resetPasswordSuccess = ( state, action ) => {
    return updateObject( state, {
        resetPasswordResult: action.resetPassword,
        error: null, loading: false});
}

const resetPasswordFailed = ( state, action ) => {
    return updateObject( state, {
        error: action.resetPassword,
        loading: false });
}

const changePasswordStart = ( state ) => {
    return updateObject( state, { 
        error: null, 
        loading: true});
}

const changePasswordSuccess = ( state, action ) => {
    return updateObject( state, {
        changePasswordResult: action.changePasswordResult,
        error: null, loading: false});
}

const changePasswordFailed = ( state, action ) => {
    return updateObject( state, {
        error: action.changePasswordResult,
        loading: false });
}

const resetErrors = ( state ) => {
    return updateObject( state, { 
        error: null,
        response: null,
        confirmAccount: null,
        resetPasswordResult: null,
        changePasswordResult: null,
    });
}

const loginFbStart = ( state ) => {
    return updateObject( state, { 
        error: null, 
        loading: true});
}

const loginFbSuccess = ( state, action ) => {
    return updateObject( state, {
        token: action.token,
        error: null, loading: false});
}

const loginFbFailed = ( state, action ) => {
    return updateObject( state, {
        error: action.error,
        loading: false });
}


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.REGISTER_START: return registerStart(state);
        case actionTypes.REGISTER_SUCCESS: return registerSuccess(state, action);
        case actionTypes.REGISTER_FAILED: return registerFailed(state, action);

        case actionTypes.LOGIN_START: return loginStart(state, action);
        case actionTypes.LOGIN_SUCCESS: return loginSuccess(state, action);
        case actionTypes.LOGIN_FAILED: return loginFailed(state, action);

        case actionTypes.LOGOUT: return logout(state);

        case actionTypes.CONFIRM_ACCOUNT_START: return confirmAccountStart(state, action);
        case actionTypes.CONFIRM_ACCOUNT_SUCCESS: return confirmAccountSuccess(state, action);
        case actionTypes.CONFIRM_ACCOUNT_FAILED: return confirmAccountFailed(state, action);

        case actionTypes.RESET_PASSWORD_START: return resetPasswordStart(state);
        case actionTypes.RESET_PASSWORD_SUCCESS: return resetPasswordSuccess(state, action);
        case actionTypes.RESET_PASSWORD_FAILED: return resetPasswordFailed(state, action);

        case actionTypes.CHANGE_PASSWORD_START: return changePasswordStart(state);
        case actionTypes.CHANGE_PASSWORD_SUCCESS: return changePasswordSuccess(state, action);
        case actionTypes.CHANGE_PASSWORD_FAILED: return changePasswordFailed(state, action);

        case actionTypes.LOGINFB_START: return loginFbStart(state, action);
        case actionTypes.LOGINFB_SUCCESS: return loginFbSuccess(state, action);
        case actionTypes.LOGINFB_FAILED: return loginFbFailed(state, action);

        case actionTypes.RESET_ERRORS: return resetErrors(state);

        default: 
            return state;
    }
}

export default authReducer;