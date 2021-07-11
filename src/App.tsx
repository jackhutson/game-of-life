import React from 'react';
import './App.css';
import Grid from './grid/Grid';
import LifeService from './services/life.service';

interface AppState {
  life: LifeService;
  grid: boolean[][];
  active: boolean;
}

interface Props {

}

class App extends React.Component<Props, AppState> {

  constructor(props: Props) {
    super(props);

    this.state = {
      life: new LifeService(),
      grid: [],
      active: false,
    }
  }
  
  playClick = () => {
    this.setState({
      grid: this.state.life.seedGrid(),
      active: true,
    })
  }

  pauseClick = () => {
    this.setState({
      active: false,
    })
  }

  stopClick = () => {
    this.setState({
      grid: [],
      active: false,
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>Jack's Solution for Conway's Game of Life</div>
          <div className="tools">
            <div onClick={this.playClick}>Play</div>
            <div>Pause</div>
            <div onClick={this.stopClick}>Stop</div>
          </div>
        </header>
        <Grid gridState={this.state.grid}></Grid>
      </div>
    );
  }
}

export default App;
