import React from 'react'

class TweetAnalyzer extends React.Component {
  render() {
    console.log(this.props)
    let words = this.props.text.split(' ').map( (word) => {
      return <span>{word} </span>
    })

    return (
      <div>{ words }</div>
    )
  }
}

export default TweetAnalyzer
