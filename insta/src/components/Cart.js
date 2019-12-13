import React, { Component } from 'react';
import CartTotal from './CartTotal'
import CartItem from './CartItem'

import './cart.css'

class Cart extends Component {

  state = {
    cartItems: []
  }

  // WillMount , DidMount 차이
  // componentWillMount 는 컴포넌트 생성 주기중 render 함수 전에 실행되기 때문에
  // render에서 세팅한 dummy 데이터를 읽어올 수 없다.
  // 실행순서 : constructor -> componentWillMount -> render -> componentDidMount
  componentDidMount() {
    this.getCartData()
  }

  getCartData = () => {
    if (sessionStorage.getItem('cart') === null) {
      return console.log('장바구니가 비어있습니다.')
    }

    this.setState({
      cartItems: JSON.parse(sessionStorage.getItem('cart'))
    })
  }

  updateChange = (data) => {
    console.log(this.state.cartItems, data)
    const { cartItems } = this.state
    // this.setState((prevState) => {
    //   return {
    //     ...prevState,
    //     quantity: quantity + 1,
    //     price: price * quantity
    //   }
    // }, () => {
    //   console.log("this", this.state)
    // })
  }

  render() {

    // dummy
    if (undefined === sessionStorage.cart) {
      sessionStorage.cart = '[{"name":"상품명1","src":"https://raw.githubusercontent.com/it-crafts/mockapi/master/img/01.jpg","price":5000,"quantity":2},{"name":"상품명2","src":"https://raw.githubusercontent.com/it-crafts/mockapi/master/img/02.jpg","price":7000,"quantity":2},{"name":"상품명3","src":"https://raw.githubusercontent.com/it-crafts/mockapi/master/img/03.jpg","price":6000,"quantity":3},{"name":"상품명4","src":"https://raw.githubusercontent.com/it-crafts/mockapi/master/img/04.jpg","price":10000,"quantity":1},{"name":"상품명5","src":"https://raw.githubusercontent.com/it-crafts/mockapi/master/img/05.jpg","price":3000,"quantity":5}]';
    }

    const { cartItems } = this.state
    const cartLists = cartItems.map((itemInfo, i) => {
      return <CartItem itemInfo={itemInfo} key={i} onChange={this.updateChange} /> 
    })

    return (
      <section className="_9eogI E3X2T">
        <main className="SCxLW uzKWK " role="main">
          <div className="uKzpc">장바구니</div>
          <CartTotal />
          {cartLists}
        </main>
      </section>
    );
  }
}

export default Cart;