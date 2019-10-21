import React from "react";
import scores from "../score.json";
import "../styles/App.css"
class Score extends React.Component {
state={
    scores
}
    render() {
        return (
            <div id="scoreDiv">
                <ul>
                    <li>Current Score: {scores[0].score}</li>
                    <li>High Score: {scores[0].highScore}</li>
                </ul>
            </div>
        )
    }
}

export default Score;