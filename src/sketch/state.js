import {Clock} from "three";
import {InteractionManager} from "three.interactive";

class State {
  clock = new Clock()

  constructor() {
    if (!State.instance) {
      State.instance = this;
    }
    // constructor code START
    //
    // constructor code END
    return State.instance;
  }

  createInteractionManager(renderer, camera) {
    this.interactionManager = new InteractionManager(renderer, camera, renderer.domElement);
}
  time() {
    return this.clock.getElapsedTime();
  }
}

const state = new State();

export default state;
