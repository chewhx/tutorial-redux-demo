const redux = require("redux");
const createStore = redux.createStore ;

// Constant

const BUY_CAKE = "BUY_CAKE";

// Action

// {
//   type: BUY_CAKE,
//   info: "First redux action",
// }

// Action Creator - a function that returns an action

function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First redux action",
  };
}

// Reducer
// (previousState, action) => newState

const initialState = {
  numOfCakes: 10,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state, // create a copy of state to retain the other values inside
        numOfCakes: state.numOfCakes - 1,
      };

    default:
      return state;
  }
};

// Store

// holds application state
const store = createStore(reducer);

// allows access to state via `getState()`
console.log("Initial state", store.getState());

//- registers listeners via `subscribe(listener)`
// - unregister listeners via function returned by `subscribe(listener)`
const unsubscribe = store.subscribe(() =>
  console.log("Updated state", store.getState())
);

// - allows state to be updated via `dispatch(action)`
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
unsubscribe();
