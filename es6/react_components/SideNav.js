import React from 'react'
import THREE from 'three'

// <SideNav />
class SideNav extends React.Component {
  componentDidMount() {
    this.setupLogo();
  }

  setupLogo() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, 1, 0.1, 10000);

    this.setupRenderer();
    this.addObject();
  }

  setupRenderer() {
    this.renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    this.renderer.setSize(80, 80);
    this.renderer.domElement.classList.add('sideNav-logo');
    React.findDOMNode(this).appendChild(this.renderer.domElement);
  }

  addObject() {
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
      <nav className="sideNav"></nav>
    );
  }
}

export default SideNav
