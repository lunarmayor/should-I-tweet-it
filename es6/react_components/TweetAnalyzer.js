import React from 'react'
import TweetStore from './../stores/TweetStore'

class TweetAnalyzer extends React.Component {
  render() {
    let words = TweetStore.text.split(' ').map( (word) => {
      return <span className="tweetAnalyzer-word">{word + ' '}</span>
    })

    return (
      <div className="tweetAnalyzer">
        <div className="tweetAnalyzer-container">
          { words }
        </div>
      </div>
    )
  }
}

export default TweetAnalyzer
