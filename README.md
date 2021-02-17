# [React-Redux Tutorial by Codevolution](https://www.youtube.com/playlist?list=PLC3y8-rFHvwheJHvseC3I0HuYI2f46oAK) 


[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/9boMnm5X9ak/0.jpg)](https://www.youtube.com/playlist?list=PLC3y8-rFHvwheJHvseC3I0HuYI2f46oAK)

# Core Concepts (Cake Shop Analogy)

NPM Packages:
- [x] redux

Cake Shop Analogy | Redux Concepts | Purpose 
------------ | ------------- | --------
SHOP | store.js | Holds the state of application
BUY CAKE | action.js | Describes the various actions which can be taken
SHOPKEEPER | reducer.js | Execute the change of state based on action and update store.js

- **store** holds the state of application
- **action** describes the changes in the state of the application
- **reducer** carries out the state transition depending on the action

# Three Principles

1. state of whole applicaiton is stored in an object tree in a single store.js
2. to update or change a state by dispatching an action/object which describes what happens
3. pure functions (reducers) to change the state

# Reducers
- function which accepts (1) state and (2) arguments, and return the change in state

# Store
- only one store in an application
- allows access to state via `getState()`
- allows state to be updated via `dispatch(action)`
- registers listeners via `subscribe(listener)`
- unregister listeners via function returned by `subscribe(listener)`

# Multiple reducers
Creating multiple reducers to simulate multiple shopkeepers handle different kinds of products or states.

# Combining reducers
- send all reducers to the store for execution

```javascript
const combineReducers = redux.combineReducers
...
const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

const store = createStore(rootReducer);

```

# Middleware
NPM Packages:
- [x] redux-logger


- extend redux with custom functions between dispatching an action and when it reduces the reducer
- use middleware for logging, crash reporting, perform async tasks

# Async Actions - fetching data from API to store in state

## State

``` javascript
state = {
  loading: true,
  data: [],
  error: "",
}
```

loading: displays a loading spinner
data: stores the data
error: display error message to the user

## Actions
``` javascript
 const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST"
 const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS"
 const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE"
```
- FETCH_DATA_REQUEST - fetch list of data
- FETCH_DATA_SUCCESS - fetch is successful
- FETCH_DATA_FAILURE - error fetching the data

## Reducers (the different cases for Actions)
``` javascript
 case FETCH_DATA_REQUEST:
    return {loading: true}
 case FETCH_DATA_SUCCESS:
   return {loading: false, users: ["data from API"]}
 case FETCH_DATA_FAILURE:
   return {loading: false, error: ["error from API]}
```

# Async action creators
NPM Packages:
- [x] axios - make api request 
- [x] redux-thunk - define async action creators, middleware

- make API call from jsonplaceholder
- and return the data or error depending on request results