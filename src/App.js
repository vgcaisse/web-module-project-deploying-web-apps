import logo from './logo.svg';
import './App.css';
import React from 'react';

const initialValue = {
  counter: 0 
}

const handleAdd = () => {
  console.log('clicked')
}
const handleSub = () => {
  console.log('clicked')
}


console.log(initialValue)


function App(props) {
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>Counter is at: {props.counter}</div>
        <button onClick={handleAdd}>Add 1!</button>
        <button onClick={handleSub}>Subract 1!</button>
      </header>
    </div>
  );
}

export default App;
