import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Line, Sky, Text } from '@react-three/drei';
import * as THREE from 'three';

const FunctionGraph = ({ func, range = [-10, 10], step = 0.1 }) => {
  const points = [];

  for (let x = range[0]; x <= range[1]; x += step) {
    const y = func(x); // Aplica la función que pasaste como parámetro
    points.push(new THREE.Vector3(x, y, 0)); // Crea puntos en el plano X-Y
  }

  return (
    <Line
      points={points} // Puntos que forman la línea
      color="blue" // Color de la línea
      lineWidth={1} // Ancho de la línea
      dashed={false} // Si la línea es discontinua
    />
  );
};

// Ejes X e Y con valores de referencia
const Axes = ({ range = 10 }) => {
  const xPoints = [
    new THREE.Vector3(-range, 0, 0),
    new THREE.Vector3(range, 0, 0)
  ];

  const yPoints = [
    new THREE.Vector3(0, -range, 0),
    new THREE.Vector3(0, range, 0)
  ];

  return (
    <>
      {/* Eje X */}
      <Line points={xPoints} color="black" lineWidth={1} />
      {/* Valores en el eje X */}
      {Array.from({ length: range * 2 + 1 }, (_, i) => i - range).map((x) => (
        x !== 0 && (
          <Text
            key={`x-${x}`}
            position={[x, 0.3, 0]} // Ajusta la posición ligeramente encima del eje
            fontSize={0.3}
            color="black"
          >
            {x}
          </Text>
        )
      ))}

      {/* Eje Y */}
      <Line points={yPoints} color="black" lineWidth={1} />
      {/* Valores en el eje Y */}
      {Array.from({ length: range * 2 + 1 }, (_, i) => i - range).map((y) => (
        y !== 0 && (
          <Text
            key={`y-${y}`}
            position={[0.3, y, 0]} // Ajusta la posición ligeramente al lado del eje
            fontSize={0.3}
            color="black"
          >
            {y}
          </Text>
        )
      ))}
    </>
  );
};

const Grafica = () => {
  return (
    <div style={{ width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Canvas style={{ width: '100%', height: '100%' }} camera={{ position: [0, 5, 10] }}>
        <ambientLight intensity={0.5} />
        <Sky sunPosition={[100, 20, 100]} />

        {/* Ejes X e Y */}
        <Axes range={10} />

        {/* Gráfico de la función */}
        <FunctionGraph func={(x) => Math.sin(x)} range={[-10, 10]} step={0.1} />

        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default Grafica;
