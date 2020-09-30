import React from 'react';
import './App.css';
import $ from 'jquery';
import * as d3 from 'd3';
import importedCsvData from '../assets/players.csv';
import Images from'../Images';
import BasketballButton from "../assets/images/basketball-button.png";
import PlayerCard from './PlayerCard';
// import Scoreboard from './Scoreboard'; // prob gonna just get rid of this and component

// working on... 
// 2. get scorebard working * add state count to playerCard???
//3. make sure doesn't add two to scorecard since two playerCards
// 4.drop shadow on monitor and cards?
//5. update cards on alert ok, then compare stats when click juump ball
//6. have playercards render before player info


// override default browser alert



class App extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
        data: null,
        // countLeft: 0,
        // countRight: 0
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
}

componentDidMount() { 
  // this.customAlertHandle.bind(this);
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

   self.setState({ data: Images }); // do I need this with refig????????
   console.log(data[40]);
   //setting initial cards to Jordan and Kobe-----------------------
   //Jordan
   document.getElementsByClassName("name-container")[0].insertAdjacentHTML('afterbegin', data[0].Player );
   document.getElementsByClassName("year")[0].insertAdjacentHTML('afterbegin', data[0].Season);
   document.getElementsByClassName("player-image")[0].src = self.state.data[0].src; //merged Images with data in state
   document.getElementsByClassName("stats-before-hover")[0].insertAdjacentHTML('beforeend', data[0].PTS);
   document.getElementsByClassName("stats-before-hover")[1].insertAdjacentHTML('beforeend', (data[0].TSP * 100).toFixed(1) + "%");
   document.getElementsByClassName("stats-before-hover")[2].insertAdjacentHTML('beforeend', data[0].AST);
   document.getElementsByClassName("stats-before-hover")[3].insertAdjacentHTML('beforeend', data[0].TRB);
   document.getElementsByClassName("stats-before-hover")[4].insertAdjacentHTML('beforeend', data[0].BLK);
   document.getElementsByClassName("stats-before-hover")[5].insertAdjacentHTML('beforeend', data[0].STL);
   document.getElementsByClassName("stats-before-hover")[6].insertAdjacentHTML('beforeend', data[0].TOV);

   //Kobe
   document.getElementsByClassName("name-container")[1].insertAdjacentHTML('afterbegin', data[40].Player );
   document.getElementsByClassName("year")[1].insertAdjacentHTML('afterbegin', data[40].Season);
   document.getElementsByClassName("player-image")[1].src = self.state.data[40].src; //merged Images with data in state
   document.getElementsByClassName("stats-before-hover")[7].insertAdjacentHTML('beforeend', data[40].PTS);
   document.getElementsByClassName("stats-before-hover")[8].insertAdjacentHTML('beforeend', (data[40].TSP * 100).toFixed(1) + "%");
   document.getElementsByClassName("stats-before-hover")[9].insertAdjacentHTML('beforeend', data[40].AST);
   document.getElementsByClassName("stats-before-hover")[10].insertAdjacentHTML('beforeend', data[40].TRB);
   document.getElementsByClassName("stats-before-hover")[11].insertAdjacentHTML('beforeend', data[40].BLK);
   document.getElementsByClassName("stats-before-hover")[12].insertAdjacentHTML('beforeend', data[40].STL);
   document.getElementsByClassName("stats-before-hover")[13].insertAdjacentHTML('beforeend', data[40].TOV);


   
  }); 
  console.log('mounted');
}




componentDidUpdate() {
  console.log("app updated");
}


