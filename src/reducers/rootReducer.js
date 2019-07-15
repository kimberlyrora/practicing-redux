
import { ADD_ARTICLE } from "../constants/index";// let defaultState = {
//     examplePropOne: 'example',
//     examplePropTwo: 'test'
// };

// const reducers = (state = defaultState, action) => {
//     switch (action.type) {
//         case 'EXAMPLE':
//             return {
//                 ...state,
//                 examplePropOne: 'newPropOne'
//             }
//         case 'EXAMPLE-TWO':
//             return {
//                 ...state,
//                 examplePropTwo: action.payload
//             }
//         default: return state;
//     }
// }

// export default reducers;
// export default (state, action) => {
//     switch (action.type) {
//       case "rotate":
//         return {
//           rotating: action.payload
//         };
//       default:
//         return state;
//     }
//   };
const initialState = {
  articles: []
};
const rootReducer = (state = initialState, action) => {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles:
        state.articles.concat(action.payload)
    });
  }
  return state;
};
export default rootReducer;