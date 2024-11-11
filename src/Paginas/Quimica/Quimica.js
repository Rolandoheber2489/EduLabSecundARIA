import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Componentes/NavBar";
import ZapparARScene from "../../Componentes/ZapparARScene";
import "bootstrap/dist/css/bootstrap.min.css"; // Asegúrate de importar Bootstrap
//import AtomScene from "../../Componentes/AtomScene";
import Footer from "../../Componentes/Footer"; // Importa el componente Footer

const Quimica = () => {
  return (
    <div
      style={{
        width: "100%",
        marginTop: "400px",
        textAlign: "center",
        padding: "40px",
      }}
    >
      <Navbar />
      {/* Contenedor Principal */}
      <div className="container mt-4">
        <h1 className="text-center">Química General e Inorgánica</h1>

        {/* Botón de Atrás */}
        <div className="text-center my-3">
          <Link to="/QuimicaIntro" className="btn btn-outline-dark me-2">
            Atrás
          </Link>
        </div>

        {/* Descripción */}
        <p className="text-center">
          La Química General e Inorgánica es el estudio de las propiedades de la
          materia, estructura atómica y molecular, enlaces químicos y reacciones
          químicas.
        </p>

        {/* Sección de Contenido Principal */}
        <div className="main-content bg-light d-flex align-items-center justify-content-center">
          <ZapparARScene />
        </div>

        {/* Descripción de la Imagen */}
        <p className="text-center mt-3">
          Representación gráfica de un átomo, destacando el núcleo y las órbitas
          de los electrones.
        </p>
      </div>
      {/* Pie de Página Reutilizable */}
      <Footer /> {/* Usa el componente Footer aquí */}
    </div>
  );
};

export default Quimica;
