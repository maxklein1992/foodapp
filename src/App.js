import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import UsageItems from "./UsageData";

function App() {

  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
