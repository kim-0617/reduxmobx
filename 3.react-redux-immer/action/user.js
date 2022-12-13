const logIn = (data) => {
  // async action creator
  return (dispatch, getState) => {
    // async action
    dispatch(logInRequest());
    try {
      setTimeout(() => {
        dispatch(logInSuccess(data));
      }, 2000);
      // axios.post().then().catch()으로 나중에 대체
    } catch (e) {
      dispatch(logInFailure(e));
    }
  };
};

const logInRequest = () => {
  return {
    type: "LOG_IN_REQUEST",
  };
};

const logInSuccess = (data) => {
  return {
    type: "LOG_IN_SUCCESS",
    data,
  };
};

const logInFailure = (error) => {
  return {
    type: "LOG_IN_FAILURE",
    error,
  };
};

const logOut = () => {
  return {
    // action
    type: "LOG_OUT",
  };
};

module.exports = {
  logIn,
  logOut,
};
