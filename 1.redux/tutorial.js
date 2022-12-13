const { createStore } = require("redux");

const reducer = (prevState, action) => {
  switch (action.type) {
    case "CHANGE_COMP_A":
      return {
        ...prevState,
        compA: action.data,
      };
    default:
      return {
        ...prevState,
      };
  }
};

initialState = {
  compA: "a",
  compB: 12,
  compC: null,
};

const store = createStore(reducer, initialState);
store.subscribe(() => {
  console.log("changed");
});

// action
const changeCompA = (data) => {
  return {
    type: "CHANGE_COMP_A",
    data,
  };
};

console.log(store.getState());

store.dispatch(changeCompA("b"));

console.log(store.getState());
