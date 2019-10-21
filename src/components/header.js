import React from 'react';
import Score from "./score"
import scores from "../score.json";
import "../styles/App.css";
function Header() {
    return (
        <header className="header">
            <div className="scoreHolder">
                <h1>React Click game</h1>

                <div id="userAlert">

                </div>
                <div id="scoreDiv">
                    <div className="scoreDisplays">Current Score: {scores[0].score}</div>
                    <div className="scoreDisplays">High Score: {scores[0].highScore}</div>
                </div>
            </div>
        </header>
    );
}

export default Header;
