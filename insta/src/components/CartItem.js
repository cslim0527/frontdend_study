import React, { Component } from 'react';

class CartItem extends Component {

  handleClickPlus = () => {
    const { onChange } = this.props
    onChange(this.props.itemInfo)
  }

  handleClickMinus = () => {
    const { onChange } = this.props
    onChange('-')
  }

  render() {

    const { name, price, quantity, src } = this.props.itemInfo

    return (
      <div id="cart">
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
              <div className="Pkbci">
                <button onClick={this.handleClickPlus} className="sqdOP L3NKy y3zKF " type="button" style={{ marginBottom: "2px" }}>+</button>
                <button onClick={this.handleClickMinus} className="sqdOP L3NKy y3zKF " type="button" style={{ marginTop: "2px" }}>-</button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default CartItem;