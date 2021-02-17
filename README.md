# [React-Redux Tutorial by Codevolution](https://www.youtube.com/playlist?list=PLC3y8-rFHvwheJHvseC3I0HuYI2f46oAK) 


[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/9boMnm5X9ak/0.jpg)](https://www.youtube.com/playlist?list=PLC3y8-rFHvwheJHvseC3I0HuYI2f46oAK)

# Core Concepts (Cake Shop Analogy)

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