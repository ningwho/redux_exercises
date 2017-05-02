
const INITIAL_STATE = {
  currentIndex: 0,
  images: []
}

function reducer(state = INITIAL_STATE, action) {
  if(action.type === 'next') {
    let nextIndex = state.currentIndex + 1;
    if (nextIndex >= state.images.length) {
      nextIndex = 0;
    }
    return Object.assign({}, state, {
      currentIndex: nextIndex
    });
  }
  if (action.type === 'receive_images'){
    return Object.assign({}, state, {
      images: action.images
    });
  }
  if(action.type === 'previous') {

  }

  if(actiontype === 'select') {
    return
  }
  return state;
}


export default reducer;
