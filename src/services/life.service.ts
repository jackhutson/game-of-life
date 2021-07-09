class LifeService {
  public gridSize: number = 30;
  public grid: boolean[][];

  constructor() {
    this.grid = Array.from({length: this.gridSize}, 
      () => Array.from({length: this.gridSize}, 
        () => Math.random() < 0.5 ? true : false
      ));
  }

}

export default LifeService;