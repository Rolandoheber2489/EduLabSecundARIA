import React, { useState, useRef, useEffect, useCallback } from "react";
import { ZapparCanvas, ZapparCamera } from "@zappar/zappar-react-three-fiber";
import { useGLTF } from "@react-three/drei"; // Importamos useGLTF
//import GestureControl from './GestureControl';

const Model = ({ position, rotation, scale }) => {
  const { scene } = useGLTF("/Images/earth.glb"); // Ruta a tu modelo GLB

  return (
    <primitive
      object={scene}
      position={position}
      rotation={rotation}
      scale={scale}
    />
  );
};

const ZapparARScene = () => {
  const [position, setPosition] = useState([1, -1, -7]);
  const [rotation, setRotation] = useState([0, 0, 0]);
  const [scale, setScale] = useState(1);
  const isDragging = useRef(false);
  const lastMousePosition = useRef({ x: 0, y: 0 });

  const handleMouseMove = useCallback((event) => {
    if (!isDragging.current) return;

    const deltaX = event.clientX - lastMousePosition.current.x;
    const deltaY = event.clientY - lastMousePosition.current.y;

    setRotation((prevRotation) => [
      prevRotation[0] + deltaY * 0.01,
      prevRotation[1] + deltaX * 0.01,
      prevRotation[2],
    ]);

    lastMousePosition.current = { x: event.clientX, y: event.clientY };
  }, []);

  const handleMouseDown = useCallback((event) => {
    isDragging.current = true;
    lastMousePosition.current = { x: event.clientX, y: event.clientY };
  }, []);

  const handleMouseUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [handleMouseMove, handleMouseDown, handleMouseUp]);

  const handlePositionChange = useCallback((axis, value) => {
    setPosition((prevPosition) => {
      const newPosition = [...prevPosition];
      newPosition[axis] = value;
      return newPosition;
    });
  }, []);

  const handleRotationChange = useCallback((axis, value) => {
    setRotation((prevRotation) => {
      const newRotation = [...prevRotation];
      newRotation[axis] = value;
      return newRotation;
    });
  }, []);

  const handleScaleChange = useCallback((value) => {
    setScale(value);
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <ZapparCanvas style={{ width: "80%", height: "80vh" }}>
        <ZapparCamera />
        {/*<GestureControl />*/}
        <ambientLight intensity={2} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />

        {/* Aquí utilizamos el modelo en lugar del cubo */}
        <Model
          position={position}
          rotation={rotation}
          scale={[scale, scale, scale]}
        />
      </ZapparCanvas>
      <div
        style={{
          position: "flex",
          bottom: 20,
          right: 20,
          backgroundColor: "green",
          padding: 10,
          borderRadius: "5px",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        <h3>Menú de Configuración</h3>
        <div>
          <h4>Posición</h4>
          <label>
            X:
            <input
              type="range"
              min={-5}
              max={5}
              step={0.1}
              value={position[0]}
              onChange={(e) =>
                handlePositionChange(0, parseFloat(e.target.value))
              }
            />
          </label>
          <label>
            Y:
            <input
              type="range"
              min={-5}
              max={5}
              step={0.1}
              value={position[1]}
              onChange={(e) =>
                handlePositionChange(1, parseFloat(e.target.value))
              }
            />
          </label>
          <label>
            Z:
            <input
              type="range"
              min={-10}
              max={0}
              step={0.1}
              value={position[2]}
              onChange={(e) =>
                handlePositionChange(2, parseFloat(e.target.value))
              }
            />
          </label>
        </div>
        <div>
          <h4>Rotación (grados)</h4>
          <label>
            X:
            <input
              type="range"
              min={-180}
              max={180}
              step={1}
              value={rotation[0]}
              onChange={(e) =>
                handleRotationChange(0, parseFloat(e.target.value))
              }
            />
          </label>
          <label>
            Y:
            <inpu
              t
              type="range"
              min={-180}
              max={180}
              step={1}
              value={rotation[1]}
              onChange={(e) =>
                handleRotationChange(1, parseFloat(e.target.value))
              }
            />
          </label>
          <label>
            Z:
            <input
              type="range"
              min={-180}
              max={180}
              step={1}
              value={rotation[2]}
              onChange={(e) =>
                handleRotationChange(2, parseFloat(e.target.value))
              }
            />
          </label>
        </div>
        <div>
          <h4>Escala</h4>
          <input
            type="range"
            min={5}
            max={15}
            step={1}
            value={scale}
            onChange={(e) => handleScaleChange(parseFloat(e.target.value))}
          />
        </div>
      </div>
    </div>
  );
};

export default ZapparARScene;
