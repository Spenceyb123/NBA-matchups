import React from 'react';
import './PlayerCard.css';
import MTGCard from "../assets/images/mtg-card.png";
import Images from "../Images";

const PlayerCard = (props) => {

    const random = Math.floor(Math.random() * Images.length);

console.log(Images[random].src);
      
    return (
    <div className="mtg-card-container">
        
        <img src={MTGCard} alt="player card"/>
        <div className="player-image-container">
            <img className="player-image" src={Images[random].src} />
        </div>
        {/* <img className="player-image" src={Images[25].src} />  */}
        {/* {put img in App instead so that can render two different images?} */}
    
        {/* <img src={Images[2].src} /> images diplaying now, but not quite sure where to render them yet*/} 
        

    </div>
    );
};

export default PlayerCard;