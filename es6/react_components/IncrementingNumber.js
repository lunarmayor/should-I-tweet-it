import React from 'react'
import Intl from 'intl'
import { FormattedNumber } from 'react-intl'

// <IncrementingNumber/>
class IncrementingNumber extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: props.start || 0 };
  }

  componentDidMount() {
    let ms = this.props.ms || 300;
    setInterval( () => this.increment(), ms);
  }

  increment() {
    let randomInc = Math.ceil(Math.random() * 4);
    this.setState({
      count: this.state.count + randomInc,
    })
  }

  render() {
    let classes = this.props.className
    return (
      <div className={classes}>
        <FormattedNumber className={classes} value={this.state.count}/>
      </div>
    )
  }
}

export default IncrementingNumber
