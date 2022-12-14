const { configureStore, getDefaultMiddleware } = require("@reduxjs/toolkit");

const reducer = require("./reducers");

const firstMiddleware = (store) => (dispatch) => (action) => {
  console.log("로깅", action);
  // 기능 추가
  dispatch(action); // dispatch
  // 기능 추가
};

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(firstMiddleware),
  devTools: true,
});

module.exports = store;
