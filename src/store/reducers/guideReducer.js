import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    error: null,
    response: null,
    loading: false,
    guides: [],
    guide: []
}

const addGuideStart = ( state ) => {
        return updateObject( state, { 
        loading: true});
}

const addGuideSuccess = ( state, action ) => {
       return updateObject( state, {
        error: null, loading: false,
        response: action.response});
}

const addGuideFailed = ( state, action ) => {
    return updateObject( state, {
        error: action.error,
        loading: false});
}
//==========================================

const getGuidesStart = ( state ) => {
    return updateObject( state, { 
    loading: true});
}

const getGuidesSuccess = ( state, action ) => {
   return updateObject( state, {
    error: null, loading: false, 
    guides: action.guides
});
}

const getGuidesFailed = ( state, action ) => {
    return updateObject( state, {
        error: action.error,
        loading: false});
    }

//==========================================

const editGuideStart = ( state ) => {
    return updateObject( state, { 
    loading: true});
}

const editGuideSuccess = ( state, action ) => {
   return updateObject( state, {
    error: null, loading: false, 
    response: action.response
});
}

const editGuideFailed = ( state, action ) => {
    return updateObject( state, {
        error: action.error,
        loading: false});
    }

//==========================================

const deleteGuideStart = ( state ) => {
    return updateObject( state, { 
    loading: true});
}

const deleteGuideSuccess = ( state, action ) => {
   return updateObject( state, {
    error: null, loading: false, 
    response: action.response
});
}

const deleteGuideFailed = ( state, action ) => {
    return updateObject( state, {
        error: action.error,
        loading: false});
    }

//==========================================


const getGuideStart = ( state ) => {
    return updateObject( state, { 
    loading: true});
}

const getGuideSuccess = ( state, action ) => {
    return updateObject( state, {
    error: null, loading: false, 
    response: action.response
});
}

const getGuideFailed = ( state, action ) => {
    return updateObject( state, {
        error: action.error,
        loading: false});
    }

const guideReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_GUIDE_START: return addGuideStart(state);
        case actionTypes.ADD_GUIDE_SUCCESS: return addGuideSuccess(state, action);
        case actionTypes.ADD_GUIDE_FAILED: return addGuideFailed(state, action);

        case actionTypes.GET_GUIDES_START: return getGuidesStart(state);
        case actionTypes.GET_GUIDES_SUCCESS: return getGuidesSuccess(state, action);
        case actionTypes.GET_GUIDES_FAILED: return getGuidesFailed(state, action);

        case actionTypes.EDIT_GUIDE_START: return editGuideStart(state);
        case actionTypes.EDIT_GUIDE_SUCCESS: return editGuideSuccess(state, action);
        case actionTypes.EDIT_GUIDE_FAILED: return editGuideFailed(state, action);

        case actionTypes.DELETE_GUIDE_START: return deleteGuideStart(state);
        case actionTypes.DELETE_GUIDE_SUCCESS: return deleteGuideSuccess(state, action);
        case actionTypes.DELETE_GUIDE_FAILED: return deleteGuideFailed(state, action);

        case actionTypes.GET_GUIDE_START: return getGuideStart(state);
        case actionTypes.GET_GUIDE_SUCCESS: return getGuideSuccess(state, action);
        case actionTypes.GET_GUIDE_FAILED: return getGuideFailed(state, action);

        default: 
            return state;
    }
}

export default guideReducer;