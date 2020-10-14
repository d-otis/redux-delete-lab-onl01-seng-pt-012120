import React, { Component } from 'react';

class Band extends Component {

  render() {

    const { name, id, deleteBand } = this.props

    return(
      <div>
        <li>{name} <button onClick={() => deleteBand(id)} >Delete me, yo.</button></li> 
      </div>
    );
  }
};

export default Band;
