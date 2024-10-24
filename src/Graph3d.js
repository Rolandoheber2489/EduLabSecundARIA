import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const Graph3D = () => {
    const sceneRef = useRef();
    const [camera, setCamera] = useState(null);
    const raycaster = new THREE.Raycaster();

    useEffect(() => {
        // Crear la escena
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0xf0f0f0); // Fondo claro para mayor visibilidad

        // Crear la cámara
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.set(0, 0, 5); // Posicionamos la cámara para que apunte a la escena
        setCamera(camera); // Guardamos la cámara en el estado

        // Crear el renderizador
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth * 0.8, window.innerHeight * 0.8); // Asegurar que ocupa el 80% de la pantalla
        if (sceneRef.current) {
            sceneRef.current.appendChild(renderer.domElement); // Añadimos el canvas a nuestro div
        }

        // Añadir controles de órbita
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true; // Suaviza la interacción
        controls.dampingFactor = 0.25;
        controls.screenSpacePanning = false; // Evitar que la cámara se mueva hacia arriba y abajo
        controls.maxPolarAngle = Math.PI / 2; // Limitar el ángulo de visión

        // Añadir un cubo para visualizar algo en la escena
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshBasicMaterial({ color: 0x0077ff });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube); // Añadir cubo a la escena

        // Función de renderizado
        const animate = () => {
            requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);
        };

        animate(); // Iniciar la animación

        // Evento de clic para detectar intersecciones
        const handleClick = (event) => {
            if (camera) {
                const mouse = new THREE.Vector2(
                    (event.clientX / window.innerWidth) * 2 - 1,
                    -(event.clientY / window.innerHeight) * 2 + 1
                );
                raycaster.setFromCamera(mouse, camera);

                // Detectar intersección con el cubo
                const intersects = raycaster.intersectObject(cube);
                if (intersects.length > 0) {
                    console.log('Cubo clickeado!');
                }
            }
        };

        // Agregar el evento de clic
        window.addEventListener('click', handleClick);

        // Cleanup
        return () => {
            // Limpiar el evento al desmontar
            window.removeEventListener('click', handleClick); 

            // Limpiar el renderer si sceneRef.current está definido
            if (sceneRef.current) {
                sceneRef.current.removeChild(renderer.domElement); // Limpiar el canvas
            }
            renderer.dispose(); // Limpiar el renderizador
        };
    }, []);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h1>Graficadora 3D Avanzada</h1>
            <div ref={sceneRef} style={{ width: '80vw', height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}></div>
        </div>
    );
};

export default Graph3D;
