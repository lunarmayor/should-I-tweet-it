import { React } from 'react'

class TweetInput extends React.Component {
  getInitialState() {
    return {
      charsLeft: 140,
    }
  }

  calculateChars() {
    let totalChars = React.findDomNode(this.refs.input).value.length;
    let charsLeft = 140 - totalChars;
    this.setState({charsLeft: charsLeft});
    this.handleCountColor();
  }

  handleCountColor() {
    let classList = React.findDOMNode(this.refs.characterCount)
                      .classList;

    let action = this.state.charsLeft < 0 ? 'add' : 'remove';
    classList[action]('is-over');
  }

  startAnalysis() {
    console.log('hello')
  }

  render() {
    return (
      <div className="tweetInput">
        <h4>Try it out</h4>
        <textarea onChange={this.calculateChars} ref="input" placeholder="your brilliant tweet..." className="tweetInput-textarea"></textarea>
        <div className="tweetInput-btn" onClick={this.startAnalysis}>Analyze</div>
        <div className="tweetInput-characterCount" ref="characterCount">{this.state.charsLeft}</div>
      </div>
    )
  }
}

export default TweetInput
