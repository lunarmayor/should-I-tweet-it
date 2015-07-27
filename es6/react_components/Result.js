import React from 'react'

class Result extends React.Component {
  componentDidMount() {
    React.findDOMNode(this.refs.no).classList.add('is-growing')
  }

  render() {
    return (
      <div className="result">
        <div className="result-should">Should I tweet it?</div>
        <div className="result-no" ref="no">NO</div>
      </div>
    )
  }
}

export default Result