handleBasketballButton =  () => {
  console.log(this.customAlertHandle.bind());
  // customAlertHandle.bind(this);
  let random = Math.floor(Math.random() * Images.length); 
  let randomTwo = Math.floor(Math.random() * Images.length);
    
  if (random === randomTwo) { //so that won't be same two players 
    random = Math.floor(Math.random() * Images.length); 
    randomTwo = Math.floor(Math.random() * Images.length);
  }
    
     
        if(random !== undefined || randomTwo !== undefined){
            
            const statsArrayRandom = [];
            const randomPPG = this.state.data[random].PTS;
            const randomTSP = this.state.data[random].TSP;
            const randomAPG = this.state.data[random].AST;
            const randomRPG = this.state.data[random].TRB;
            const randomBPG = this.state.data[random].BLK;
            const randomSPG = this.state.data[random].STL;
            const randomTPG = this.state.data[random].TOV;
            statsArrayRandom.push(randomPPG, randomTSP, randomAPG, randomRPG, randomBPG, randomSPG, randomTPG);

            const statsArrayRandomTwo = [];
            const randomTwoPPG = this.state.data[randomTwo].PTS;
            const randomTwoTSP = this.state.data[randomTwo].TSP;
            const randomTwoAPG = this.state.data[randomTwo].AST;
            const randomTwoRPG = this.state.data[randomTwo].TRB;
            const randomTwoBPG = this.state.data[randomTwo].BLK;
            const randomTwoSPG = this.state.data[randomTwo].STL;
            const randomTwoTPG = this.state.data[randomTwo].TOV;
            statsArrayRandomTwo.push(randomTwoPPG, randomTwoTSP, randomTwoAPG, randomTwoRPG, randomTwoBPG, randomTwoSPG, randomTwoTPG);

            const randomStat = Math.floor(Math.random() * statsArrayRandom.length);
            
            // console.log(statsArrayRandom, statsArrayRandomTwo);
           

            if(randomStat === 0 && statsArrayRandom[randomStat] > statsArrayRandomTwo[randomStat]) {
                // this.setState({countLeft: +1}); causes to rerender :(
                (() => {
                
                    let ppg =  document.getElementsByClassName("stats-paragraph left PPG"); 
                    
                    for (const p of ppg) {
                        p.classList.add("animation");
                      }
                    
                })();
     
                alert(random.Player + " gets by " + randomTwo.Player + " for the bucket!");
              
                
            } else if (randomStat === 0 && statsArrayRandom[randomStat] < statsArrayRandomTwo[randomStat]) {
                // this.setState({countRight: +1});
                (() => {
                    
                    let ppg =  document.getElementsByClassName("stats-paragraph left PPG");
          
                    for (const p of ppg) {
                        p.classList.add("animation");
                      }

                })();
                
                alert(randomTwo.Player + " gets by " + random.Player + " for the bucket!");
                console.log($('.customAlert'));

            } else if (randomStat === 1 && statsArrayRandom[randomStat] > statsArrayRandomTwo[randomStat]) {
                (() => {
                    let tsp =  document.getElementsByClassName("stats-paragraph left TSP");
                    //started keeping variable names same when copying and pastying since local scope 
                    for (const t of tsp) {
                        t.classList.add("animation");
                      }
                    
                })();
                
                alert(random.Player + " is money!");
                console.log($('.customAlert'));

            } else if (randomStat === 1 && statsArrayRandom[randomStat] < statsArrayRandomTwo[randomStat]) {
                (() => {
                    let tsp =  document.getElementsByClassName("stats-paragraph left TSP");
                    
                    for (const t of tsp) {
                        t.classList.add("animation");
                      }
                    
                })();
               
                alert(randomTwo.Player + " is money!");
                console.log($('.customAlert'));

            } else if (randomStat === 2 && statsArrayRandom[randomStat] > statsArrayRandomTwo[randomStat]) {
                (() => {
                    let tsp =  document.getElementsByClassName("stats-paragraph left APG");
                    
                    for (const t of tsp) {
                        t.classList.add("animation");
                      }
                    
                })();
                
                alert(random.Player + " makes " + randomTwo.Player + "'s head spin with the dime!");
                console.log($('.customAlert'));

            } else if (randomStat === 2 && statsArrayRandom[randomStat] < statsArrayRandomTwo[randomStat]) {
                (() => {
                    let tsp =  document.getElementsByClassName("stats-paragraph left APG");
                    
                    for (const t of tsp) {
                        t.classList.add("animation");
                      }
                    
                })();
               
                alert(randomTwo.Player + " makes " + random.Player + "'s head spin with the dime!");
                console.log($('.customAlert'));
            } else if (randomStat === 3 && statsArrayRandom[randomStat] > statsArrayRandomTwo[randomStat]) {
                (() => {
                    let tsp =  document.getElementsByClassName("stats-paragraph left RPG");
                    
                    for (const t of tsp) {
                        t.classList.add("animation");
                      }
                    
                })();
                
                alert(random.Player + " secures the rebound!");
                console.log($('.customAlert'));

            } else if (randomStat === 3 && statsArrayRandom[randomStat] < statsArrayRandomTwo[randomStat]) {
                (() => {
                    let tsp =  document.getElementsByClassName("stats-paragraph left RPG");
                    
                    for (const t of tsp) {
                        t.classList.add("animation");
                      }
                    
                })();
               
                alert(randomTwo.Player + " secures the rebound!");
                console.log($('.customAlert'));
                // this.customAlertHandle();

            } else if (randomStat === 4 && statsArrayRandom[randomStat] > statsArrayRandomTwo[randomStat]) {
                (() => {
                    let bpg =  document.getElementsByClassName("stats-paragraph right BPG");
                    
                    for (const b of bpg) {
                        b.classList.add("animation");
                      }
                    
                })();
                
                alert(random.Player + " swats " + randomTwo.Player + "!");
                console.log($('.customAlert'));

            } else if (randomStat === 4 && statsArrayRandom[randomStat] < statsArrayRandomTwo[randomStat]) {
                (() => {
                    let bpg =  document.getElementsByClassName("stats-paragraph right BPG");

                    for (const b of bpg) {
                        b.classList.add("animation");
                      }
                    
                })();
                
                alert(randomTwo.Player + " swats " + random.Player + "!");
                console.log($('.customAlert'));

            } else if (randomStat === 5 && statsArrayRandom[randomStat] > statsArrayRandomTwo[randomStat]) {
                (() => {
                    let bpg =  document.getElementsByClassName("stats-paragraph right SPG");

                    for (const b of bpg) {
                        b.classList.add("animation");
                      }
                    
                })();
                
                alert(random.Player + " picks " + randomTwo.Player + "'s pocket!");
                console.log($('.customAlert'));

            } else if (randomStat === 5 && statsArrayRandom[randomStat] < statsArrayRandomTwo[randomStat]) {
                (() => {
                    let bpg =  document.getElementsByClassName("stats-paragraph right SPG");

                    for (const b of bpg) {
                        b.classList.add("animation");
                      }
                    
                })();
      
                alert(randomTwo.Player + " picks " + random.Player + "'s pocket!");
                console.log($('.customAlert'));

            } else if (randomStat === 6 && statsArrayRandom[randomStat] < statsArrayRandomTwo[randomStat]) {
                (() => {
                    let bpg =  document.getElementsByClassName("stats-paragraph right TPG");

                    for (const b of bpg) {
                        b.classList.add("animation");
                      }
                    
                })();
                
                alert(randomTwo.Player + " turns the ball over... that's embarrassing");
                console.log($('.customAlert'));

            } else if (randomStat === 6 && statsArrayRandom[randomStat] > statsArrayRandomTwo[randomStat]) {
                (() => {
                    let bpg =  document.getElementsByClassName("stats-paragraph right TPG");

                    for (const b of bpg) {
                        b.classList.add("animation");
                      }
                    
                })();
                
                alert(random.Player + " turns the ball over... that's embarrassing");
                console.log($('.customAlert')); //working on this

            }

        }
       

  // let statsParagraphElements = document.querySelectorAll(".stats-paragraph");
  // (function _removeClasses() {
  //   for (var i = 0; i < statsParagraphElements.length; i++) {
  //     statsParagraphElements[i].classList.remove('animation')
  //   }
  // }());
}

