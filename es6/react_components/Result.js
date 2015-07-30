import React from 'react'
import TweetStore from './../stores/TweetStore'

class Result extends React.Component {
  componentDidMount() {
    React.findDOMNode(this.refs.no).classList.add('is-growing');
    React.findDOMNode(this.refs.tweetLink).classList.add('is-entering');
  }

  render() {
    return (
      <div className="result">
        <div className="result-should">Should I tweet it?</div>
        <div className="result-no" ref="no">
          <div>NO</div>
          <a ref="tweetLink" className="result-tweet"
             href={`https://twitter.com/intent/tweet?text=${TweetStore.text}`}>
             {'tweet it anyway :)'}
          </a>
        </div>
      </div>
    )
  }
}

export default Result
