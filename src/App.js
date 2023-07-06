import React, { useEffect, useState } from 'react';
import './css/App.min.css';
import InputContainer from './components/inputContainer';
import ListContainer from './components/listContainer';
import data from './data/data';
import UsernameContainer from './components/usernameContainer';

function App() {
  const [update, setUpdate] = useState(false);
  const [pressed, setPressed] = useState(false);
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
        <UsernameContainer handleUpdate={toUpdate} pressed={pressed} setPressed={setPressed}/>
        <InputContainer handleUpdate={toUpdate} pressed={pressed}/>
        <ListContainer handleUpdate={toUpdate} pressed={pressed}/>
      </body>
    </div>
  );
}

export default App;
