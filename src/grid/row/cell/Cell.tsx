import React from 'react'
import './Cell.css'

interface Props {
  alive: boolean;
}

class Cell extends React.Component<Props, {}> {
  render() {
    return (
      <div className={`cell ${this.props.alive ? 'alive' : 'dead'}`}>
      </div>
    )
  }
}

export default Cell;