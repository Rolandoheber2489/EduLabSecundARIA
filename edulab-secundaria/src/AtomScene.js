import React, { useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html, Text, Line } from '@react-three/drei'; // Importa Line desde drei
import { extend } from '@react-three/fiber';
import { TextGeometry } from 'three-stdlib'; // Importa TextGeometry desde three-stdlib

extend({ TextGeometry }); // Registra TextGeometry

const Nucleus = () => {
  return (
    <group>
      <mesh position={[-0.2, 0, 0]}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial color="red" /> {/* Protones */}
      </mesh>
      <mesh position={[0.2, 0, 0]}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial color="yellow" /> {/* Neutrones */}
      </mesh>
    </group>
  );
};

const Electron = ({ size, distance, speed, energyLevel, onClick }) => {
  const ref = React.useRef();

  useFrame(({ clock }) => {
    ref.current.position.x = distance * Math.cos(clock.getElapsedTime() * speed);
    ref.current.position.z = distance * Math.sin(clock.getElapsedTime() * speed);
  });

  return (
    <mesh ref={ref} onClick={() => onClick(energyLevel)}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial color="blue" />
      {/* Etiqueta para el electrón */}
      <Text
        position={[0, 0.5, 0]} // Ajusta la posición según sea necesario
        fontSize={0.1}
        color="white"
      >
        {`E${energyLevel}`}
      </Text>
    </mesh>
  );
};

const Orbit = ({ distance }) => {
  const points = [];
  const segments = 100; // Número de segmentos para la línea

  for (let i = 0; i < segments; i++) {
    const angle = (i / segments) * Math.PI * 2; // Ángulo de la órbita
    points.push(
      distance * Math.cos(angle),
      0, // En el plano XY
      distance * Math.sin(angle)
    );
  }

  return (
    <Line
      points={points} // Puntos para la trayectoria
      color="green" // Color de la órbita
      lineWidth={2} // Grosor de la línea
      dashed={true} // Línea discontinua
    />
  );
};

const AtomScene = () => {
  const [selectedElectron, setSelectedElectron] = useState(null);

  const electronInfo = {
    "1": "Nivel de energía 1 (K): 2 electrones.",
    "2": "Nivel de energía 2 (L): 4 electrones."
  };

  const handleElectronClick = (energyLevel) => {
    setSelectedElectron(energyLevel);
  };

  return (
    <div style={{ width: '100%', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <Canvas style={{ width: '80%', height: '80%' }} camera={{ position: [0, 5, 10] }}>
        <ambientLight intensity={0.5} />
        <Nucleus />
        {/* Trayectorias de los electrones */}
        <Orbit distance={1.2} /> {/* Órbita para el nivel K */}
        <Orbit distance={2.2} /> {/* Órbita para el nivel L */}
        
        {/* Electrones en el nivel de energía K */}
        <Electron size={0.1} distance={1.2} speed={0.02} energyLevel="1" onClick={handleElectronClick} />
        <Electron size={0.1} distance={1.2} speed={0.02} energyLevel="1" onClick={handleElectronClick} />
        {/* Electrones en el nivel de energía L */}
        <Electron size={0.1} distance={2.2} speed={0.01} energyLevel="2" onClick={handleElectronClick} />
        <Electron size={0.1} distance={2.2} speed={0.01} energyLevel="2" onClick={handleElectronClick} />
        <Electron size={0.1} distance={2.2} speed={0.01} energyLevel="2" onClick={handleElectronClick} />
        <Electron size={0.1} distance={2.2} speed={0.01} energyLevel="2" onClick={handleElectronClick} />
        <OrbitControls />
      </Canvas>

      {/* Mostrar la información del electrón seleccionado */}
      {selectedElectron && (
        <div style={{ marginTop: '20px', textAlign: 'center', color: 'white', backgroundColor: '#333', padding: '10px', borderRadius: '8px' }}>
          <h2>Información sobre el electrón</h2>
          <p>{electronInfo[selectedElectron]}</p>
        </div>
      )}
    </div>
  );
};

export default AtomScene;
