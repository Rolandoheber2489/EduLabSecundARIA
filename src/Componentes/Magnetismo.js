import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Line, Sky, Sphere } from '@react-three/drei';
import * as THREE from 'three';

// Función para crear líneas de campo magnético
const MagneticFieldLine = ({ start, end, color = 'red' }) => {
  const points = [];
  const curve = new THREE.CatmullRomCurve3([start, end]);

  for (let i = 0; i <= 1; i += 0.05) {
    points.push(curve.getPoint(i));
  }

  return (
    <Line
      points={points} // Puntos que forman la línea
      color={color} // Color de la línea
      lineWidth={0.5} // Ancho de la línea
    />
  );
};

// Representa el imán y sus líneas de campo
const Magnetismo = () => {
  const poleOffset = 2; // Separación de los polos

  return (
    <div style={{ width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Canvas style={{ width: '100%', height: '100%' }} camera={{ position: [0, 5, 10] }}>
        <ambientLight intensity={0.5} />
        <Sky sunPosition={[100, 20, 100]} />

        {/* Polos del imán */}
        <Sphere position={[-poleOffset, 0, 0]} args={[0.3, 16, 16]} color="red">
          <meshStandardMaterial color="red" />
        </Sphere>
        <Sphere position={[poleOffset, 0, 0]} args={[0.3, 16, 16]} color="blue">
          <meshStandardMaterial color="blue" />
        </Sphere>

        {/* Líneas de campo magnético */}
        {Array.from({ length: 10 }, (_, i) => {
          const angle = (i / 9) * Math.PI;
          const xStart = -poleOffset + Math.cos(angle) * 1.5;
          const yStart = Math.sin(angle) * 1.5;
          const xEnd = poleOffset - Math.cos(angle) * 1.5;
          const yEnd = Math.sin(angle) * 1.5;

          return (
            <MagneticFieldLine
              key={i}
              start={new THREE.Vector3(xStart, yStart, 0)}
              end={new THREE.Vector3(xEnd, yEnd, 0)}
              color="purple"
            />
          );
        })}

        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default Magnetismo;