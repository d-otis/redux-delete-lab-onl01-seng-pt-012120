import React, { Component } from 'react'
import Band from './Band'

class Bands extends Component {

  generateBands = () => this.props.bands.map(band => <Band key={band.id} {...band} deleteBand={this.props.deleteBand} />)

  render() {
    return(
      <div>
        {this.generateBands()}
      </div>
    )
  }
}

export default Bands;