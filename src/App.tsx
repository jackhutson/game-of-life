import React from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from './grid/Grid';
import LifeService from './services/life.service';

function App() {
  let lifeService = new LifeService();

  console.log(lifeService);

  return (
    <div className="App">
      <header className="App-header">
        Jack's Solution for Conway's Game of Life
      </header>
      <Grid gridState={lifeService.grid}></Grid>
    </div>
  );
}

export default App;
