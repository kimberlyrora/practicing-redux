import { ADD_ARTICLE } from "../constants/index";
// export const exampleAction = () => (
//     {
//         type: 'EXAMPLE'
//     }
// )

// export const exampleActionTwo = ( sampleData ) => (
//     {
//         type: 'EXAMPLE-TWO',
//         payload: sampleData
//     }
// )
// CREADOR DE ACCIÓN
export const addArticle = (payload) => {
  return {
    type: ADD_ARTICLE,
    payload
  };
}
export default addArticle
