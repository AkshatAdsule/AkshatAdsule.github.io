import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import "./style.css";

// Setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
	75,
	window.innerWidth / window.innerHeight,
	0.1,
	1000
);
// Scale of objects based on window width
let scale = 0.0035 * window.innerWidth;
// Move camera back
camera.position.z = scale * 3;

const renderer = new THREE.WebGLRenderer({
	canvas: document.querySelector<HTMLCanvasElement>("#bg")!,
	antialias: true,
});
renderer.setSize(window.innerWidth, window.innerHeight);

const loader = new GLTFLoader();

// Load name model
let nameObject: THREE.Group;
loader.load("models/akshat.glb", function (model) {
	console.log("Loaded model");
	nameObject = model.scene;
	nameObject.scale.set(scale, scale, scale);
	// rotate 90 degrees or pi/2 radians
	nameObject.rotateX(Math.PI / 2);
	scene.add(nameObject);
});

// Lighting
const darkBluePointLight = new THREE.PointLight(0x4942ff);
darkBluePointLight.intensity = 0.35;
darkBluePointLight.position.set(15, 0, 15);

const lightBluePointLight = new THREE.PointLight(0x1daffd);
lightBluePointLight.intensity = 0.35;
lightBluePointLight.position.set(0, 0, 15);

const greenPointLight = new THREE.PointLight(0x69f61e);
greenPointLight.intensity = 0.35;
greenPointLight.position.set(-15, 0, 15);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.2);
directionalLight.position.set(0, 0, -30);
scene.add(directionalLight);

scene.add(darkBluePointLight, lightBluePointLight, greenPointLight);

renderer.render(scene, camera);

// Handle window resize
let handleResize = () => {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
};

window.onresize = handleResize;

// Animation loop
function animate() {
	requestAnimationFrame(animate);

	if (nameObject) {
		nameObject.rotation.y += 0.01;
		nameObject.rotation.z += 0.01;
	}
	renderer.render(scene, camera);
}
animate();
