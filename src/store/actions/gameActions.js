import * as types from "../actions/actionTypes";
import axios from "axios";

export const addGameStart = () => {
    return {
      type: types.ADD_GAME_START
    };
  };
  
  export const addGameSuccess = response => {
    return {
      type: types.ADD_GAME_SUCCESS,
      response: response
    };
  };
  
  export const addGameFailed = error => {
    return {
      type: types.ADD_GAME_FAILED,
      error: error
    };
  };
  
  export const addGame = (game) => {
    return dispatch => {
      dispatch(addGameStart());
      axios
        .post("/game/addGame/" + game.name + "/" + game.description, game.image)
        .then(response => {
            console.log(response);
          dispatch(addGameSuccess(response.status));
        })
        .catch(error => {
            console.log(error.response);
          dispatch(addGameFailed(error.response.status));
        });
    };
  };

  export const getGamesStart = () => {
    return {
      type: types.GET_GAMES_START
    };
  };
  
  export const getGamesSuccess = response => {
    return {
      type: types.GET_GAMES_SUCCESS,
      games: response
    };
  };
  
  export const getGamesFailed = error => {
    return {
      type: types.GET_GAMES_FAILED,
      error: error
    };
  };
  

  export const getGames = () => {
  return dispatch => {
    dispatch(getGamesStart());
    axios
      .get("/game/getGames")
      .then(response => {
          console.log(response);
        dispatch(getGamesSuccess(response.data.successResult.list));
      })
      .catch(error => {
          console.log(error.response);
        dispatch(getGamesFailed(error.response.status));
      });
  };
};

