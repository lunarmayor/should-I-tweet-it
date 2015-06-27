import { React } from 'react'
import { THREE } from 'three'

// <SideNav />
class SideNav extends React.Component {
  componentDidMount() {
    this.setupLogo();
    this.animateVerticalText();
  }

  animateVerticalText() {
    setTimeout( () => {
      React.findDOMNode(this.refs.VText)
        .classList.add('is-visible');
    }, 800)
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
    this.renderer.setSize(100, 100);
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
    window.requestAnimationFrame(this.animate);
    this.renderer.render(this.scene, this.camera);
  }

  render() {
    return (
      <nav className="sideNav">
        <div className="sideNav-verticalText" ref="VText">
          A<br/>I<br/><br/>S<br/>O<br/>L<br/>U<br/>T<br/>I<br/>O<br/>N<br/>S
        </div>
      </nav>
    );
  }
}

export default SideNav
