import React from 'react'

class TweetInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { charsLeft: 140 };
  }

  calculateChars() {
    window.that = this
    window.React = React
    let totalChars = React.findDOMNode(this.refs.input).value.length;
    let charsLeft = 140 - totalChars;
    this.setState({ charsLeft: charsLeft });
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
        <textarea onChange={this.calculateChars.bind(this)} ref="input" placeholder="your brilliant tweet..." className="tweetInput-textarea"></textarea>
        <div className="tweetInput-btn" onClick={this.startAnalysis}>Analyze</div>
        <div className="tweetInput-characterCount" ref="characterCount">{this.state.charsLeft}</div>
      </div>
    )
  }
}

export default TweetInput
