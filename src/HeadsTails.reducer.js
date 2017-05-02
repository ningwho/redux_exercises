// Do not generate a random number in this function!
// That would violate the purity of this function.
// Generate a random number and then dispatch it as
// an action.
function reducer(state = 'images/quarter-front.png', action) {
  if(action.type === 'flip') {
    console.log(state);
    console.log(action.flipResult);
    let value = action.flipResult > 0.5 ?
      'images/quarter-front.png' :
      'images/quarter-back.png';
    return value;
  }
  return state;
}

export default reducer;
