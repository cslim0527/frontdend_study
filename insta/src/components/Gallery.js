import React, { Component } from 'react';
import Tab from './Tab'
import Timeline from './Timeline'
import Feed from './Feed'

class Gallery extends Component {

  tabLists = [
    {
      name: '게시물',
      class: 'glyphsSpritePhoto_grid__outline__24__grey_5'
    },
    {
      name: '피드',
      class: 'glyphsSpritePhoto_list__outline__24__grey_5'
    },
    {
      name: '태그됨',
      class: 'glyphsSpriteTag_up__outline__24__grey_5'
    }
  ]

  state = {
    currentTab: '게시물'
  }

  setActiveTab = (tabName) => {
    this.setState({
      currentTab: tabName
    })
  }

  changeTab = (currentTab) => {
    const { setLoading, isLoading } = this.props
    switch (currentTab) {
      case '게시물':
        return <Timeline setLoading={setLoading} isLoading={isLoading} />
      case '피드':
        return <Feed />
      case '태그됨':
        console.log('태그됨 탭이 열립니다.')
        break;
      default:
        return <Timeline setLoading={setLoading} isLoading={isLoading} />
    }
  }

  render() {
    const { currentTab } = this.state

    return (
      <div className=" _2z6nI">
        <article className="FyNDV">
          <div style={{flexDirection: "column", paddingBottom: "0px", paddingTop: "0px"}}>
            <Tab setActiveTab={this.setActiveTab} tabLists={this.tabLists} currentTab={currentTab} />
            {this.changeTab(currentTab)}
          </div>
        </article>
      </div>
    )
  }
}

export default Gallery;