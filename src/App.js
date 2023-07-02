import React, { useEffect, useState } from 'react';
import './App.css';
import InputContainer from './components/inputContainer';
import ListContainer from './components/listContainer';
import data from './data/data';

function App() {
  const [update, setUpdate] = useState(false);
  function toUpdate() {
    alert('there1');
    setUpdate(true);
  };

  useEffect(() => {
    localStorage.setItem('myData', JSON.stringify(data));
    alert('there');
    setUpdate(false);
  }, [update]);

  return (
    <div className="App">
      <header className="App-header">
        <p>{JSON.stringify(data, '', 2)}</p>
      </header>
      <body className="App-body">
        <InputContainer handleUpdate={toUpdate} />
        <ListContainer handleUpdate={toUpdate} />
      </body>
    </div>
  );
}

export default App;
