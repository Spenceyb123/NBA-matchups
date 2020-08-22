import React from 'react';

import Card from "../assets/images/mtg-card.png";
import Images from "../Images";
require('../Images');

console.log(Images.src);


const PlayerCard = (props) => {
      
    return (
    <div>
        
        <img src={Card} alt="player card"/> 
    
        <img src={Images[2].src} />
        

    </div>
    );
};

export default PlayerCard;