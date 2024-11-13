import React, { useState, useRef, useEffect, useCallback } from "react";
import { ZapparCanvas, ZapparCamera } from "@zappar/zappar-react-three-fiber";
import { useGLTF } from "@react-three/drei"; // Importamos useGLTF
import "../Estilos/Paginas.css"; // Puedes mejorar la organización del CSS

const Model = ({ position, rotation, scale }) => {
  const { scene } = useGLTF("/Images/quimica.glb"); // Ruta a tu modelo GLB
  return (
    <primitive
      object={scene}
      position={position}
      rotation={rotation}
      scale={scale}
    />
  );
};

const ZapparARSceneChemical = () => {
  const [position, setPosition] = useState([0, 0, -20]);
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

  // Función para resetear valores
  const resetTransformations = () => {
    setPosition([0, 0, -20]);
    setRotation([0, 0, 0]);
    setScale(1);
  };

  return (
    <div className="zapparScene">
      <ZapparCanvas>
        <ZapparCamera />
        <ambientLight intensity={2} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />
        <Model
          position={position}
          rotation={rotation}
          scale={[scale, scale, scale]}
        />
      </ZapparCanvas>

      <div className="menu">
        <h3>Menú de Configuración</h3>
        <div className="config-section">
          <h4>Posición</h4>
          {["X", "Y", "Z"].map((axis, index) => (
            <label key={axis}>
              {axis}:
              <input
                type="range"
                min={-5}
                max={5}
                step={0.1}
                value={position[index]}
                onChange={(e) =>
                  handlePositionChange(index, parseFloat(e.target.value))
                }
              />
            </label>
          ))}
        </div>

        <div className="config-section">
          <h4>Rotación (grados)</h4>
          {["X", "Y", "Z"].map((axis, index) => (
            <label key={axis}>
              {axis}:
              <input
                type="range"
                min={-180}
                max={180}
                step={1}
                value={rotation[index]}
                onChange={(e) =>
                  handleRotationChange(index, parseFloat(e.target.value))
                }
              />
            </label>
          ))}
        </div>

        <div className="config-section">
          <h4>Escala</h4>
          <input
            type="range"
            min={0}
            max={2}
            step={0.1}
            value={scale}
            onChange={(e) => handleScaleChange(parseFloat(e.target.value))}
          />
        </div>

        <div className="config-section">
          <button onClick={resetTransformations}>Resetear</button>
        </div>
      </div>
    </div>
  );
};

export default ZapparARSceneChemical;
