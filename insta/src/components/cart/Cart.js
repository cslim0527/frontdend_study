import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import './cart.css'

import CartHeader from './CartHeader'
import CartTotal from './CartTotal'
import CartLists from './CartLists'


@inject('counter')
@observer
class Cart extends Component {

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    // return this.props.counter.countList.quantity !== nextProps.counter.countList.quantity
  }

  render() {
    const { counter: {countList} } = this.props
    return (
      <section className="_9eogI E3X2T">
        <main className="SCxLW uzKWK" role="main">
          <CartHeader />
          <CartTotal cartItems={countList} />
          <CartLists cartLists={countList} />
        </main>
      </section>
    )

  }
}


export default Cart