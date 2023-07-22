import React, { useEffect, useRef, useState } from 'react';
import './css/App.min.css';
import InputContainer from './components/inputContainer';
import ListContainer from './components/listContainer';
import UsernameContainer from './components/usernameContainer';

function App() {
  const [update, setUpdate] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [editphase, setEditphase] = useState(false);
  const localData = useRef(localStorage.getItem('myData') ? JSON.parse(localStorage.getItem('myData')) : {
    username: 'No One',
    tasks: []
  });

  function toUpdate() { setUpdate((prev) => { return !prev; }) };

  useEffect(() => {
    localStorage.setItem('myData', JSON.stringify(localData.current));
    setUpdate((prev) => { return !prev; });
  }, [update]);



  return (
    <div className="App">
      <header className="App-header">
        <p>{JSON.stringify(localData.current)}</p>
      </header>
      <body className="App-body">
        <UsernameContainer data={localData.current} handleUpdate={toUpdate} pressed={pressed} editphase={editphase} setPressed={setPressed} />
        <div className={`all-task ${(pressed || editphase) ? 'hidden' : ''}`}>
          <InputContainer data={localData.current} handleUpdate={toUpdate} pressed={pressed} editphase={editphase} />
          <ListContainer data={localData.current} handleUpdate={toUpdate} pressed={pressed} editphase={editphase} setEditphase={setEditphase} />
        </div>
      </body>
    </div>
  );
}

export default App;
