import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import './App.css'; // Asegúrate de importar los estilos

const ProjectileMotion = () => {
    const sceneRef = useRef();
    const scene = useRef(new THREE.Scene());
    const [velocity, setVelocity] = useState(50);
    const [angle, setAngle] = useState(45);
    const [trajectoryLine, setTrajectoryLine] = useState(null);
    const rendererRef = useRef();

    useEffect(() => {
        const camera = new THREE.PerspectiveCamera(75, 800 / 600, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        rendererRef.current = renderer; // Guardar el renderer en una referencia

        const width = 800;
        const height = 600;
        renderer.setSize(width, height);
        sceneRef.current.appendChild(renderer.domElement);

        // Agregar luz
        const ambientLight = new THREE.AmbientLight(0xffffff, 1);
        scene.current.add(ambientLight);
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(5, 5, 5);
        scene.current.add(directionalLight);

        // Ejes
        const axesHelper = new THREE.AxesHelper(5);
        scene.current.add(axesHelper);

        // Cargar modelo
        const loader = new GLTFLoader();
        loader.load('ruta/a/tu/modelo.glb', (gltf) => {
            scene.current.add(gltf.scene);
            gltf.scene.position.set(0, 0, 0);
        }, undefined, (error) => {
            console.error('Error al cargar el modelo:', error);
        });

        // Crear el proyectil
        const projectileGeometry = new THREE.SphereGeometry(0.2, 32, 32);
        const projectileMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
        const projectile = new THREE.Mesh(projectileGeometry, projectileMaterial);
        scene.current.add(projectile);

        // Posicionar la cámara
        camera.position.set(0, 5, 10);
        camera.lookAt(0, 0, 0);

        const g = 9.81;
        let time = 0;

        const animate = () => {
            requestAnimationFrame(animate);
            time += 0.05; // Cambiado a 0.05 para ralentizar la simulación
            const x = velocity * Math.cos(THREE.MathUtils.degToRad(angle)) * time;
            const y = velocity * Math.sin(THREE.MathUtils.degToRad(angle)) * time - 0.5 * g * time ** 2;

            projectile.position.set(x, y, 0);

            if (y < 0) {
                time = 0; // Reiniciar el tiempo si el proyectil toca el suelo
            }

            renderer.render(scene.current, camera);
        };

        animate();

        return () => {
            // Asegúrate de que el renderer domElement sea parte de sceneRef.current
            if (sceneRef.current.contains(renderer.domElement)) {
                sceneRef.current.removeChild(renderer.domElement);
            }
        };
    }, [velocity, angle]); // Dependencias agregadas para actualizar cuando cambian

    const drawTrajectory = () => {
        if (trajectoryLine) {
            scene.current.remove(trajectoryLine);
        }

        const trajectoryPoints = [];
        const g = 9.81;
        for (let t = 0; t <= 2 * (velocity * Math.sin(THREE.MathUtils.degToRad(angle))) / g; t += 0.1) {
            const x = velocity * Math.cos(THREE.MathUtils.degToRad(angle)) * t;
            const y = velocity * Math.sin(THREE.MathUtils.degToRad(angle)) * t - 0.5 * g * t ** 2;
            trajectoryPoints.push(new THREE.Vector3(x, y, 0));
        }

        const trajectoryGeometry = new THREE.BufferGeometry().setFromPoints(trajectoryPoints);
        const trajectoryMaterial = new THREE.LineBasicMaterial({ color: 0x0000ff });
        const line = new THREE.Line(trajectoryGeometry, trajectoryMaterial);
        scene.current.add(line);
        setTrajectoryLine(line);
    };

    useEffect(() => {
        drawTrajectory();
    }, [velocity, angle]);

    const totalTime = (2 * velocity * Math.sin(THREE.MathUtils.degToRad(angle))) / 9.81;
    const maxDistance = velocity * Math.cos(THREE.MathUtils.degToRad(angle)) * totalTime;

    return (
        <div id="sceneContainer">
            <div ref={sceneRef} />
            <input 
                type="range" 
                min="0" 
                max="100" 
                value={velocity} 
                onChange={(e) => setVelocity(e.target.value)} 
            />
            <input 
                type="range" 
                min="0" 
                max="90" 
                value={angle} 
                onChange={(e) => setAngle(e.target.value)} 
            />
            <p>Velocidad: {velocity} m/s</p>
            <p>Ángulo: {angle}°</p>
            <p>Distancia Alcanzada: {maxDistance.toFixed(2)} m</p>
        </div>
    );
};

export default ProjectileMotion;