//experimenting 
// customAlertHandle.bind(this);


customAlertHandle (){
  // console.log(this);
   // add listener for when enter button pressed (had to make focus on window so that enter recognized from anywhere, and not just if alert focused on)
  //  $(window).focus().keypress(function(e){
  //      if(e.key === 13) {
  //        console.log("enter pressed");
           $('.customAlert').css('animation', 'fadeOut 0.3s linear');
           $(".basketball-container").show().css("animation", "fadeIn 0.3s linear");
           
          //  if(this.state.data){ // kind of working to generate new players, although seems to be updating state mutliple times :(
          //    this.setState({ data: Images });
          //    console.log("new Players");
          //  } 
 
       setTimeout(function(){
        $('.customAlert').css('animation', 'none');
           $('.customAlert').css('display', 'none');
       }, 300);
       //}
   
    //  })
 
 // add listener for when our confirmation button is clicked
//  $('.confirmButton').click(function(){
//    $('.customAlert').css('animation', 'fadeOut 0.3s linear');
//     console.log('clicked', this);
//     this.setState({ data: Images });
//     console.log(this.state.data);
//     console.log("new Players");
//   //  if(this.state.data){ // kind of working to generate new players, although seems to be updating state mutliple times :(
//   //    this.setState({ data: Images });
//   //    console.log(this.state.data);
//   //    console.log("new Players");
       
//   //  } 
   
//    $(".basketball-container").show().css("animation", "fadeIn 0.3s linear");
 
//    setTimeout(function(){
//     $('.customAlert').css('animation', 'none');
//        $('.customAlert').css('display', 'none');
//        //working on this shit ................------------------------
//        // if(this.props != undefined){
//        //     this.props.newPlayersOnAlert();
//        // }
//    }, 300);
//  })
 
 };


