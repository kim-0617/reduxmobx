const { createStore, compose, applyMiddleware } = require("redux");
const { composeWithDevTools } = require("redux-devtools-extension");
const reducer = require("./reducers");
const { logIn, logOut } = require("./action/user");
const { addPost } = require("./action/post");

const initialState = {
  user: {
    isLoggingIn: false,
    data: null,
  },
  posts: [],
};

const firstMiddleware = (store) => (dispatch) => (action) => {
  console.log("로깅", action);
  // 기능 추가
  dispatch(action); // dispatch
  // 기능 추가
};

const thunkMiddleware = (store) => (dispatch) => (action) => {
  if (typeof action === "function") {
    // 비동기
    return action(store.dispatch, store.getState());
  }
  return dispatch(action);
};

const enhancer = composeWithDevTools(
  applyMiddleware(firstMiddleware, thunkMiddleware)
);

const store = createStore(reducer, initialState, enhancer);

module.exports = store;
