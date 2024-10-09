import React from 'react';
import './App.css';
import AtomScene from './AtomScene';  // Cambiamos a la escena del átomo

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>EduLab - Modelo Atómico Interactivo</h1>
      </header>
      <main>
      <AtomScene />  {/* Renderiza la escena 3D del átomo aquí */}
      </main>
    </div>
  );
}

export default AtomScene;

