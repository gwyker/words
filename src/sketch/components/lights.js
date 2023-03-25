import { DirectionalLight, HemisphereLight } from 'three'


function createLights() {
    const ambientLight = new HemisphereLight(
        'skyblue',
        'darkblue',
        1,
    );
    const mainLight = new DirectionalLight('white', 1);
    mainLight.position.set(-20, -100, 80);
    return { ambientLight, mainLight };
}

export { createLights };
