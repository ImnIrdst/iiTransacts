import React from 'react';
import './App.css';
import {RevolutScreen} from "./screens/revolut/RevolutScreen";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>iiTransactions</h1>
        <RevolutScreen/>
      </header>
    </div>
  );
}

export default App;
