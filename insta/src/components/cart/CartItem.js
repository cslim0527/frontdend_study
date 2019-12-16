import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../../actions'
import Counter from './Counter'


class CartItem extends Component {

  render() {

    const { name, price, quantity, src, id } = this.props.itemInfo

    return (
      <div className="cart_item">
        <ul className=" jjbaz _6xe7A">
          <li className="wo9IH">
            <div className="uu6c_">
              <div className="t2ksc">
                <div className="RR-M- SAvC5" role="button" tabIndex="0">
                  <canvas className="CfWVH" height="120" width="120" style={{ position: "absolute", top: "-5px", left: "-5px", width: "40px", height: "40px" }}></canvas>
                  <a className="_2dbep qNELH kIKUG" href="#" style={{ width: "56px", height: "56px" }}>
                    <img alt="" className="_6q-tv" src={src} />
                  </a>
                </div>
                <div className="enpQJ">
                  <div className="d7ByH">
                    <a className="FPmhX notranslate _0imsa " title="yeongdong07" href="#">
                      {name}
                    </a>
                  </div>
                  <div className="wFPL8 ">
                    {price}원 × {quantity}개 ＝ {price * quantity}원
                  </div>
                </div>
              </div>

              <Counter onPlus={this.props.handleClickPlus} onMinus={this.props.handleClickMinus} id={id} />

            </div>
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state: state.counter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleClickPlus: (index) => dispatch(actions.increment(index)),
    handleClickMinus: (index) => dispatch(actions.decrement(index))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);