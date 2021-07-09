import React from 'react'
import Cell from './cell/Cell';

interface Props {
  row: boolean[];
}

class Row extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.row.map((item, index) => {
          return (
            <Cell key={index} alive={item}></Cell>
          )
        })}
      </div>
    )
  }
}

export default Row;