import React from 'react';
import './App.css';
import Grid from './grid/Grid';
import LifeService from './services/life.service';

interface AppState {
  life: LifeService;
  grid: boolean[][];
  active: boolean;
  timeoutId: number;
}

interface Props { }

class App extends React.Component<Props, AppState> {

  constructor(props: Props) {
    super(props);

    this.state = {
      life: new LifeService(),
      grid: [],
      active: false,
      timeoutId: 0,
    }
  }
  componentWillUnmount() {
    window.clearInterval(this.state.timeoutId);
  }

  playClick = () => {
    this.setState({
      grid: this.state.grid.length > 0 ? this.state.grid : this.state.life.seedGrid(),
      active: true,
      timeoutId: window.setInterval(() => {
        this.tick();
      }, 1000)
    });
  }

  tick = () => {
    this.setState({
      grid: this.state.life.tick(this.state.grid)
    })
  }

  pauseClick = () => {
    window.clearInterval(this.state.timeoutId);
    this.setState({
      active: false,
    })
  }

  stopClick = () => {
    window.clearInterval(this.state.timeoutId);
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
            {this.state.active ?
              <div onClick={this.pauseClick}>Pause</div> :
              <div onClick={this.playClick}>Play</div>
            }
            <div onClick={this.stopClick}>Stop</div>
          </div>
        </header>
        <Grid gridState={this.state.grid}></Grid>
      </div>
    );
  }
}

export default App;
