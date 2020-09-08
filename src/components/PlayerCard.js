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
        // putting all the below in here so that no alert upon App rnder when cards not even showing 
        console.log('updated');
        const random = this.props.random;
        const randomTwo = this.props.randomTwo;
     
        if(random != undefined || randomTwo != undefined){
            
            const statsArrayRandom = [];
            const randomPPG = random.PTS;
            const randomTSP = random.TSP;
            const randomAPG = random.AST;
            const randomRPG = random.TRB;
            const randomBPG = random.BLK;
            const randomSPG = random.STL;
            const randomTPG = random.TOV;
            statsArrayRandom.push(randomPPG, randomTSP, randomAPG, randomRPG, randomBPG, randomSPG, randomTPG);

            const statsArrayRandomTwo = [];
            const randomTwoPPG = randomTwo.PTS;
            const randomTwoTSP = randomTwo.TSP;
            const randomTwoAPG = randomTwo.AST;
            const randomTwoRPG = randomTwo.TRB;
            const randomTwoBPG = randomTwo.BLK;
            const randomTwoSPG = randomTwo.STL;
            const randomTwoTPG = randomTwo.TOV;
            statsArrayRandomTwo.push(randomTwoPPG, randomTwoTSP, randomTwoAPG, randomTwoRPG, randomTwoBPG, randomTwoSPG, randomTwoTPG);

            const randomStat = Math.floor(Math.random() * statsArrayRandom.length);
            console.log(randomStat);
            console.log(statsArrayRandom, statsArrayRandomTwo);

            if(randomStat != 6 && statsArrayRandom[randomStat] > statsArrayRandomTwo[randomStat]) {
                console.log(statsArrayRandom[randomStat], statsArrayRandomTwo[randomStat] )
                alert("winer");
            } else if (randomStat == 6 && statsArrayRandom[randomStat] < statsArrayRandomTwo[randomStat]){
                console.log(statsArrayRandom[randomStat], statsArrayRandomTwo[randomStat] )
                alert("winner");
            } else {
                console.log(statsArrayRandom[randomStat], statsArrayRandomTwo[randomStat] )
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