import React from "react";
import scores from "../score.json";
class Score extends React.Component {
state={
    scores
}
    render() {
        return (
            <div>
            User Score: {scores[0].score}
            </div>
        )
    }
}

export default Score;