import logo from './logo.svg';
import './App.css';
import React from 'react';

const initialValue = {
  counter: 0 
}

const handleAdd = () => {
  console.log('clicked')
  return initialValue.counter + 1 
}
const handleSub = () => {
  return initialValue + 1 
}


console.log(initialValue)


function App(props) {
  const { counter, initialValue } = props;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>Counter is at: {counter}</div>
        <button onClick={handleAdd}>Add 1!</button>
        <button onClick={handleSub}>Subract 1!</button>
      </header>
    </div>
  );
}

export default App;
