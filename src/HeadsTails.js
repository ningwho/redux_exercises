import React from 'react';
import ReactDOM from 'react-dom';
import reducer from './HeadsTails.reducer';
import * as Redux from 'redux';

// Add code to create a store
let store = Redux.createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class HeadsTails extends React.Component {
  render() {
    let value = 0.6;
    let coinDisplay;
    let flip = () => store.dispatch({type: 'flip', flipResult: Math.random()});

    if (value) {
      let imageUrl = this.props.values;
      coinDisplay = <img src={imageUrl}/>;
    }
    return (
      <div>
        {coinDisplay}
        <button onClick={flip}>
          Flip!
        </button>
      </div>
    );
  }
}

// Wrap this in a display function, and subscribe to store's state
// changes and re-display
function display(){
  ReactDOM.render(<HeadsTails values={store.getState()}/>,  document.getElementById('root')
  );
}

store.subscribe(display);
display();
