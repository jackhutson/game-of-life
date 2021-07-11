class LifeService {
  public gridSize: number = 30;

  public seedGrid = (): boolean[][] => {
    return Array.from({ length: this.gridSize }, () =>
      Array.from({ length: this.gridSize }, () =>
        Math.random() < 0.5 ? true : false
      )
    );
  }
}

export default LifeService;