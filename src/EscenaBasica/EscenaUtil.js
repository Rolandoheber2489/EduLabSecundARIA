// src/utils/sceneUtils.js
import * as THREE from "three";

export const createBasicScene = (width, height) => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(width, height);

  // Agregar el renderer a la página
  document.body.appendChild(renderer.domElement);

  // Posicionar la cámara
  camera.position.z = 5;

  // Agregar una luz básica
  const light = new THREE.AmbientLight(0x404040, 1); // Luz ambiental suave
  scene.add(light);

  return { scene, camera, renderer };
};
