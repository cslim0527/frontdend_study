import React, { Component } from 'react';
import TimelineItem from './TimelineItem'

class TimelineRow extends Component {

  render() {
    const { timelineRow } = this.props
    const timlineList = timelineRow.map((timeline, i) => <TimelineItem key={i} timelineImg={timeline}/>)
    return (
      <div className="Nnq7C weEfm">
        {timlineList}
      </div>
    );
  }
}

export default TimelineRow;