import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

import '../styles/index.css';

function App() {
  return (
    <div className="content">
      <div className="app" id="app-id">
        <Display result="0" display="display" />
        <ButtonPanel className="calc-btns" />
      </div>
    </div>
  );
}

export default App;
