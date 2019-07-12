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
export const rotateAction = (payload) => {
  return {
    type: "rotate",
    payload
  }
}
