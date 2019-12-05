import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Header from '../header';
import Dashboard from '../dashboard';
import Score from '../score';

function App() {
  return (
    <div className="App">
      <div>
        <Header/>
        <BrowserRouter>
          <div className="mt-3">
            <Switch>
              <Route path="/" exact component={Dashboard}/>
              <Route path="/result" exact component={Score}/>
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
