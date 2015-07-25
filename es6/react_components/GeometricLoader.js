import React from 'react'
import THREE from 'three'
import ThreeComponent from '@mmorrissey/three-component'
import SideNav from './SideNav'

// <GeometricLoader />
class GeometricLoader extends ThreeComponent {
  renderScene() {
    let material = new THREE.MeshBasicMaterial({
      color: '#0099cc',
      wireframe: true,
    })

    let geometry = new THREE.IcosahedronGeometry(10,1);
    this.loader = new THREE.Mesh(geometry, material);

    this.scene.add(this.loader);
    this.camera.position.z = 22;
    this.animate()
  }

  animate() {
    this.loader.rotation.y += 0.001;
    window.requestAnimationFrame( () => this.animate());
    this.renderer.render(this.scene, this.camera);
  }

  render() {
    return (
      <div className="app">
        <SideNav width='80' height='80' rendererClass='sideNav-logo'/>
        <div className='main'>
          <div className="geomLoader">
            <div className="geomLoader-canvasContainer" ref="renderer"></div>
            <div className="geomLoader-desc">priming semantic engines</div>
          </div>
        </div>
      </div>
    )
  }
}

export default GeometricLoader
