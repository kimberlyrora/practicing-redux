// let defaultState = {
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
export default (state, action) => {
    switch (action.type) {
      case "rotate":
        return {
          rotating: action.payload
        };
      default:
        return state;
    }
  };