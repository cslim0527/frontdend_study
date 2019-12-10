import React, { Component } from 'react';
import axios from 'axios';
import TimelineRow from './TimelineRow'

// 화면 렌더링에 영향을 주지 않는 상태값을 만드는것을 지양한다.
// setState는 비동기적으로 작동한다.

class Timeline extends Component {

  url = 'https://my-json-server.typicode.com/it-crafts/mockapi/timeline/'
  totalPage = 1
  page = 1

  state = {
    timelineArray : []
  }

  async componentDidMount() {
    this.timelineAPI()
    const { data } = await this.getTimelineInfo(this.url)
    this.totalPage = data.totalPage

    window.addEventListener('scroll', this.handleScroll)
  }

  getTimelineData = async (url, page) => {
    const { data: { data }} = await axios.get(`${url + page}`)
    console.log(data)
    return data
  }

  getTimelineInfo = async (url) => {
    const { data } = await axios.get(`${url + 'info'}`)
    console.log(data)
    return data
  }

  timelineAPI = async () => {
    const { setLoading } = this.props
    setLoading(true)

    const { timelineArray } = this.state
    this.setState({
      timelineArray: timelineArray.concat(await this.getTimelineData(this.url, this.page))
    })

    setLoading(false)
  }

  handleScroll = async () => {
    const docHeight = document.documentElement.scrollHeight
    const winHeight = document.documentElement.clientHeight
    const scrollTop = window.pageYOffset

    const { timelineArray } = this.state
    const { setLoading, isLoading } = this.props

    if (this.totalPage <= this.page) {
         window.removeEventListener('scroll', this.handleScroll)
        return
    }

    if(isLoading) return

    if (scrollTop + winHeight > docHeight - 200) {
        setLoading(true)
        
        this.page++
        this.setState({
          timelineArray: timelineArray.concat(await this.getTimelineData(this.url, this.page))
        })

        setLoading(false)
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }
 
  render() {

    const { timelineArray } = this.state
    const timelineRowList = timelineArray.map((timelineRow, i) => <TimelineRow key={i} timelineRow={timelineRow} />) 
    
    return (
     <>
        {timelineRowList}
     </>
    );
  }
}

export default Timeline;