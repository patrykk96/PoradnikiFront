import * as types from "../actions/actionTypes";
import axios from "axios";

export const getUserStart = () => {
    return {
      type: types.GET_USER_START
    };
  };
  
  export const getUserSuccess = response => {
    return {
      type: types.GET_USER_SUCCESS,
      response: response
    };
  };
  
  export const getUserFailed = error => {
    return {
      type: types.GET_USER_FAILED,
      error: error
    };
  };
  
  export const getUser = (userId) => {
    return dispatch => {
      dispatch(getUserStart());
      axios.get("/user/getUser/" + userId)
        .then(response => {
          dispatch(getUserSuccess(response.data.successResult.user));
        })
        .catch(error => {
            console.log(error);
          dispatch(getUserFailed(error));
        });
    };
  };
