import React from 'react';
import './App.css';
// import $ from 'jquery';
import * as d3 from 'd3';
import importedCsvData from '../assets/players.csv';
import Images from'../Images';
import BasketballButton from "../assets/images/basketball-button.png";
import PlayerCard from './PlayerCard';


class App extends React.Component {
  
  constructor(props) {
    super(props)
    console.log(this.props);
    this.state = {
        data: null //This is what our data will eventually be loaded into
    };

    
}

loadData() {
    setTimeout(()=> {
      if(Images){
        this.setState({
          data: Images,
      });
      }
        
        
    }, 100);
    
}

componentDidMount() {  //this and loadData are to make sure all data loaded before rendering component in App
    this.loadData(); 
    
}



  ds3 = d3.csv(importedCsvData).then(function(data) {
    data.forEach(function(d) {
      d.Rk = + d.Rk;
      d.TRB = +d.TRB;
      d.AST = +d.AST;
      d.STL = +d.STL;
      d.BLK = +d.BLK;
      d.TOV = +d.TOV;
      d.PTS = +d.PTS;
      d.TSP = +d.TSP;

    }) 
    
      for (var i = 0; i < data.length; i++) {
        for (var y = 0; y < Images.length; y++) {
          if (data[i].Rk === Images[y].id) {
            Object.assign(Images[y], data[i]); //merges 2nd param into first
          }
        }
      }  
   
  });

  handleBasketballButton =  () => {
    this.setState({data: Images});
  }
  
  
  render(){
    if (!this.state.data) {
      return <div>...loading</div>
  }
  
  

    return (
      <div> 
  
        <div className="basketball-container"> 
        <img className="basketball" src={BasketballButton} onClick={this.handleBasketballButton} alt="click this basketball button get a new matchup"/>
        </div>
        
      
        <div className="cards-container">
          
          
        <PlayerCard data={this.state.data}>
            <div>test</div>
            
          </PlayerCard>

        <PlayerCard data={this.state.data}>
        
         
        </PlayerCard>
          
          
          </div>
  
      </div>
      
    )
  }
  
}

export default App;


