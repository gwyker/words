import { Sketch } from './sketch/sketch.js';

async function main() {
  const container = document.querySelector('#app');
  const sketch = new Sketch(container);
  await sketch.init()
  sketch.start();
}

main().catch((e) => console.error(e));
