import React from 'react';
import "../styles/Section.css";

function Section(props) {
    return (
        <div className="Section">
            {props.children}
        </div>
    );
}

export default Section;