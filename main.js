import * as THREE from "three";

// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add a planet
const planetTexture = new THREE.TextureLoader().load(
  "path/to/planet_texture.jpg"
);
const planetGeometry = new THREE.SphereGeometry(5, 32, 32);
const planetMaterial = new THREE.MeshStandardMaterial({ map: planetTexture });
const planet = new THREE.Mesh(planetGeometry, planetMaterial);
scene.add(planet);

// Add background stars
const starMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.1 });
const starGeometry = new THREE.BufferGeometry();
const starCount = 1000;
const positions = new Float32Array(starCount * 3);
for (let i = 0; i < starCount * 3; i++) {
  positions[i] = (Math.random() - 0.5) * 1000;
}
starGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
const stars = new THREE.Points(starGeometry, starMaterial);
scene.add(stars);

// Set up user interaction (e.g., with a Raycaster)
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
// ... add event listeners and implement desired interactivity

// Animate the scene
function animate() {
  requestAnimationFrame(animate);

  // Rotate the planet
  planet.rotation.y += 0.001;

  renderer.render(scene, camera);
}

animate();

// // Add a moon
// const moonTexture = new THREE.TextureLoader().load("path/to/moon_texture.jpg");
// const moonGeometry = new THREE.SphereGeometry(1, 32, 32);
// const moonMaterial = new THREE.MeshStandardMaterial({ map: moonTexture });
// const moon = new THREE.Mesh(moonGeometry, moonMaterial);
// moon.position.set(10, 0, 0);
// scene.add(moon);

// // Animate the scene
// let moonOrbitAngle = 0;
// function animate() {
//   requestAnimationFrame(animate);

//   // Rotate the planet
//   planet.rotation.y += 0.001;

//   // Orbit the moon around the planet
//   moonOrbitAngle += 0.002;
//   moon.position.x = 10 * Math.cos(moonOrbitAngle);
//   moon.position.z = 10 * Math.sin(moonOrbitAngle);

//   renderer.render(scene, camera);
// }

// animate();
