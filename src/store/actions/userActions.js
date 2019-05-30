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
          dispatch(getUserSuccess(response.data.successResult));
        })
        .catch(error => {
            console.log(error);
          dispatch(getUserFailed(error));
        });
    };
  };

  export const editUserStart = () => {
    return {
      type: types.EDIT_USER_START
    };
  };
  
  export const editUserSuccess = response => {
    return {
      type: types.EDIT_USER_SUCCESS,
      response: response
    };
  };
  
  export const editUserFailed = error => {
    return {
      type: types.EDIT_USER_FAILED,
      error: error
    };
  };
  
  
  export const editUser = (user) => {
  return dispatch => {
    dispatch(editUserStart());
   
    axios
      .patch("/user/editUser/", user)
      .then(response => {
          console.log(response);
        dispatch(editUserSuccess(response.data));
      })
      .catch(error => {
          console.log(error.response);
        dispatch(editUserFailed(error.response.status));
      });
  };
  };
