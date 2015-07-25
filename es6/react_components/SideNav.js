import React from 'react'
import IcosahedronLogo from './IcosahedronLogo'

// <SideNav />
class SideNav extends React.Component {
  render() {
    return (
      <nav className="sideNav">
        <IcosahedronLogo width="80" height="80" />
      </nav>
    );
  }
}

export default SideNav
