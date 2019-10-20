import React from 'react';
import "../styles/Section.css";
import Tile from './Tile';

function Section(props) {
    return (
        <div className="Section">
            {props.children}
        </div>
    );
}

export default Section;