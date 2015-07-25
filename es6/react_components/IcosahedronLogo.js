import React from 'react'
import ThreeComponent from '@mmorrissey/three-component'
import THREE from 'three'

// <IcosahedronLogo />
class IcosahedronLogo extends ThreeComponent {
  renderScene() {
    let material = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      vertexColors: THREE.FaceColors,
    });

    let geometry = new THREE.IcosahedronGeometry(10, 1);
    geometry.faces.forEach(this.setFaceColor);

    this.logo = new THREE.Mesh(geometry, material);
    this.scene.add(this.logo);

    this.camera.position.z = 22;
    this.animate();
  }

  setFaceColor(face) {
    face.color.setRGB(0.1 + Math.random() * 0.1,
                      0.56 + Math.random() * 0.1,
                      0.75 + Math.random() * 0.25);
  }

  animate() {
    this.logo.rotation.y += 0.001;
    window.requestAnimationFrame( () => this.animate());
    this.renderer.render(this.scene, this.camera);
  }

  render() {
    return (
      <div className="icosahedronLogo" ref="renderer"></div>
    );
  }
}

export default IcosahedronLogo
