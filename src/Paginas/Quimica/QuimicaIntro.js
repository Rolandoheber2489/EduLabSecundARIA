import React from "react";
import { Link } from "react-router-dom";
import AtomScene from "../../Componentes/AtomScene";
import Navbar from "../../Componentes/NavBar";
import Footer from "../../Componentes/Footer"; // Importa el componente Footer
import "/Users/belen/Desktop/Rolando/seminario/EduLab-SecundARIA/edulab-secundaria/src/Estilos/Paginas.css";

const QuimicaIntro = () => {
  return (
    <div className="container">
      <Navbar />
      <section
        className="background-image container my-5"
        id="seccion-principal"
      >
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <h1 className="display-4 fw-bold text-dark">
              Bienvenido al laboratorio interactivo 3D de QUÍMICA
            </h1>
            <p className="lead">
              Explorá y aprende QUÍMICA de manera educativa e inmersiva.
            </p>
            <div className="d-flex justify-content-center justify-content-md-start">
              <Link to="/QuimicaVerMas" className="btn btn-outline-dark me-2">
                Ver más
              </Link>
              <Link to="/Quimica" className="btn btn-dark" id="iniciarBtn">
                Iniciar
              </Link>
            </div>
          </div>

          <div className="col-md-6 d-flex justify-content-center">
            <div className="expand" id="modelo3D">
              <AtomScene />
            </div>
          </div>
        </div>
      </section>
      <Footer /> {/* Usa el componente Footer aquí */}
    </div>
  );
};

export default QuimicaIntro;
