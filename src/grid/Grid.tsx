import './Grid.css';
import React from 'react';
import Row from './row/Row';

interface Props {
  gridState: boolean[][];
}

class Grid extends React.Component<Props, {}> {
  render() {
    return (
      
      <div className="Grid">
        {this.props.gridState.map((item, index) => {
          return (
            <Row key={index} row={item}></Row>
          )
        })}
      </div>
    )
  }
}

export default Grid;