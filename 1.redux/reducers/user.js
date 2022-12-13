const initialState = {
  isLoggingIn: false,
  data: null,
};

const userReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...prevState,
        user: action.data,
        isLoggingIn: true,
      };

    case "LOG_Out":
      return {
        isLoggingIn: false,
        data: null,
      };
    default:
      return {
        ...prevState,
      };
  }
};

module.exports = userReducer;
