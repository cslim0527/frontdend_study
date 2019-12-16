import React, { Component } from 'react';
import { connect } from 'react-redux'
import CartTotal from './CartTotal'
import CartItem from './CartItem'

import './cart.css'

class Cart extends Component {

  state = {
    cartItems: this.props.state
  }

  render() {
    const { cartItems } = this.state
    const cartLists = cartItems.map((itemInfo, i) => {
      return <CartItem itemInfo={itemInfo} key={i} /> 
    })

    return (
      <section className="_9eogI E3X2T">
        <main className="SCxLW uzKWK" role="main">
          <div className="uKzpc">장바구니</div>
          <CartTotal cartItems={cartItems} />
          {cartLists}
        </main>
      </section>
    )

  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    state: state.counter
  }
}

const mapDispatchProps = dispatch => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchProps)(Cart);