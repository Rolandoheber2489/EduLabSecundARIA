import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import AulaVirtual from './AulaVirtual';
import Matematicas from './Matematicas';
import Fisica from './Fisica';
import QuimicaIntro from './QuimicaIntro';
import ZapparARScene from './Componentes/ZapparARScene'; // Importa tu componente
import Quimica from './Quimica';


function App() {
  return (
    <div className="App">
      {/*<header className="App-header">
      </header>*/}
      <Router>
            <Routes>
                <Route path="/" element={<Home />} /> {/* Ruta para la página principal */}
                <Route path="/aula" element={<AulaVirtual />} /> {/* Ruta para el aula virtual */}
                <Route path="/matematicas" element={<Matematicas />} /> {/* Ruta para la página de Matemáticas */}
                <Route path="/fisica" element={<Fisica />} /> {/* Ruta para la página de Física */}
                <Route path="/QuimicaIntro" element={<QuimicaIntro />} /> {/* Ruta para la página de Quimica */}
                <Route path="/Quimica" element={<Quimica />} /> {/* Ruta para la página principal */}
                <Route path="/zappar" element={<ZapparARScene />} /> {/* Ruta para la escena WebXR */}  
            </Routes>
        </Router>
    </div>
  );
}

export default App;