//   if(firstAlert !== undefined) {
//     firstAlert.parentNode.removeChild(firstAlert);
//   };
// }

// newPlayersOnAlert = () => {
//   this.setState({ data: Images });
//   console.log("new Players");
// }

handleKeyPress = (event) => {
  
  if(window.alert.display = true) {
    console.log('true dat');
    // document.getElementsByClassName('customAlert').focus();
  }
  if(event.key === 'Enter') {
    console.log('enter enter'); 
 }

}

  
  render(){
   
    console.log("app render");
    


    if (!this.state.data) {
      return  <div className="loading-container" id="test"> 
                <p className="loading-text">Loading...</p>
             </div>
  }


  

    return (
      <div className="main-div" tabIndex='-1'> 
 
        <div className="basketball-container"> 
        <img className="basketball" src={BasketballButton} onClick={this.handleBasketballButton } alt="click this basketball button to get a new matchup"/>
        </div>
        
      
        <div className="cards-container" tabIndex= "-1">
          
          
        <PlayerCard  data={this.state.data} newPlayersOnAlert={this.newPlayersOnAlert} >
        
                <div className="name-container"><span className="year"></span></div>
                <div className="player-image-container">
                    <img className="player-image"  />
                </div>
                <div className="stats">
                    <p className="stats-paragraph left PPG" >
                      <span className="stats-before-hover">PPG: </span>
                      <span className="stats-hover">Points Per Game</span>
                      </p>
                    <p className="stats-paragraph left TSP">
                      <span className="stats-before-hover">TSP: </span>

                      <span className="stats-hover">True Shooting %</span>
                      </p>
                    <p className="stats-paragraph left APG">
                      <span className="stats-before-hover">APG: </span>
                      <span className="stats-hover">Assists Per Game</span>
                      </p>
                    <p className="stats-paragraph left RPG">
                      <span className="stats-before-hover">RPG: </span>
                      <span className="stats-hover">Rebounds Per Game</span>
                      </p>

                    <div className="stats-right-container">
                    <p className="stats-paragraph right BPG">
                      <span className="stats-before-hover">BPG: </span>
                      <span className="stats-hover">Blocks Per Game</span>
                      </p>
                    <p className="stats-paragraph right SPG">
                      <span className="stats-before-hover">SPG: </span>
                      <span className="stats-hover">Steals Per Game</span>
                      </p>
                    <p className="stats-paragraph right TPG">
                      <span className="stats-before-hover">TPG: </span>
                      <span className="stats-hover">Turnovers Per Game</span>
                      </p>
                    </div>
                    
                    
                </div>
            
                </PlayerCard>



        <PlayerCard > 

        <div className="name-container"><span className="year"></span></div>
                <div className="player-image-container">
                    <img className="player-image"  />
                </div>
                <div className="stats">
                <p className="stats-paragraph left PPG" >
                <span className="stats-before-hover">PPG: </span>
                      <span className="stats-hover">Points Per Game</span>
                      </p>
                    <p className="stats-paragraph left TSP">
                      <span className="stats-before-hover">TSP: </span>
                      <span className="stats-hover">True Shooting %</span>
                      </p>
                    <p className="stats-paragraph left APG">
                      <span className="stats-before-hover">APG: </span>
                      <span className="stats-hover">Assists Per Game</span>
                      </p>
                    <p className="stats-paragraph left RPG">
                      <span className="stats-before-hover">RPG: </span>
                      <span className="stats-hover">Rebounds Per Game</span>
                      </p>

                    <div className="stats-right-container">
                    <p className="stats-paragraph right BPG">
                      <span className="stats-before-hover">BPG: </span>
                      <span className="stats-hover">Blocks Per Game</span>
                      </p>
                    <p className="stats-paragraph right SPG">
                      <span className="stats-before-hover">SPG: </span>
                      <span className="stats-hover">Steals Per Game</span>
                      </p>
                    <p className="stats-paragraph right TPG">
                      <span className="stats-before-hover">TPG: </span>
                      <span className="stats-hover">Turnovers Per Game</span></p>
                    </div>
                    
                    
                </div>
      
         
        </PlayerCard >
  
          
          </div>

          <div className='customAlert' tabindex='-1' onKeyPress={(event) => this.handleKeyPress(event)}  >
    <div className="message-container"> 
         <p className='message'></p>  
    </div>

  <input type='button' className='confirmButton' onClick={this.customAlertHandle}  />
  
        <div className="score-left">0</div>
  <div className="score-right">0</div>
</div>
       
      </div>
      
      
    )
    
    
  }
  
  
}

export default App;


