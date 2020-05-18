import React from 'react';
import './App.css';
import * as d3 from 'd3';
import importedCsvData from './players.csv';


const App = () => {
  


  d3.csv(importedCsvData).then(function(data) {
    data.forEach(function(d) {
      d.TRB = +d.TRB;
      d.AST = +d.AST;
      d.STL = +d.STL;
      d.BLK = +d.BLK;
      d.TOV = +d.TOV;
      d.PTS = +d.PTS;
      d.TSP = +d.TSP;

    }) 
    console.log(data[20]);
  });
  
  return (
    <div></div>

  )
}

export default App;


