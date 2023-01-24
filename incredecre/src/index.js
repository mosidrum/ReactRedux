import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const increment = () =>
  ({type: 'increment'})

const decrement = () =>
  ({type: 'decrement'})

const Counter= () =>{

    return (
    <div>
      <button className='increment'>Increment</button>
      <button className='decrement'>Decrement</button>
      Current Count: <span>0</span>
    </div>
    );

}


const WrappedCounter = ReactRedux.connect()(Counter)

ReactDOM.render(<Counter />, document.querySelector('#root'));