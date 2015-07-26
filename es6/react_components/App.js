import React from 'react/addons'
import SideNav from './SideNav'
import PulseMenu from './PulseMenu'

const { CSSTransitionGroup } = React.addons;

class App extends React.Component {
  render () {
    let key = this.props.location.pathname;

    return (
      <div className="app">
        <SideNav width='80' height='80' rendererClass='sideNav-logo'/>
        <PulseMenu />
        <CSSTransitionGroup component="div" transitionName="fade">
          {React.cloneElement(this.props.children || <div/>, { key: key })}
        </CSSTransitionGroup>
      </div>
    )
  }
}

export default App
