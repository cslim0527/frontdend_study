import React, { Component } from 'react';
import Tab from './components/Tab'
import Timeline from './components/Timeline'
import Feed from './components/Feed'
import LoadingIcon from './components/LoadingIcon'

import './App.css'

class App extends Component {

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
    isLoading: false,
    currentTab : '게시물'
  }

  setLoading = (isLoading) => {
    this.setState({
      isLoading: isLoading
    })
    return isLoading
  }

  setActiveTab = (tabName) => {
    this.setState({
      currentTab: tabName
    })
  }
  
  changeTab = (currentTab) => {
    const { isLoading } = this.state
    switch (currentTab) {
      case '게시물':
        return <Timeline setLoading={this.setLoading} isLoading={isLoading}/>
      case '피드': 
        return <Feed />
      case '태그됨': 
        console.log('태그됨 탭이 열립니다.')
        break;
      default : 
        return <Timeline setLoading={this.setLoading} isLoading={isLoading}/>
    }
  }

  render() {
    const { isLoading, currentTab } = this.state
    
    return (
      <div>
        <Tab setActiveTab={this.setActiveTab} tabLists={this.tabLists} currentTab={currentTab}/>
        {this.changeTab(currentTab)}
        <LoadingIcon isLoading={isLoading} />
      </div>
    );
  }
}

export default App;