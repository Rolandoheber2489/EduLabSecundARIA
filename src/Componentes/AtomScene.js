import React, { useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text, Line, Sky } from "@react-three/drei";
import { extend } from "@react-three/fiber";
import { TextGeometry } from "three-stdlib";

extend({ TextGeometry }); // Registra TextGeometry

const Nucleus = () => (
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

const Electron = ({ size, distance, speed, energyLevel, onClick }) => {
  const ref = React.useRef();

  useFrame(({ clock }) => {
    ref.current.position.x =
      distance * Math.cos(clock.getElapsedTime() * speed);
    ref.current.position.z =
      distance * Math.sin(clock.getElapsedTime() * speed);
  });

  return (
    <mesh ref={ref} onClick={() => onClick(energyLevel)}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial color="blue" />
      <Text position={[0, 0.5, 0]} fontSize={0.1} color="black">
        {`E${energyLevel}`}
      </Text>
    </mesh>
  );
};

const Orbit = ({ distance }) => {
  const segments = 100; // Número de segmentos para la línea
  const points = Array.from({ length: segments }, (_, i) => {
    const angle = (i / segments) * Math.PI * 2; // Ángulo de la órbita
    return [
      distance * Math.cos(angle),
      0, // En el plano XY
      distance * Math.sin(angle),
    ];
  }).flat();

  return <Line points={points} color="green" lineWidth={1} dashed={true} />;
};

const AtomScene = () => {
  const [selectedElectron, setSelectedElectron] = useState(null);
  const electronInfo = {
    1: "Nivel de energía 1 (K): 2 electrones.",
    2: "Nivel de energía 2 (L): 4 electrones.",
  };

  const handleElectronClick = (energyLevel) => {
    setSelectedElectron(energyLevel);
  };

  const electronData = [
    { size: 0.1, distance: 1.2, speed: 0.02, energyLevel: "1" },
    { size: 0.1, distance: 1.2, speed: 0.02, energyLevel: "1" },
    { size: 0.1, distance: 2.2, speed: 0.01, energyLevel: "2" },
    { size: 0.1, distance: 2.2, speed: 0.01, energyLevel: "2" },
    { size: 0.1, distance: 2.2, speed: 0.01, energyLevel: "2" },
    { size: 0.1, distance: 2.2, speed: 0.01, energyLevel: "2" },
  ];

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        /*flexDirection: 'column'*/ alignItems: "center",
        justifyContent: "flex",
      }}
    >
      <Canvas
        style={{ width: "100%", height: "100%" }}
        camera={{ position: [0, 5, 10] }}
      >
        <ambientLight intensity={0.5} />
        <Sky sunPosition={[100, 20, 100]} />
        <Nucleus />
        {/* Trayectorias de los electrones */}
        <Orbit distance={1.2} /> {/* Órbita para el nivel K */}
        <Orbit distance={2.2} /> {/* Órbita para el nivel L */}
        {/* Electrones */}
        {electronData.map((electron, index) => (
          <Electron key={index} {...electron} onClick={handleElectronClick} />
        ))}
        <OrbitControls />
      </Canvas>

      {/* Mostrar la información del electrón seleccionado */}
      {selectedElectron && (
        <div
          style={{
            marginTop: "20px",
            textAlign: "justify",
            color: "white",
            backgroundColor: "#333",
            padding: "10px",
            borderRadius: "8px",
          }}
        >
          <h2>Información sobre el electrón</h2>
          <p>{electronInfo[selectedElectron]}</p>
        </div>
      )}
    </div>
  );
};

export default AtomScene;
