import React from 'react';
import './App.css';
import * as d3 from 'd3';
import importedCsvData from './players.csv';


const App = () => {
  
  


  d3.csv(importedCsvData, function(data){
    
    console.log(data);
});
    
  
  return (
    <div></div>

  )
}

export default App;
