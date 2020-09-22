import React from 'react';
import PlayerCard from './PlayerCard';
import "./Scoreboard.css";
import scoreboardPic from "../assets/images/Scoreboard-3.png";

class Scoreboard extends React.Component {
    render() {
        return (
            <div id="scoreboard-container">
                <img src = {scoreboardPic} />
            </div>
        ) 
    }
}   

export default Scoreboard;