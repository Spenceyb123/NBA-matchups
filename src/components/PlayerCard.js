import React from 'react';
import './PlayerCard.css';
import MTGCard from "../assets/images/mtg-card.png";
import Images from "../Images";
require('../Images');

const PlayerCard = (props) => {
      
    return (
    <div className="mtg-card-container">
        
        <img src={MTGCard} alt="player card"/>
        <img className="player-image" src={Images[25].src} /> 
        {/* {put img in App instead so that can render two different images?} */}
    
        {/* <img src={Images[2].src} /> images diplaying now, but not quite sure where to render them yet*/} 
        

    </div>
    );
};

export default PlayerCard;