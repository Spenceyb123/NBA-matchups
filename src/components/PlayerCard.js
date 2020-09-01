import React from 'react';
// import $ from 'jquery';
import './PlayerCard.css';
import MTGCard from "../assets/images/mtg-card.png";




class PlayerCard extends React.Component {

    
    // constructor(props) {
    //     super(props)
    // }
    
         
    render(){
        // console.log(this.props.data);
        const random = Math.floor(Math.random() * this.props.data.length); //this is to delay rendering until all data loads (Iages array merging with data in App)
        // if (this.props.data.TSP === undefined) {
        //     return <div/>
        // }
        
        return (
            
         
            <div className="mtg-card-container">
                <img className="MTG-card" src={MTGCard} alt="player card"/>
                <div className="name-container">{this.props.data[random].Player}<span>{this.props.data[random].Season}</span></div>
                <div className="player-image-container">
                    <img className="player-image" src= {this.props.data[random].src} alt = {this.props.data[random].alt} />
                </div>
                <div className="stats">
                    <p className="stats-paragraph left">PPG: {this.props.data[random].PTS}</p>
                    <p className="stats-paragraph left">TSP: {((this.props.data[random].TSP) * 100 ).toFixed(1) }%</p>
                    <p className="stats-paragraph left">APG: {this.props.data[random].AST}</p>
                    <p className="stats-paragraph left">RPG: {this.props.data[random].TRB}</p>

                    <div className="stats-right-container">
                    <p className="stats-paragraph right">BPG: {this.props.data[random].BLK}</p>
                    <p className="stats-paragraph right">SPG: {this.props.data[random].STL}</p>
                    <p className="stats-paragraph right">TPG: {this.props.data[random].TOV}</p>
                    </div>
                    
                    
                </div>
                
            
                
        
            </div>
            );
        };
    }
    


export default PlayerCard;