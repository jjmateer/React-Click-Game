import React from 'react';
import Score from "./score"
import "../styles/App.css";
function Header() {
    return (
        <header className="header">
            <h1>React Click game</h1>
            <div id="userPoints">
                <Score/>
            </div>
        </header>
    );
  }
  
  export default Header;
  