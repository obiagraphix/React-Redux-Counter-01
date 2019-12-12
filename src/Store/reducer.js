const initialState = {
  counter: 0,
  results: []
};
const reducer = (state = initialState, action) => {
  if (action.type === "INCREMENT") {
    const newState = Object.assign({}, state);
    newState.counter = state.counter + 1;
    return newState;
  }

  if (action.type === "DECREMENT") {
    return {
      ...state,
      counter: state.counter + action.val
    };
  }

  if (action.type === "ADD") {
    return {
      ...state,
      counter: state.counter + action.val
    };
  }

  if (action.type === "SUBSTRACT") {
    return {
      ...state,
      counter: state.counter - action.val
    };
  }

  if (action.type === "STORE_RESULT") {
    return {
      ...state,
      results: state.results.concat({ id: new Date(), value: state.counter })
    };
  }
  return state;
};

export default reducer;
