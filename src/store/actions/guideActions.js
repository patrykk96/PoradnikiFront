import * as types from "../actions/actionTypes";
import axios from "axios";

export const addGuideStart = () => {
    return {
      type: types.ADD_GUIDE_START
    };
  };
  
  export const addGuideSuccess = response => {
    return {
      type: types.ADD_GUIDE_SUCCESS,
      response: response
    };
  };
  
  export const addGuideFailed = error => {
    return {
      type: types.ADD_GUIDE_FAILED,
      error: error
    };
  };
  
  export const addGuide = (guide) => {
    return dispatch => {
      dispatch(addGuideStart());
      axios
        .post("/guide/addGuide", guide)
        .then(response => {
            console.log(response);
          dispatch(addGuideSuccess(response.status));
        })
        .catch(error => {
            console.log(error.response);
          dispatch(addGuideFailed(error.response.status));
        });
    };
  };

  export const getGuidesStart = () => {
    return {
      type: types.GET_GUIDES_START
    };
  };
  
  export const getGuidesSuccess = response => {
    return {
      type: types.GET_GUIDES_SUCCESS,
      guides: response
    };
  };
  
  export const getGuidesFailed = error => {
    return {
      type: types.GET_GUIDES_FAILED,
      error: error
    };
  };
  

  export const getGuides = (userId, gameId) => {
  return dispatch => {
    dispatch(getGuidesStart());
    axios
      .get("/guide/getGuides/" + userId + "/" + gameId)
      .then(response => {
          console.log(response);
        dispatch(getGuidesSuccess(response.data.successResult.guides));
      })
      .catch(error => {
          console.log(error.response);
        dispatch(getGuidesFailed(error.response.status));
      });
  };
};

export const editGuideStart = () => {
  return {
    type: types.EDIT_GUIDE_START
  };
};

export const editGuideSuccess = response => {
  return {
    type: types.EDIT_GUIDE_SUCCESS,
    response: response
  };
};

export const editGuideFailed = error => {
  return {
    type: types.EDIT_GUIDE_FAILED,
    error: error
  };
};


export const editGuide = (guide) => {
return dispatch => {
  dispatch(editGuideStart());
  console.log(guide);

  axios
    .patch("/guide/updateGuide/" + guide.id, guide)
    .then(response => {
        console.log(response);
      dispatch(editGuideSuccess(response.data));
    })
    .catch(error => {
        console.log(error.response);
      dispatch(editGuideFailed(error.response.status));
    });
};
};

export const deleteGuideStart = () => {
  return {
    type: types.DELETE_GUIDE_START
  };
};

export const deleteGuideSuccess = response => {
  return {
    type: types.DELETE_GUIDE_SUCCESS,
    response: response
  };
};

export const deleteGuideFailed = error => {
  return {
    type: types.DELETE_GUIDE_FAILED,
    error: error
  };
};


export const deleteGuide = (id) => {
return dispatch => {
  dispatch(deleteGuideStart());
 
  axios
    .delete("/guide/deleteGuide/" + id)
    .then(response => {
        console.log(response);
      dispatch(deleteGuideSuccess(response.data));
    })
    .catch(error => {
        console.log(error.response);
      dispatch(deleteGuideFailed(error.response.status));
    });
};
};

export const getGuideStart = () => {
  return {
    type: types.GET_GUIDE_START
  };
};

export const getGuideSuccess = response => {
  return {
    type: types.GET_GUIDE_SUCCESS,
    guide: response
  };
};

export const getGuideFailed = error => {
  return {
    type: types.GET_GUIDE_FAILED,
    error: error
  };
};


export const getGuide = (guide) => {
return dispatch => {
  dispatch(getGuideStart());
  axios
    .get("/guide/getGuide/" + guide.id)
    .then(response => {
        console.log(response);
      dispatch(getGuideSuccess(response.data));
    })
    .catch(error => {
        console.log(error.response);
      dispatch(getGuideFailed(error.response.status));
    });
};
};

export const addGuideReviewStart = () => {
  return {
    type: types.ADD_GUIDEREVIEW_START
  };
};

export const addGuideReviewSuccess = response => {
  return {
    type: types.ADD_GUIDEREVIEW_SUCCESS,
    response: response
  };
};

export const addGuideReviewFailed = error => {
  return {
    type: types.ADD_GUIDEREVIEW_FAILED,
    error: error
  };
};

export const addGuideReview = (review) => {
  return dispatch => {
    dispatch(addGuideReviewStart());
    axios
      .post("/guide/addReview", review)
      .then(response => {
          console.log(response);
        dispatch(addGuideReviewSuccess(response.status));
      })
      .catch(error => {
          console.log(error.response);
        dispatch(addGuideReviewFailed(error.response.status));
      });
  };
};