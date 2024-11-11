// src/utils/loadModel.js
import * as THREE from "three";

export const loadModel = (scene, modelName) => {
  const loader = new THREE.GLTFLoader(); // O cualquier otro cargador si tienes el modelo en otro formato (como OBJ, FBX, etc.)

  loader.load(
    `./models/${modelName}.glb`, // Ruta del modelo, ajusta el nombre según el laboratorio
    (gltf) => {
      const model = gltf.scene;
      scene.add(model); // Agregar el modelo a la escena
    },
    undefined,
    (error) => {
      console.error("Error loading model:", error);
    }
  );
};
