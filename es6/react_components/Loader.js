import React from 'react'
import THREE from 'three'
import IcosahedronLoader from './IcosahedronLoader'
import CanNavigate from './../decorators/CanNavigate'

let loadingMessages = [
  'priming semantic engines',
  'chanting big data',
  'praying to the almighty Jobs',
  'crawling the social graph',
  'introspecting on my choices',
  'starting tweet analysis',
]

// <Loader />
@CanNavigate
class Loader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { descNum: 0 }
  }

  componentDidMount() {
    this.timer = setInterval( () => this.changeMessage(), 2000);
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  changeMessage() {

    if(this.state.descNum >= (loadingMessages.length - 1)) {
      clearInterval(this.timer)
      this.transitionTo('analyzing_tweet')
    } else {
      this.setState({
        descNumber: this.state.descNum++,
      })
    }
  }

  render() {
    return (
      <div className="loader">
        <div className="loader-container">
          <div className="loader-indicator">
            <div className="loader-pulse"></div>
            <div className="loader-pulse2"></div>
            <IcosahedronLoader width="200" height="200"/>
          </div>
          <div className="loader-desc">{loadingMessages[this.state.descNum]}</div>
        </div>
      </div>
    )
  }
}

export default Loader
