import React from "react";
import "../styles/Tile.css"

function Tile(props) {
    return (
        <div className="card">
            {props.id}
            <img id="cardImg" alt={props.image} src={props.image}
                onClick={() => props.selectTile(props.id)}></img>
        </div>
    )
}

export default Tile;