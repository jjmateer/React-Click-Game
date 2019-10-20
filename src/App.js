import React from 'react';
import Header from "./components/header";
import Section from "./components/Section"
import Tile from "./components/Tile"
import tiles from "./tiles.json";
import "./styles/App.css";

class App extends React.Component {
  state = {
    tiles
  };
  selectTile = id => {
    const tiles = this.state.tiles.filter(tile => tile.id !== id);
    this.setState({ tiles });
    this.shuffle()
  };
  shuffle = () => {
    let temp = this.state.tiles.slice();
    for (let i = temp.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [temp[i], temp[j]] = [temp[j], temp[i]];
    }
    this.setState({ tiles: temp });
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
