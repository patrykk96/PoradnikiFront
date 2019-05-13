import * as types from "../actions/actionTypes";
import axios from "axios";

export const registerStart = () => {
    return {
      type: types.REGISTER_START
    };
  };
  
  export const registerSuccess = response => {
    return {
      type: types.REGISTER_SUCCESS,
      response: response
    };
  };
  
  export const registerFailed = error => {
    return {
      type: types.REGISTER_FAILED,
      error: error
    };
  };
  
  export const register = user => {
    return dispatch => {
      dispatch(registerStart());
  
      const authData = {
        email: user.email,
        username: user.username,
        password: user.password,
      };
      
      axios
        .post("/auth/register", JSON.stringify(authData), {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          }
        })
        .then(response => {
          dispatch(registerSuccess(response.status));
        })
        .catch(error => {
          dispatch(registerFailed(error.response.data.error));
        });
    };
  };

  export const loginStart = () => {
    return {
      type: types.LOGIN_START
    };
  };
  
  export const loginSuccess = token => {
    return {
      type: types.LOGIN_SUCCESS,
      token: token
    };
  };
  
  export const loginFailed = error => {
    return {
      type: types.LOGIN_FAILED,
      error: error
    };
  };
  
  export const login = user => {
    return dispatch => {
      dispatch(loginStart());
  
      const authData = {
        username: user.username,
        password: user.password
      };
  
      axios
        .post("/auth/login", JSON.stringify(authData))
        .then(response => {
          localStorage.setItem("token", response.data.successResult.token);
          localStorage.setItem("username", user.username);
          dispatch(loginSuccess(response.data.successResult.token));
        })
        .catch(error => {
          dispatch(loginFailed(error.response.data));
        });
    };
  };
  
  
  export const logout = () => {
    localStorage.clear();
    return {
      type: types.LOGOUT
    };
  };
  
  export const confirmAccountStart = () => {
    return {
      type: types.CONFIRM_ACCOUNT_START
    };
  };
  
  export const confirmAccountSuccess = response => {
    return {
      type: types.CONFIRM_ACCOUNT_SUCCESS,
      confirmAccount: response
    };
  };
  
  export const confirmAccountFailed = error => {
    return {
      type: types.CONFIRM_ACCOUNT_FAILED,
      confirmAccount: error
    };
  };
  
  export const confirmAccount = (username, code) => {
    return dispatch => {
      dispatch(confirmAccountStart());
      axios
        .post("auth/confirmEmail/" + username + "/" + code, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          }
        })
        .then(response => {
          dispatch(confirmAccountSuccess(response.status));
        })
        .catch(error => {
          dispatch(confirmAccountFailed(error.response.status));
        });
    };
  };
  
  export const resetPasswordStart = () => {
    return {
      type: types.RESET_PASSWORD_START
    };
  };
  
  export const resetPasswordSuccess = response => {
    return {
      type: types.RESET_PASSWORD_SUCCESS,
      resetPassword: response
    };
  };
  
  export const resetPasswordFailed = error => {
    return {
      type: types.RESET_PASSWORD_FAILED,
      resetPassword: error
    };
  };
  
  export const resetPassword = (email) => {
    return dispatch => {
      dispatch(resetPasswordStart());
      axios
        .post("auth/resetPassword/" + email, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          }
        })
        .then(response => {
          dispatch(resetPasswordSuccess(response.status));
        })
        .catch(error => {
          dispatch(resetPasswordFailed(error.response.data.error));
        });
    };
  };

  export const changePasswordStart = () => {
    return {
      type: types.CHANGE_PASSWORD_START
    };
  };
  
  export const changePasswordSuccess = response => {
    return {
      type: types.CHANGE_PASSWORD_SUCCESS,
      changePasswordResult: response
    };
  };
  
  export const changePasswordFailed = error => {
    return {
      type: types.CHANGE_PASSWORD_FAILED,
      changePasswordResult: error
    };
  };
  
  export const changePassword = (username, code, newPassword) => {

    return dispatch => {
      dispatch(changePasswordStart());
      axios
        .post("auth/setNewPassword/" + username + "/" + code + "/" + newPassword, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          }
        })
        .then(response => {
          dispatch(changePasswordSuccess(response.status));
        })
        .catch(error => {
          dispatch(changePasswordFailed(error.response.data.error));
        });
    };
  };

  export const resetErrors = () => {
    return {
      type: types.RESET_ERRORS
    };
  };