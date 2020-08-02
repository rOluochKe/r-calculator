import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import '../styles/index.css';

function App() {
  return (
    <div className="App" id="app-id">
      <Display result="" />
      <ButtonPanel />
    </div>
  );
}

export default App;
