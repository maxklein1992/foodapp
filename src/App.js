import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import UsageItems from "./UsageData";

function App() {

  const [ rows, setRows] = useState([]);

  console.log(rows)

  const [ totalCost, setTotalCost ] = useState([]);

  const convertToTotalCost = array => {

      for (var i = 0; i < array.length - 1; i++) {
          var diff = array[i + 1].reading - array[i].reading;
          if(diff <= 100 && diff >= 0)
              array[i].usage = diff; 
          else{
              array[i].usage = ((array[i + 2].reading - array[i + 1].reading) + (array[i].reading - array[i - 1].reading)) / 2;
          }                    
      }
              
      array.splice(-1,1);  

      
      for (var k = 0; k < array.length; k++) {

          const date = new Date(array[k].createdAt*1000);
          array[k].time = date;

          array[k].weekday = date.getDay();
          if(array[k].weekDay === 6 || array[k].weekDay === 7)
          {
              array[k].isWeekend = 1;
          }
          else
          {
              array[k].isWeekend = 0
          }

          array[k].hour = date.getHours();
          if(array[k].hour >= 7 && array[k].hour <= 23)
          {
              array[k].isDayTime = 1;
          }
          else
          {
              array[k].isDayTime = 0
          }
      }

      for (var j = 0; j < array.length; j++) {
          if(array[j].type === 2)
          {
              array[j].usage = array[j].usage * 9.769;
              array[j].cost = array[j].usage * 0.06;
          }
          else if(array[j].type === 1 && array[j].isDaytime === 1 && array[j].isWeekend === 0) {
              array[j].usage = array[j].usage / 1000;
              array[j].cost = array[j].usage * 0.20;
          }
          else{
              array[j].usage = array[j].usage / 1000;
              array[j].cost = array[j].usage * 0.18;                
          }
      }      

      var sumValues =  array.reduce(function(final,item){
          if(final[item.meteringsPointId]){
            final[item.meteringsPointId] = {meteringsPointId: item.meteringsPointId, type: item.type, cost: item.cost+final[item.meteringsPointId].cost, reading: item.reading};
          }else{
            final[item.meteringsPointId] = {meteringsPointId: item.meteringsPointId, type: item.type, cost: item.cost, reading: item.reading};
          }
        return final;
        },{});
      var new_data = Object.values(sumValues);
  
      return new_data; 

  };

  useEffect(() => {

    const results = [
      { meteringsPointId: 1, type: 1, reading: 166606, createdAt: 1415963700 },
      { meteringsPointId: 1, type: 1, reading: 166694, createdAt: 1415964600 },
      { meteringsPointId: 1, type: 1, reading: 166714, createdAt: 1415965500
      },
      //{ meteringsPointId: 2, type: 1, reading: 166754, createdAt: ///1415966400
      //},
    ];      

    const totalCostRows = convertToTotalCost(results);

    setRows(totalCostRows);

    const totalCost = results.reduce((a,v) =>  a = a + v.cost , 0 );

    setTotalCost(totalCost);

  }, []);


  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/">
            <Home 
              rows={rows}
              totalCost={totalCost}          
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
