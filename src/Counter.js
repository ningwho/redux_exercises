import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';
import reducer from './Counter.reducer';

let store = Redux.createStore(reducer);

class Counter extends React.Component {
  equation(input){
    store.dispatch({
      type: 'init'
    })
  }

  render() {
    return (
      <div>
        <button onClick={() =>this.equation('subtract')}>-</button>
        {this.props.count}
        <button onClick={() => this.equation('add')}>+</button>
      </div>
    );
  }



function display() {
  ReactDOM.render(
    <Counter count={store.getState()}/>,
    document.getElementById('root')
  );
}

display();
store.subscribe(display);
