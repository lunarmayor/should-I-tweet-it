import React from 'react'

// <TweetsAnalyzed >
class TweetsAnalyzed extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tweetsAnalyzed: 12404204 };
  }

  componentDidMount() {
    setInterval( () => this.incrementTweets(), 300)
  }

  incrementTweets() {
    let randomInc = Math.ceil(Math.random() * 4);
    this.setState({
      tweetsAnalyzed: this.state.tweetsAnalyzed + randomInc,
    });
  }

  render() {
    return (
      <div className="tweetAnalyzer">
        <div className="tweetAnalyzer-count">
          {this.state.tweetsAnalyzed.toLocaleString()}
        </div>
        <div className="tweetAnalyzer-desc">
          Tweets Analyzed
        </div>
      </div>
    )
  }
}

export default TweetsAnalyzed
