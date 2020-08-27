import React from 'react';
// import $ from 'jquery';
import './PlayerCard.css';
import MTGCard from "../assets/images/mtg-card.png";
import Images from "../Images";



class PlayerCard extends React.Component {

    
    constructor(props) {
        super(props)
        
        this.state = {
            data: null //This is what our data will eventually be loaded into
        };
    }

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        setTimeout(()=> {
            this.setState({
                data: Images
            });
        }, 50);
    }
    
   
    // experimenting below....
    

    // function randomize () {
        
    //     setTimeout(function() {
    //         console.log(randomImgs.src);
    //         return document.getElementsByClassName('player-image').src = randomImgs.src; 
    //         // document.getElementsByClassName('player-image').alt = randomImgs.Player];
    //     },200);
        
        // console.log(randomImgs);
         
        

        ///working on this....................
    // }

    // const name = () => {
        
    //     setTimeout(function(){
    //         console.log(randomImgs.Player);
    //         document.getElementsByClassName('name-container').innerHTML = randomImgs.Player;
            
           
            
    //     }, 1000);
    // }

    // console.log(name);

    // function resolveAfter2Seconds() { 
    //     return new Promise(resolve => {
    //       setTimeout(() => {
    //         resolve(randomImgs.Player);
    //       }, 200);
    //     });
    //   }
      
    //   async function f1() {
    //     // var randName = await resolveAfter2Seconds();
    //     // console.log(randomImgs.Player); // player names
    //     var randName = await randomImgs.Player;
    //     console.log(randName);
    //   }
      
    //   f1();

    // function a() {
    //     return randomImgs.Player;
        
    // }
     
    // var y;
     
    // function set_y () {
    //     y = a();
    //     console.log(y);
    //     document.querySelector(".name-container").innerHTML = y;
    // }
     //so close!!!
    // setTimeout(set_y, 200);

    // function sayHi() {
        
    //     document.querySelector(".name-container").innerHTML = randomImgs.Player;
    //     // console.log(Images);
    //     console.log(randomImgs.Player);
    //   }
      
    //   function sayHi2() {
        
    //     document.querySelector(".name-container2").innerHTML = randomImgs.Player;
    //     // console.log(Images);
    //     console.log(randomImgs.Player);
    //   }
      
    //   console.log(setTimeout(sayHi, 100));
   
    // does settimout on player image container also reset first card too?????????????? -------!!!!

    // random={setTimeout(function() {
    //     document.querySelector(".name-container").innerHTML = randomImgs.Player;
    // }, 100)} // went in player image....

        /// end experiment----------------------
    render(){
        const random = Math.floor(Math.random() * Images.length);
        console.log(Images);
        if (!this.state.data) {
            return <div />
        }
        
        return (
        
            <div className="mtg-card-container">
                
                <img className="MTG-card" src={MTGCard} alt="player card"/>
        
                <div className="name-container">{this.state.data[random].Player}<span>{this.state.data[random].Season}</span></div>
                <div className="player-image-container">
                    <img className="player-image" src= {this.state.data[random].src} alt = {this.state.data[random].alt} />
                </div>
                
            
                
        
            </div>
            );
        };
    }
    


export default PlayerCard;