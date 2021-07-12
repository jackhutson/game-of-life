class LifeService {
  public gridSize: number = 30;

  public seedGrid = (): boolean[][] => {
    return Array.from({ length: this.gridSize }, () =>
      Array.from({ length: this.gridSize }, () =>
        Math.random() < 0.25 ? true : false
      )
    );
  }

  public tick = (grid: boolean[][]):boolean[][] => {
    let gridRowIndex : number;

    return grid.map((row, index) => {
      gridRowIndex = index;
      return row.map((item, index) => {
        return this.doesCellLive(gridRowIndex, index, grid);
      })
    })
  }

  private doesCellLive = (rowIndex: number, columnIndex: number, grid: boolean[][]): boolean => {
    const cellState = grid[rowIndex][columnIndex];
   
    const northWestCell = this.evaluateNeighborByIndex(rowIndex - 1, columnIndex - 1, grid);
    const northCell = this.evaluateNeighborByIndex(rowIndex -1, columnIndex, grid);
    const northEastCell = this.evaluateNeighborByIndex(rowIndex - 1, columnIndex + 1, grid);
    const westCell = this.evaluateNeighborByIndex(rowIndex, columnIndex - 1, grid);
    const eastCell = this.evaluateNeighborByIndex(rowIndex, columnIndex + 1, grid);
    const southWestCell = this.evaluateNeighborByIndex(rowIndex + 1, columnIndex - 1, grid);
    const southCell = this.evaluateNeighborByIndex(rowIndex + 1, columnIndex, grid);
    const southEastCell = this.evaluateNeighborByIndex(rowIndex + 1, columnIndex + 1, grid);
    
    const neighbors = [northWestCell, northCell, northEastCell, westCell, eastCell, southWestCell, southCell, southEastCell];
    const livingNeighbors = neighbors.reduce((acc, item) => item ? acc + 1 : acc, 0);


    return (cellState && (livingNeighbors > 1 && livingNeighbors < 4)) || (!cellState && livingNeighbors === 3) ? true : false;
  }

  private evaluateNeighborByIndex = (rowIndex: number, columnIndex: number, grid: boolean[][]) => 
    this.boundaryCheck(rowIndex, columnIndex) ? grid[rowIndex][columnIndex] : false;
  
  private boundaryCheck = (rowIndex: number, columnIndex: number): boolean => (rowIndex < 30 && rowIndex > -1) && (columnIndex < 30 && columnIndex > -1);
}


export default LifeService;