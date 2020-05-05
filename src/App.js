import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import GetData from './components/GetData';

function App() {
  return (
    <div className="App">
      <div className="app-area">
        <GetData action={'data'} />
        <GetData action={'loading'} />
        <GetData action={'error'} />
      </div>
    </div>
  );
}

export default App;
