import React, { Component } from 'react';

class TimelineItem extends Component {

  imgPath = "https://raw.githubusercontent.com/it-crafts/mockapi/master/"

  handleClick = (e) => {
    e.preventDefault()
  }

  render() {

    const { timelineImg } = this.props

    return (
      <>
        <div className="v1Nh3 kIKUG _bz0w">
          <a href="#" onClick={this.handleClick}>
            <div className="eLAPa">
              <div className="KL4Bh">
                <img className="FFVAD" decoding="auto" src={this.imgPath + timelineImg } style={{objectFit: "cover"}} alt="타임라인" />
              </div>
              <div className="_9AhH0"></div>
            </div>
            <div className="u7YqG"><span aria-label="슬라이드" className="mediatypesSpriteCarousel__filled__32 u-__7"></span></div>
          </a>
        </div>
      </>
        );
      }
    }
    
export default TimelineItem;