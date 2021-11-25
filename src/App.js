import React, { useState, useEffect } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './components/pages/HomePage/Home';
import Restaurants from './components/pages/RestaurantsPage/Restaurants';
import RestaurantDetail from './components/pages/RestaurantDetail/RestaurantDetail';

function App() {

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/restaurants" exact component={Restaurants} />
          <Route path="/restaurants/:id" exact component={RestaurantDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
