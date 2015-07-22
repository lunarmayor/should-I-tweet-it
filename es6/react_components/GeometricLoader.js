import React from 'react'
import THREE from 'three'

// <GeometricLoader />
class GeometricLoader extends React.Component {
  componentDidMount() {
    this.setupGeometry()
  }

  setupGeometry() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, 1, 0.1, 10000);

    this.setupRenderer();
    this.addGeometry();
  }

  setupRender() {
    this.renderer = new THREE.
  }
   setupRenderer() {
    this.renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    this.renderer.setSize(80, 80);
    this.renderer.domElement.classList.add('geomLoader-geom');
    React.findDOMNode(this).appendChild(this.renderer.domElement);
  }
}

