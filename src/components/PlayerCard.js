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

    componentDidMount() {  //this and loadData are to make sure all data loaded before rendering component in App
        this.loadData(); 
    }

    loadData() {
        setTimeout(()=> {
            this.setState({
                data: Images
            });
        }, 60);
    }
    
         
    render(){
        const random = Math.floor(Math.random() * Images.length); //this is to delay rendering until all data loads (Iages array merging with data in App)
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
                <div className="stats">
        <p className="stats-paragraph left">PPG: {this.state.data[random].PTS}</p>
                    <p className="stats-paragraph left">TSP: {this.state.data[random].PTS}</p>
                    <p className="stats-paragraph left">APG: {this.state.data[random].AST}</p>
                    <p className="stats-paragraph left">RPG: {this.state.data[random].TRB}</p>

                    <div className="stats-right-container">
                    <p className="stats-paragraph right">BPG: {this.state.data[random].BLK}</p>
                    <p className="stats-paragraph right">SPG: {this.state.data[random].STL}</p>
                    <p className="stats-paragraph right">TPG: {this.state.data[random].TOV}</p>
                    </div>
                    
                    
                </div>
                
            
                
        
            </div>
            );
        };
    }
    


export default PlayerCard;