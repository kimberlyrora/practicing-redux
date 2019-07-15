// import { createStore, combineReducers } from 'redux';
// import reducers from '../reducers/rotateReducer.js/index.js';
// export const store = createStore(
//     combineReducers({
//         state: reducers
//     }),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

import { createStore } from "redux";
import rootReducer from "..//reducers/rootReducer";

const store =  createStore(rootReducer);

// function configureStore(state = { rotating: true }) {
//   return createStore(rotateReducer,state);
// }

export default store;