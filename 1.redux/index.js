const { createStore, compose, applyMiddleware } = require("redux");
const reducer = require("./reducers");
const { logIn, logOut } = require("./action/user");
const { addPost } = require("./action/post");

initialState = {
  user: {
    isLoggingIn: false,
    data: null,
  },
  posts: [],
  comments: [],
  favorites: [],
  history: [],
  likes: [],
  followers: [],
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

const enhancer = compose(applyMiddleware(firstMiddleware, thunkMiddleware));

const store = createStore(reducer, initialState, enhancer);
store.subscribe(() => {
  console.log("\n\nchanged \n\n");
});

// console.log("initialState", store.getState());

store.dispatch(
  logIn({
    id: 1,
    name: "zerocho",
    admin: true,
  })
);
// console.log("login", store.getState());

// store.dispatch(
//   addPost({
//     id: 1,
//     userId: 1,
//     content: "안녕하세요 리덕스",
//   })
// );
// console.log("addpost", store.getState());

// store.dispatch(
//   addPost({
//     id: 2,
//     userId: 1,
//     content: "안녕하세요 리덕스22",
//   })
// );
// console.log("addpost2", store.getState());

// store.dispatch(logOut());

// console.log("logout", store.getState());
