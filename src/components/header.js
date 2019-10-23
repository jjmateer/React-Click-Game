import React from 'react';
import userInfo from "../userInfo.json";
import "../styles/App.css";
function Header(props) {
    return (
        <div>
            <header className="header">
                <div className="scoreHolder">
                    <h1 id='logo'>React Click game</h1>

                    <div id="userAlert" className={props.isColored ? "correctA" : "incorrectA"}>
                        {userInfo[1].greeting}
                    </div>
                    <div id="scoreDiv">
                        <div className="scoreDisplays">Current Score: {userInfo[0].score}</div>
                        <div className="scoreDisplays">High Score: {userInfo[0].highScore}</div>
                    </div>
                </div>
            </header>
            <div id="instructions">
                <p>Click tiles to gain points, but do not click the same one twice!</p>
            </div>
        </div>
    );
}

export default Header;
