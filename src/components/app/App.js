import React from 'react';
import './App.css';

import Header from '../header';
import GifSection from '../gif-section';
function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <GifSection />
      </div>
    </div>
  );
}

export default App;
