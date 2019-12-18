import React, { Component } from 'react';
import CartItem from './CartItem'

class CartLists extends Component {
  render() {
    const lists = this.props.cartLists.map((itemInfo, i) => {
      return <CartItem itemInfo={itemInfo} key={i} />
    })

    return (
      <div>
        {lists}
      </div>
    );
  }
}

export default CartLists;
