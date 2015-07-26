import React from 'react'
import ThreeComponent from '@mmorrissey/three-component'
import THREE from 'three'

class IcosahedronLoader extends ThreeComponent {
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
      <div className="icoLoader" ref="renderer"></div>
    )
  }
}

export default IcosahedronLoader
