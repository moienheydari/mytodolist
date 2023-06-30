import React from 'react';
import './App.css';
import InputContainer from './components/inputContainer';
import ListContainer from './components/listContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello you</p>
      </header>
      <body className="App-body">
        <InputContainer />
        <ListContainer />
      </body>
    </div>
  );
}

export default App;
