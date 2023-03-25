import { Mesh, TextureLoader } from "three";

function setupModel(model, texturePath) {
    if (texturePath) {
        const texLoader = new TextureLoader();
        const texture = texLoader.load(texturePath);
        model.traverse((child) => {
            if (child instanceof Mesh) {
                child.material.map = texture;
            }
        });
    }
    return model
}

export { setupModel };
