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
            />
          ))}
        </Section>
      </div>
    );
  }
}

export default App;
