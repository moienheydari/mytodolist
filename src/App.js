import React, { createContext, useEffect, useState } from 'react';
import './css/App.min.css';
import InputContainer from './components/inputContainer';
import ListContainer from './components/listContainer';
import UsernameContainer from './components/usernameContainer';

export const DataContx = createContext(null);

function App() {
  const [localData, setLocalData] = useState(localStorage.getItem('myData') ? JSON.parse(localStorage.getItem('myData')) : {
    username: 'No One',
    tasks: []
  })
  const [pressed, setPressed] = useState(false);
  const [editphase, setEditphase] = useState(false);

  useEffect(() => {
    localStorage.setItem('myData', JSON.stringify(localData));
  }, [localData]);

  return (
    <div className="App">
      <header className="App-header">
        <p>Hello, {localData.username}!</p>
      </header>
      <DataContx.Provider value={{ data: localData, setData: (e)=>{setLocalData(e);} }}>
        <body className="App-body">
          <UsernameContainer pressed={pressed} editphase={editphase} setPressed={setPressed} />
          <div className={`all-task ${(pressed || editphase) ? 'hidden' : ''}`}>
            <InputContainer pressed={pressed} editphase={editphase} />
            <ListContainer pressed={pressed} editphase={editphase} setEditphase={setEditphase} />
          </div>
        </body>
      </DataContx.Provider>
    </div>
  );
}

export default App;
