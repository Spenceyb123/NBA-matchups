import React from 'react';
// import $ from 'jquery';
import './PlayerCard.css';
import MTGCard from "../assets/images/mtg-card.png";
import Images from "../Images";




const PlayerCard = (props) => {

    

    // experimenting below....
    const random = Math.floor(Math.random() * Images.length);
    const randomImgs = Images[random];

    // function randomize () {
        
    //     setTimeout(function() {
    //         console.log(randomImgs.src);
    //         return document.getElementsByClassName('player-image').src = randomImgs.src; 
    //         // document.getElementsByClassName('player-image').alt = randomImgs.Player];
    //     },200);
        
        // console.log(randomImgs);
         
        

        ///working on this....................
    // }


        /// end experiment----------------------
      
    return (
    <div className="mtg-card-container">
        
        <img src={MTGCard} alt="player card"/>
        <div className="player-image-container">
            <img className="player-image" src= {randomImgs.src} alt = {randomImgs.alt} />
        </div>
        {/* <img className="player-image" src={Images[25].src} />  */}
        {/* {put img in App instead so that can render two different images?} */}
    
        {/* <img src={Images[2].src} /> images diplaying now, but not quite sure where to render them yet*/} 
        

    </div>
    );
};


export default PlayerCard;