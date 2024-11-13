import React from "react";
import "./Estilos/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Paginas/Home/Home";
import AulaVirtual from "./AulaVirtual/AulaVirtual";
import Matematicas from "./Paginas/Matematicas/Matematicas";
import MatematicasIntro from "./Paginas/Matematicas/MatematicasIntro";
import QuimicaIntro from "./Paginas/Quimica/QuimicaIntro";
import ZapparARScene from "./Componentes/ZapparARSceneMath"; // Importa tu componente
import Quimica from "./Paginas/Quimica/Quimica";
import Fisicas from "./Paginas/Fisica/Fisica";
import FisicaIntro from "./Paginas/Fisica/FisicaIntro";

function App() {
  return (
    <div className="App">
      {/*<header className="App-header">
      </header>*/}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />{" "}
          {/* Ruta para la página principal */}
          <Route path="/aula" element={<AulaVirtual />} />{" "}
          {/* Ruta para el aula virtual */}
          <Route path="/MatematicasIntro" element={<MatematicasIntro />} />{" "}
          {/* Ruta para la página de MatemáticasIntro */}
          <Route path="/Matematicas" element={<Matematicas />} />{" "}
          {/* Ruta para la página de Matemáticas */}
          <Route path="/FisicaIntro" element={<FisicaIntro />} />{" "}
          {/* Ruta para la página de FísicaIntro*/}
          <Route path="/Fisica" element={<Fisicas />} />{" "}
          {/* Ruta para la página de Física */}
          <Route path="/QuimicaIntro" element={<QuimicaIntro />} />{" "}
          {/* Ruta para la página de Quimica */}
          <Route path="/Quimica" element={<Quimica />} />{" "}
          {/* Ruta para la página principal */}
          <Route path="/zappar" element={<ZapparARScene />} />{" "}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
