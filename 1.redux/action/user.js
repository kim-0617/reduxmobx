// 비동기 action, function return
const logIn = (data) => {
  return (dispatch, getState) => {
    dispatch(logInRequest(data));
    setTimeout(() => {
      try {
        dispatch(
          logInSuccess({
            userId: 1,
            nickname: "zerocho",
          })
        );
      } catch (e) {
        dispatch(
          logInFailure({
            userId: 1,
            reason: e,
          })
        );
      }
    }, 2000);
  };
};

const logInRequest = (data) => {
  return {
    type: "LOG_IN_REQUEST",
    data,
  };
};

const logInSuccess = (data) => {
  return {
    type: "LOG_IN_SUCCESS",
    data,
  };
};

const logInFailure = (data) => {
  return {
    type: "LOG_IN_SUCCESS",
    data,
  };
};

// const logIn = (data) => {
//   return {
//     type: "LOG_IN",
//     data,
//   };
// };

const logOut = () => {
  return {
    type: "LOG_Out",
  };
};

module.exports = {
  logIn,
  logOut,
};
