import React from 'react';
import './App.css';
import {RevolutScreen} from "./screens/revolut/RevolutScreen";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className={"Title"}>iiTransactions</h1>
      </header>
    <section>
        <RevolutScreen/>
    </section>
    </div>
  );
}

export default App;
