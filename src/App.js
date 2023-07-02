import React, { useEffect, useState } from 'react';
import './App.css';
import InputContainer from './components/inputContainer';
import ListContainer from './components/listContainer';
import data from './data/data';

function App() {
  const [update, setUpdate] = useState(false);
  function toUpdate() { setUpdate(true) };

  useEffect(() => {
    localStorage.setItem('myData', JSON.stringify(data));
    setUpdate(false);
  }, [update]);

  return (
    <div className="App">
      <header className="App-header">
        <p>hello, {data.username}</p>
      </header>
      <body className="App-body">
        <InputContainer handleUpdate={toUpdate} />
        <ListContainer handleUpdate={toUpdate} />
      </body>
    </div>
  );
}

export default App;
