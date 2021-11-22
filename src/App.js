import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import LatestRestaurants from './components/LatestRestaurants';
import MenuCategories from './components/MenuCategories';
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {

  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/">
            <LatestRestaurants />
            <MenuCategories />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
