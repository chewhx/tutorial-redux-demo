const redux = require("redux");
const thunkMiddleWare = require("redux-thunk").default;
const axios = require("axios");
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;

const initalState = {
  loading: false,
  users: [],
  error: "",
};

const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST";
const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

const fetchUsersRequest = () => {
  return {
    type: FETCH_DATA_REQUEST,
  };
};

const fetchUsersSuccess = (data) => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: data,
  };
};

const fetchUsersFailure = (error) => {
  return {
    type: FETCH_DATA_FAILURE,
    payload: error,
  };
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
      break;
    case FETCH_DATA_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: "",
      };
      break;
    case FETCH_DATA_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
      break;

    default:
      state;
      break;
  }
};

const fetchUsers = () => (dispatch) => {
  // set loading to true:
  dispatch(fetchUsersRequest());
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      const users = res.data.map((user) => user.id);
      dispatch(fetchUsersSuccess(users));
    })
    .catch((error) => {
      dispatch(fetchUsersFailure(error.message));
    });
};

const store = createStore(reducer, applyMiddleware(thunkMiddleWare));
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(fetchUsers());
