import React from 'react'
import CanNavigate from './../decorators/CanNavigate'
import TweetStore from './../stores/TweetStore'

@CanNavigate
class TweetInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { charsLeft: 140 };
  }

  calculateChars() {
    let totalChars = React.findDOMNode(this.refs.input).value.length;
    let charsLeft = 140 - totalChars;
    this.handleCountColor();
    this.setState({ charsLeft: charsLeft });
  }

  handleCountColor() {
    let classList = React.findDOMNode(this.refs.characterCount)
                      .classList;

    let action = this.state.charsLeft < 1 ? 'add' : 'remove';
    classList[action]('is-over');
  }

  tweetText() {
    return React.findDOMNode(this.refs.input).value
  }

  startAnalysis() {
    TweetStore.text = this.tweetText();
    this.transitionTo('loading');
  }

  render() {
    return (
      <div className="tweetInput">
        <textarea onChange={this.calculateChars.bind(this)} ref="input" placeholder="your brilliant tweet..." className="tweetInput-textarea"></textarea>
        <div className="tweetInput-btn" onClick={this.startAnalysis.bind(this)}>Analyze</div>
        <div className="tweetInput-characterCount" ref="characterCount">{this.state.charsLeft}</div>
      </div>
    )
  }
}

export default TweetInput
