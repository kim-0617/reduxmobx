const initialState = [];

const postReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case "ADD_POST":
      return [action.data, ...prevState];
    default:
      return [...prevState];
  }
};

module.exports = postReducer;
