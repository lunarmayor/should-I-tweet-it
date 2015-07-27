import React from 'react/addons'
import SideNav from './SideNav'
import PulseMenu from './PulseMenu'
import TimeoutTransitionGroup from 'timeout-transition-group'

class App extends React.Component {
  render () {
    let key = this.props.location.pathname;

    return (
      <div className="app">
        <SideNav width='80' height='80' rendererClass='sideNav-logo'/>
        <PulseMenu />
        <TimeoutTransitionGroup component="div" enterTimeout={600} leaveTimeout={600} transitionName="fade">
          {React.cloneElement(this.props.children || <div/>, { key: key })}
        </TimeoutTransitionGroup>
      </div>
    )
  }
}

export default App
