import React from 'react';
import './App.css';
// import $ from 'jquery';
import * as d3 from 'd3';
import importedCsvData from '../assets/players.csv';
import Images from'../Images';
import BasketballButton from "../assets/images/basketball-button.png";
import PlayerCard from './PlayerCard';

// working on... 
// 1. not having alert upon componentDidMount
// 2. delaying stats etc from showing until playerCards render
// 3. random comparison of stats 


class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
        data: null,
        hasMounted: false //This is what our data will eventually be loaded into
    };
    
}

// loadData() {
//     setTimeout(()=> {
//       if(Images[0].TSP){
//         this.setState({
//           data: Images,
//       });
//       }
        
        
//     }, 100);
    
// }

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
   self.setState({ data: Images, hasMounted: true });
  //  console.log(self.state.data);
  }); //this and loadData are to make sure all data loaded before rendering component in App
  // this.loadData(); 
  console.log('mounted');
}

handleBasketballButton =  () => {
  this.setState({data: Images});
}


// compareSiblings = () => {
  
// }



  

  
  
  
  render(){
    console.log("app render");
    const random = Math.floor(Math.random() * Images.length); 
    const randomTwo = Math.floor(Math.random() * Images.length);
    

    // console.log(this.state.data);

    if(random === randomTwo) {
      this.setState({ data: Images })
    } 


    if (!this.state.data) {
      return  <div className="loading-container" > 
                <p className="loading-text">Loading...</p>
             </div>
  }

  // while(this.state.hasMounted = true)

  //  console.log(this.state.hasMounted); // wanna put this in player card ?
    
      if(this.state.data[random].PTS > this.state.data[randomTwo].PTS) {
        alert('You win');
      } else {
        alert ("you lose")
      }
    
    
  //  let test =  () => {
  //    if(this.hasMounted = true) {
  //      console.log('test'); // do alert while component did mount = true?
  //    }
  //  }

  //  test ();
   


    return (
      <div> 
 
        <div className="basketball-container"> 
        <img className="basketball" src={BasketballButton} onClick={this.handleBasketballButton } alt="click this basketball button to get a new matchup"/>
        </div>
        
      
        <div className="cards-container">
          
          
        <PlayerCard name="you" onRender={this.test} >
        
               
                
                <div className="name-container">{console.log(this.state.data[random].Player)}<span>{this.state.data[random].Season}</span></div>
                <div className="player-image-container">
                    <img className="player-image" src= {this.state.data[random].src} alt = {this.state.data[random].alt} />
                </div>
                <div className="stats">
                    <p className="stats-paragraph left" id="PPG-left">PPG: {this.state.data[random].PTS}</p>
                    <p className="stats-paragraph left">TSP: {((this.state.data[random].TSP) * 100 ).toFixed(1) }%</p>
                    <p className="stats-paragraph left">APG: {this.state.data[random].AST}</p>
                    <p className="stats-paragraph left">RPG: {this.state.data[random].TRB}</p>

                    <div className="stats-right-container">
                    <p className="stats-paragraph right">BPG: {this.state.data[random].BLK}</p>
                    <p className="stats-paragraph right">SPG: {this.state.data[random].STL}</p>
                    <p className="stats-paragraph right">TPG: {this.state.data[random].TOV}</p>
                    </div>
                    
                    
                </div>
            
                </PlayerCard>



        <PlayerCard name = "opponent" onRender={this.test} >
        <div className="name-container">{console.log(this.state.data[randomTwo].Player)}<span>{this.state.data[randomTwo].Season}</span></div>
                <div className="player-image-container">
                    <img className="player-image" src= {this.state.data[randomTwo].src} alt = {this.state.data[randomTwo].alt} />
                </div>
                <div className="stats">
                    <p className="stats-paragraph left" id="PPG-right">PPG: {this.state.data[randomTwo].PTS}</p>
                    <p className="stats-paragraph left">TSP: {((this.state.data[randomTwo].TSP) * 100 ).toFixed(1) }%</p>
                    <p className="stats-paragraph left">APG: {this.state.data[randomTwo].AST}</p>
                    <p className="stats-paragraph left">RPG: {this.state.data[randomTwo].TRB}</p>

                    <div className="stats-right-container">
                    <p className="stats-paragraph right">BPG: {this.state.data[randomTwo].BLK}</p>
                    <p className="stats-paragraph right">SPG: {this.state.data[randomTwo].STL}</p>
                    <p className="stats-paragraph right">TPG: {this.state.data[randomTwo].TOV}</p>
                    </div>
                    
                    
                </div>
        
         
        </PlayerCard>
  
          
          </div>
  
      </div>
      
      
    )
  }
  
}

export default App;


