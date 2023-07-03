import React, { useEffect, useState } from 'react';
import './App.css';
import InputContainer from './components/inputContainer';
import ListContainer from './components/listContainer';
import data from './data/data';
import UsernameContainer from './components/usernameContainer';

function App() {
  const [update, setUpdate] = useState(false);
  function toUpdate () {setUpdate((prev)=>{return !prev;})};

  useEffect(()=>{
    setUpdate((prev)=>{return !prev;});
  }, [update]);

  return (
    <div className="App">
      <header className="App-header">
        <p>Hello, {data.username}!</p>
      </header>
      <body className="App-body">
        <InputContainer handleUpdate={toUpdate}/>
        <ListContainer handleUpdate={toUpdate}/>
        <UsernameContainer />
      </body>
    </div>
  );
}

export default App;
