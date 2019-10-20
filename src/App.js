import React from 'react';
import Header from "./components/header";
import Section from "./components/Section"
import Tile from "./components/Tile"
import tiles from "./tiles.json";
import scores from "./score.json";
import "./styles/App.css";

class App extends React.Component {
  state = {
    tiles, scores
  };
  selectTile = id => {
    const tilesFilter = this.state.tiles.filter(tile => tile.id === id);
    if (tilesFilter[0].selected === false) {
      console.log("Changing to true")
      tilesFilter[0].selected = true;
      this.state.scores[0].score++
    } else {
      console.log("Reset score")
      for (let i = 0; i < this.state.tiles.length - 1; i++) {
        this.state.tiles[i].selected = false;
      }
      this.state.scores[0].score = 0;
    };
    this.shuffle();
  };
  shuffle = () => {
    let tempArr = this.state.tiles.slice();
    for (let i = tempArr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [tempArr[i], tempArr[j]] = [tempArr[j], tempArr[i]];
    }
    this.setState({ tiles: tempArr });
    console.log(this.state.tiles)
  };
  render() {
    return (
      <div>
        <Header />
        <Section>
          {this.state.tiles.map(tile => (
            <Tile
              id={tile.id}
              image={tile.image}
              selected={tile.selected}
              selectTile={this.selectTile}
              shuffle={this.shuffle}
            />
          ))}
        </Section>
      </div>
    );
  }
}

export default App;
