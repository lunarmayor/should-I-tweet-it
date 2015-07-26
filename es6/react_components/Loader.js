import React from 'react'
import THREE from 'three'
import IcosahedronLoader from './IcosahedronLoader'

// <Loader />
class Loader extends React.Component {
  render() {
    return (
      <div className="loader">
        <div className="loader-container">
          <div className="loader-indicator">
            <div className="loader-pulse"></div>
            <div className="loader-pulse2"></div>
            <IcosahedronLoader width="200" height="200"/>
          </div>
          <div className="loader-desc">priming semantic engines</div>
        </div>
      </div>
    )
  }
}

export default Loader
