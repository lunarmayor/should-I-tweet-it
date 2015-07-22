import React from 'react'

class PulseMenu extends React.Component {
  toggleDrawer() {
    React.findDOMNode(this.refs.drawer)
      .classList.toggle('is-open');
  }

  render() {
    return (
      <div className="pulseMenu">
        <div className="pulseMenu-orb"></div>
        <div className="pulseMenu-pulse" onClick={this.toggleDrawer.bind(this)}></div>
        <div className="pulseMenu-drawerContainer">
          <div className="pulseMenu-drawer" ref="drawer">
            <img className="pulseMenu-lunarLogo" src="http://i59.tinypic.com/2ch2gw6.png"/>
            <div className="pulseMenu-lunarText">Lunar<br/>Mayor</div>
          </div>
        </div>
      </div>
    );
  }
}

export default PulseMenu
