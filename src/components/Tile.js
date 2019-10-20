import React from "react";


function Tile(props) {
    return (
        <div className="card">
            <ul>
                <li>
                    <strong>Name:</strong>{props.name}
                </li>
                <li>
                    <strong>Image:</strong>{props.image}
                </li>
            </ul>
        </div>
    )
}

export default Tile;