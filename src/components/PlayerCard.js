import React from 'react';
// import $ from 'jquery';
import './PlayerCard.css';
import MTGCard from "../assets/images/mtg-card.png";




class PlayerCard extends React.Component {

    
    // constructor(props) {
    //     super(props)
        
        
    // }

    // if(random.PTS > this.state.data[randomTwo].PTS) {
    //     alert('You win');
    //   } else {
    //     alert ("you lose")
    //   }
    componentDidMount () {
        console.log('ChildDiv did mount');
        
      }

    componentDidUpdate() {
        console.log('updated');
        const random = this.props.random;
        const randomTwo = this.props.randomTwo;
        // console.log(random, randomTwo);
        if(random != undefined && randomTwo != undefined){
            console.log(random.PTS, randomTwo.PTS);
            if(random.PTS > randomTwo.PTS) {
                alert("winer");
            } else {
                alert("loser");
            }
        }
    }

    
    
         
    render(){
        console.log("PlayerCard render");

        //experimenting below, might be on to something here 

        
        
        // console.log(this.props.randomTwo);

        //---------end experiment
        
        // console.log(this.props.data);
        // if (this.props.data.TSP === undefined) {
        //     return <div/>
        // }
        // console.log(this.props.children);
        return (
            
         
            <div className="mtg-card-container">
                <img className="MTG-card" src={MTGCard} alt="player card"/>
                
        <div>{this.props.children}</div>
            {console.log(this.props)}
                
        
            </div>
            );
        };

    }
    


export default PlayerCard;