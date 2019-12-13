import React, { Component } from 'react';
import Gallery from './Gallery'
import LoadingIcon from './LoadingIcon'

class Product extends Component {

  state = {
    isLoading: false,
  }

  setLoading = (isLoading) => {
    this.setState({
      isLoading: isLoading
    })
    return isLoading
  }

  render() {

    const { isLoading } = this.state

    return (
      <>
        <section className="_9eogI E3X2T">
          <main className="SCxLW uzKWK " role="main">
            <div className="v9tJq ">
              <header className="HVbuG">
                <div className="XjzKX">
                  <div className="RR-M- h5uC0" role="button" tabIndex="0">
                    <canvas className="CfWVH" height="182" width="182" style={{ position: "absolute", top: "-7px", left: "-7px", width: "91px", height: "91px" }}></canvas>
                    <span className="_2dbep" role="link" tabIndex="0" style={{ width: "77px", height: "77px" }}>
                      <img alt="twicetagram님의 프로필 사진" className="_6q-tv" src="https://instagram.ficn1-1.fna.fbcdn.net/vp/a6ceaf9f47bd7ce000a9dc2d1f3d462c/5E606A7A/t51.2885-19/s150x150/14350502_2130269970532564_1274547492301570048_a.jpg?_nc_ht=instagram.ficn1-1.fna.fbcdn.net" />
                    </span>
                  </div>
                </div>

                <section className="zwlfE">
                  <div className="nZSzR">
                    <h1 className="_7UhW9 fKFbl yUEEX KV-D4 fDxYl "> twicetagram</h1>
                    <span className="mrEK_ Szr5J coreSpriteVerifiedBadge " title="인증됨"> 인증됨</span>
                  </div>
                  <div className="Y2E37">
                    <a className=" ffKix sF8Vp" rel="nofollow" href="javascript:;">
                      <button className="sqdOP L3NKy _4pI4F y3zKF " type="button"> 팔로우</button>
                    </a>
                  </div>
                </section>
              </header>

              
              <div className="-vDIg">
                  <h1 className="rhpdm"> TWICE</h1><br /><span> TWICE OFFICIAL INSTAGRAM<br /> ^-^</span>
                </div>

                <ul className=" _3dEHb">
                  <li className=" LH36I">
                    <a className=" _81NM2" href="javascript:;"> 게시물
                     <span className="g47SY lOXF2">1,899</span>
                    </a>
                  </li>
                  <li className=" LH36I">
                    <a className=" _81NM2" href="javascript:;"> 팔로워
                    <span className="g47SY lOXF2" title="10,706,254"> 10.7백만</span>
                    </a>
                  </li>
                  <li className=" LH36I">
                    <a className=" _81NM2" href="javascript:;"> 팔로우
                     <span className="g47SY lOXF2">25</span>
                    </a>
                  </li>
                </ul>

                <Gallery setLoading={this.setLoading} isLoading={isLoading} />
            </div>
          </main>

          <nav className="NXc7H f11OC X6gVd">
                <div className="_8MQSO ZoygQ ">
                    <div className="Xwp_P">
                        <div className="rBWT5"></div>
                        <div className="KGiwt">
                            <div className="_Cwuq">
                                <div className="ryLs_"><a className="trEs_ Szr5J coreSpriteMobileNavTypeLogo"
                                        href="javascript:;"> Instagram</a>
                                    <div className="yKJnu"><a className="dfm5c" href="javascript:;"> 로그인</a><span className="lAP6S">
                                            |</span><a className="dfm5c" href="javascript:;"> 가입하기</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>


          
        </section>
        <LoadingIcon isLoading={isLoading} />
      </>
    );
  }
}

export default Product;