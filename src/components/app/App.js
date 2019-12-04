import React from 'react';
import './App.css';

import Header from '../header';
import SearchSection from '../search-section';
function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <SearchSection />
      </div>
    </div>
  );
}

export default App;
