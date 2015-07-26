import React from 'react'
import Intl from 'intl'
import { FormattedNumber } from 'react-intl'

// <StatPanel stat="100%" desc="Accuracy"/>
class StatPanel extends React.Component {
  render() {
    let statElement;
    if(this.props.children) {
      statElement = this.props.children
    } else {
      statElement = <div className="statPanel-stat">{this.props.stat}</div>
    }

    return (
      <div className="statPanel">
        {statElement}
        <div className="statPanel-desc">
          {this.props.desc}
        </div>
      </div>
    )
  }
}

export default StatPanel
