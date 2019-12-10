import React, { Component } from 'react';

class Tab extends Component {


  activeClass = (spanClass) => {
    return spanClass.replace(/grey/g, 'blue')
  }

  handleClick = (e) => {
    e.preventDefault()
    const { setActiveTab } = this.props
    const labelName = e.currentTarget.children[0].getAttribute('aria-label')
    setActiveTab(labelName)
  }

  render() {

    const { tabLists, currentTab } = this.props
    const tabs = tabLists.map((tab, i) =>{
      
      const activeAclass = currentTab === tab.name ? "_9VEo1 T-jvg" : "_9VEo1"
      const activeSpanClass = currentTab === tab.name ? this.activeClass(tab.class) : tab.class

      return <a key={i} className={activeAclass} href="#" onClick={this.handleClick}>
              <span aria-label={tab.name} className={activeSpanClass + " u-__7"}></span>
            </a>
    })

    return (
      <div className="fx7hk">
        {tabs}
      </div>
    );
  }
}

export default Tab;