import { createCamera } from './components/camera.js';
import { createScene } from './components/scene.js';

import { createRenderer } from './systems/renderer.js';
import { createLights } from './components/lights.js'
import { createControls } from './systems/controls.js'

import {Clock} from 'three'
import state from "./state.js";

let camera;
let scene;
let renderer;

class Sketch {

  constructor(container) {
    this.container = container;
    this.clock = new Clock();
    this.updatables = [];
    this.setupScene();
  }

  async init() {
    await this.setupObjects();
  }

  setupScene() {
    camera = createCamera();
    scene = createScene();
    renderer = createRenderer();
    this.container.append(renderer.domElement);
    state.createInteractionManager(renderer, camera);

    const resize = () => {
      camera.aspect = this.container.clientWidth / this.container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(this.container.clientWidth, this.container.clientHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
    }
    resize();
    window.addEventListener('resize', () => {
      resize()
    });
  }

  async setupObjects() {
    const { ambientLight, mainLight } = createLights();

    const controls = createControls(camera, renderer.domElement);
    // controls.enabled = false
    // controls.autoRotate = false
    this.updatables.push(controls);

    scene.add(
        ambientLight,
        mainLight,
    );
  }

  update() {
    const delta = state.clock.getDelta();
    state.interactionManager.update();
    this.updatables.forEach((obj) => obj.update(delta))
  }

  render() {
    renderer.render(scene, camera);
  }

  start() {
    renderer.setAnimationLoop(() => {
      this.update();
      this.render(scene, camera);
    });
  }

  stop() {
    renderer.setAnimationLoop(null);
  }
}

export { Sketch };
