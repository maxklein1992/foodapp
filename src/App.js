import React, { useState, useEffect } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './components/pages/HomePage/Home';
import Restaurants from './components/pages/RestaurantsPage/Restaurants';

function App() {

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/restaurants" exact component={Restaurants} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
