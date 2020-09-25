import React from 'react';
import './App.css';
// import $ from 'jquery';
import * as d3 from 'd3';
import importedCsvData from '../assets/players.csv';
import Images from'../Images';
import BasketballButton from "../assets/images/basketball-button.png";
import PlayerCard from './PlayerCard';
// import Scoreboard from './Scoreboard'; // prob gonna just get rid of this and component

// working on... 
//1. why setState before alert in PlayerCard not working and causing multiple animations?
// 2. get scorebard working * add state count to playerCard???
//3. make sure doesn't add two to scorecard since two playerCards
// 4.drop shadow on monitor and cards?
//5. update cards on alert ok, then compare stats when click juump ball

let varForBasketballButton = 0; // global so handleBaskeballButton can acces and doesn't reset when updated


class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
        data: null,
        // hasMounted: false //I don't think this is doign anything??????......
    };
    // console.log(this.state.hasMounted);
}

componentDidMount() { 

  let self = this;
  d3.csv(importedCsvData).then(function(data) {
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

   self.setState({ data: Images });

  }); 
  console.log('mounted');
}




componentDidUpdate() {
  console.log("app updated");
}


handleBasketballButton =  () => {
  //sets state only first time 
  while(varForBasketballButton < 1) {
    this.setState({data: Images});
    varForBasketballButton ++;
  };
  
  let statsParagraphElements = document.querySelectorAll(".stats-paragraph");
  (function _removeClasses() {
    for (var i = 0; i < statsParagraphElements.length; i++) {
      statsParagraphElements[i].classList.remove('animation')
    }
  }());
}

//so one of customalerts not show below...
handleAlerts = () => {
  let firstAlert = document.getElementsByClassName('customAlert')[1]; //actually second alert

  if(firstAlert !== undefined) {
    firstAlert.parentNode.removeChild(firstAlert);
  };
}

newPlayersOnAlert = () => {
  this.setState({ data: Images });
  console.log("new Players");
}

  
  render(){
   
    console.log("app render");
    const random = Math.floor(Math.random() * Images.length); 
    const randomTwo = Math.floor(Math.random() * Images.length);
    

    if(random === randomTwo) { 
      this.setState({ data: Images })
    } 
    


    if (!this.state.data) {
      return  <div className="loading-container" id="test"> 
                <p className="loading-text">Loading...</p>
             </div>
  }


  

    return (
      <div > 
 
        <div className="basketball-container"> 
        <img className="basketball" src={BasketballButton} onClick={this.handleBasketballButton } alt="click this basketball button to get a new matchup"/>
        </div>
        
      
        <div className="cards-container" tabIndex= "-1">
          
          
        <PlayerCard render={this.handleAlerts()} data={this.state.data} newPlayersOnAlert={this.newPlayersOnAlert} >
        
                <div className="name-container">{this.state.data[random].Player}<span className="year">{this.state.data[random].Season}</span></div>
                <div className="player-image-container">
                    <img className="player-image" src= {this.state.data[random].src} alt = {this.state.data[random].alt} />
                </div>
                <div className="stats">
                    <p className="stats-paragraph left PPG" >
                      <span className="stats-before-hover">PPG: {this.state.data[random].PTS}</span>
                      <span className="stats-hover">Points Per Game</span>
                      </p>
                    <p className="stats-paragraph left TSP">
                      <span className="stats-before-hover">TSP: {((this.state.data[random].TSP) * 100 ).toFixed(1) }%</span>
                      <span className="stats-hover">True Shooting %</span>
                      </p>
                    <p className="stats-paragraph left APG">
                      <span className="stats-before-hover">APG: {this.state.data[random].AST}</span>
                      <span className="stats-hover">Assists Per Game</span>
                      </p>
                    <p className="stats-paragraph left RPG">
                      <span className="stats-before-hover">RPG: {this.state.data[random].TRB}</span>
                      <span className="stats-hover">Rebounds Per Game</span>
                      </p>

                    <div className="stats-right-container">
                    <p className="stats-paragraph right BPG">
                      <span className="stats-before-hover">BPG: {this.state.data[random].BLK}</span>
                      <span className="stats-hover">Blocks Per Game</span>
                      </p>
                    <p className="stats-paragraph right SPG">
                      <span className="stats-before-hover">SPG: {this.state.data[random].STL}</span>
                      <span className="stats-hover">Steals Per Game</span>
                      </p>
                    <p className="stats-paragraph right TPG">
                      <span className="stats-before-hover">TPG: {this.state.data[random].TOV}</span>
                      <span className="stats-hover">Turnovers Per Game</span>
                      </p>
                    </div>
                    
                    
                </div>
            
                </PlayerCard>



        <PlayerCard randomTwo={this.state.data[randomTwo]} random={this.state.data[random]} > 

        <div className="name-container">{this.state.data[randomTwo].Player}<span className="year">{this.state.data[randomTwo].Season}</span></div>
                <div className="player-image-container">
                    <img className="player-image" src= {this.state.data[randomTwo].src} alt = {this.state.data[randomTwo].alt} />
                </div>
                <div className="stats">
                <p className="stats-paragraph left PPG" >
                <span className="stats-before-hover">PPG: {this.state.data[randomTwo].PTS}</span>
                      <span className="stats-hover">Points Per Game</span>
                      </p>
                    <p className="stats-paragraph left TSP">
                      <span className="stats-before-hover">TSP: {((this.state.data[randomTwo].TSP) * 100 ).toFixed(1) }%</span>
                      <span className="stats-hover">True Shooting %</span>
                      </p>
                    <p className="stats-paragraph left APG">
                      <span className="stats-before-hover">APG: {this.state.data[randomTwo].AST}</span>
                      <span className="stats-hover">Assists Per Game</span>
                      </p>
                    <p className="stats-paragraph left RPG">
                      <span className="stats-before-hover">RPG: {this.state.data[randomTwo].TRB}</span>
                      <span className="stats-hover">Rebounds Per Game</span>
                      </p>

                    <div className="stats-right-container">
                    <p className="stats-paragraph right BPG">
                      <span className="stats-before-hover">BPG: {this.state.data[randomTwo].BLK}</span>
                      <span className="stats-hover">Blocks Per Game</span>
                      </p>
                    <p className="stats-paragraph right SPG">
                      <span className="stats-before-hover">SPG: {this.state.data[randomTwo].STL}</span>
                      <span className="stats-hover">Steals Per Game</span>
                      </p>
                    <p className="stats-paragraph right TPG">
                      <span className="stats-before-hover">TPG: {this.state.data[randomTwo].TOV}</span>
                      <span className="stats-hover">Turnovers Per Game</span></p>
                    </div>
                    
                    
                </div>
      
         
        </PlayerCard >
  
          
          </div>
       
      </div>
      
      
    )
    
    
  }
  
  
}

export default App;


