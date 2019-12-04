import React from 'react';
import './App.css';

import Header from '../header';
import Dashboard from '../dashboard';
function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
