import React from 'react'
import IcosahedronLogo from './IcosahedronLogo'
import { Link } from 'react-router'

// <SideNav />
class SideNav extends React.Component {
  render() {
    return (
      <nav className="sideNav">
        <Link to='/'>
          <IcosahedronLogo width="80" height="80" />
        </Link>
      </nav>
    );
  }
}

export default SideNav
