import React from 'react';
import userInfo from "../userInfo.json";
import "../styles/App.css";
function Header() {
    
    return (
        <header className="header">
            <div className="scoreHolder">
                <h1 id='logo'>React Click game</h1>

                <div id="userAlert">
                {userInfo[1].greeting}
                </div>
                <div id="scoreDiv">
                    <div className="scoreDisplays">Current Score: {userInfo[0].score}</div>
                    <div className="scoreDisplays">High Score: {userInfo[0].highScore}</div>
                </div>
            </div>
        </header>
    );
}

export default Header;
