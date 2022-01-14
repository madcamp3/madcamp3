import { GLTFLoader } from './three/examples/jsm/loaders/GLTFLoader.js';
import * as THREE from './three/build/three.module.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( -1000, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();

const loader = new GLTFLoader();

loader.load('./musicvis1.glb', function (gltf){
    scene.add(gltf.scene);
}, undefined, function(error){
    console.error(error);
});

document.body.appendChild(renderer.domElement);