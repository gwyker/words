import {Color, FogExp2, Scene} from 'three';
import {SCENE_COLOR} from "../config.js";

function createScene() {
  const scene = new Scene();

  scene.background = new Color(SCENE_COLOR);
  // if (FOG_ON) {
  //   scene.fog = new FogExp2(SCENE_COLOR, FOG_STRENGTH)
  // }

  return scene;
}

export { createScene };
