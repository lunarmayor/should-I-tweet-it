import React from 'react'
import TweetStore from './../stores/TweetStore'
import DOM from '@mmorrissey/DOM'

let loadingMessages = [
  'assessing trends...',
  'performing semantic breakdown...',
  'assigning cultural value...',
  'checking horoscopes...',
  'analyzing hipness...',
  'checking browser history...',
  'frowning...',
  'regaining focus...',
  'calculating result...',
];

class TweetAnalyzer extends React.Component {
  constructor(props) {
    super(props)
    this.state = { descNum: 0 }
  }

  componentDidMount() {
    this.timer = setInterval( () => this.changeMessage(), 2500)
    this.wordTimer = setInterval( () => this.setAnalysisEmphasis(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
    clearInterval(this.wordTimer)
  }

  setAnalysisEmphasis() {
    let words = [].slice.call(DOM.findAll('.tweetAnalyzer-word'))
    words.forEach( (word) => {
      word.classList.remove('is-emphasised');
      if(Math.random() > 0.5) {
        word.classList.add('is-emphasised');
      }
    })
  }

  changeMessage() {
    if(this.state.descNum >= (loadingMessages.length - 1)) {
      clearInterval(this.timer)
    } else {
      this.setState({
        descNumber: this.state.descNum++
      })
    }
  }

  render() {
    let words = TweetStore.text.split(' ').map( (word) => {
      return <span><span className="tweetAnalyzer-word">{word}</span><span>{' '}</span></span>
    })

    return (
      <div className="tweetAnalyzer">
        <div className="tweetAnalyzer-container">
          <div className="tweetAnalyzer-desc">
            {loadingMessages[this.state.descNum]}
          </div>

          <div className="tweetAnalyzer-words">
            { words }
          </div>
        </div>
      </div>
    )
  }
}

export default TweetAnalyzer
