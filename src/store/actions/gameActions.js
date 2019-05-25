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

export const editGameStart = () => {
  return {
    type: types.EDIT_GAME_START
  };
};

export const editGameSuccess = response => {
  return {
    type: types.EDIT_GAME_SUCCESS,
    response: response
  };
};

export const editGameFailed = error => {
  return {
    type: types.EDIT_GAME_FAILED,
    error: error
  };
};


export const editGame = (game) => {
return dispatch => {
  dispatch(editGameStart());
  console.log(game);
  const formDataFile = new FormData();
  formDataFile.append("Image" , game.image);

  axios
    .patch("/game/updateGame/" + game.id + "/" + game.name + "/" + game.description, (formDataFile))
    .then(response => {
        console.log(response);
      dispatch(editGameSuccess(response.data));
    })
    .catch(error => {
        console.log(error.response);
      dispatch(editGameFailed(error.response.status));
    });
};
};

export const deleteGameStart = () => {
  return {
    type: types.DELETE_GAME_START
  };
};

export const deleteGameSuccess = response => {
  return {
    type: types.DELETE_GAME_SUCCESS,
    response: response
  };
};

export const deleteGameFailed = error => {
  return {
    type: types.DELETE_GAME_FAILED,
    error: error
  };
};


export const deleteGame = (id) => {
return dispatch => {
  dispatch(deleteGameStart());
 
  axios
    .delete("/game/deleteGame/" + id)
    .then(response => {
        console.log(response);
      dispatch(deleteGameSuccess(response.data));
    })
    .catch(error => {
        console.log(error.response);
      dispatch(deleteGameFailed(error.response.status));
    });
};
};

export const getGameStart = () => {
  return {
    type: types.GET_GAME_START
  };
};

export const getGameSuccess = response => {
  return {
    type: types.GET_GAME_SUCCESS,
    game: response
  };
};

export const getGameFailed = error => {
  return {
    type: types.GET_GAME_FAILED,
    error: error
  };
};


export const getGame = (game) => {
return dispatch => {
  dispatch(getGameStart());
  axios
    .get("/game/getGame/" + game.id)
    .then(response => {
        console.log(response);
      dispatch(getGameSuccess(response.data));
    })
    .catch(error => {
        console.log(error.response);
      dispatch(getGameFailed(error.response.status));
    });
};
};

export const addGameReviewStart = () => {
  return {
    type: types.ADD_GAMEREVIEW_START
  };
};

export const addGameReviewSuccess = response => {
  return {
    type: types.ADD_GAMEREVIEW_SUCCESS,
    response: response
  };
};

export const addGameReviewFailed = error => {
  return {
    type: types.ADD_GAMEREVIEW_FAILED,
    error: error
  };
};

export const addGameReview = (review) => {
  return dispatch => {
    dispatch(addGameReviewStart());
    console.log(review);
    axios
      .post("/game/addReview", review)
      .then(response => {
          console.log(response);
        dispatch(addGameReviewSuccess(response.status));
      })
      .catch(error => {
          console.log(error.response);
        dispatch(addGameReviewFailed(error.response.status));
      });
  };
};