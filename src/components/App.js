import React from 'react';
import './App.css';
import $ from 'jquery';
import * as d3 from 'd3';
import importedCsvData from '../assets/players.csv';
import Images from'../Images';
import BasketballButton from "../assets/images/basketball-button.png";
import PlayerCard from './PlayerCard';
import Scoreboard from './Scoreboard';

// working on... 

// 2. get scorebard working * add state count to playerCard???




class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
        data: null,
        hasMounted: false //This is what our data will eventually be loaded into
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



// componentDidUpdate(prevProps, prevState) {
//   if (prevProps !== this.props) {
    
//     console.log('pokemons state has changed.')
//   }
// }


handleBasketballButton =  () => {
  this.setState({data: Images});
  let statsParagraphElements = document.querySelectorAll(".stats-paragraph");
  (function _removeClasses() {
    for (var i = 0; i < statsParagraphElements.length; i++) {
      statsParagraphElements[i].classList.remove('animation')
    }
  }());
}

//trying to get one of customalerts to not show below...
handleAlerts = () => {
  let firstAlert = document.getElementsByClassName('customAlert')[1];
  console.log(firstAlert);
  if(firstAlert != undefined) {
    firstAlert.parentNode.removeChild(firstAlert);
  }
}

  
  render(){
    console.log("app render");
    const random = Math.floor(Math.random() * Images.length); 
    const randomTwo = Math.floor(Math.random() * Images.length);
    

    // console.log(this.state.data);

    if(random === randomTwo) { // i don't think this is working quite like I hope yet
      this.setState({ data: Images })
    } 
    


    if (!this.state.data) {
      return  <div className="loading-container" id="test"> 
                <p className="loading-text">Loading...</p>
             </div>
  }


  

    return (
      <div > 

        <Scoreboard />
 
        <div className="basketball-container"> 
        <img className="basketball" src={BasketballButton} onClick={this.handleBasketballButton } alt="click this basketball button to get a new matchup"/>
        </div>
        
      
        <div className="cards-container" tabIndex= "-1">
          
          
        <PlayerCard name="you" render={this.handleAlerts()} >
        
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



        <PlayerCard name = "opponent" randomTwo={this.state.data[randomTwo]} random={this.state.data[random]} > 

        <div className="name-container">{this.state.data[randomTwo].Player}<span className="year">{this.state.data[randomTwo].Season}</span></div>
                <div className="player-image-container">
                    <img className="player-image" src= {this.state.data[randomTwo].src} alt = {this.state.data[randomTwo].alt} />
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


