import React, { Component } from 'react';
import { inject } from 'mobx-react';

@inject('counter')
class Counter extends Component {
  
  handleIncrease = () => {
    const { counter: {increase}, id } = this.props
    increase(id)
  }

  handleDecrease = () => {
    const { counter: {decrease}, id } = this.props
    decrease(id)
  }

  render() {

    return (
      <div className="Pkbci">
        <button onClick={this.handleIncrease} className="sqdOP L3NKy y3zKF" type="button" style={{ marginBottom: "2px" }}>+</button>
        <button onClick={this.handleDecrease} className="sqdOP L3NKy y3zKF" type="button" style={{ marginTop: "2px" }}>-</button>
      </div>
    );
  }
}

export default Counter;
